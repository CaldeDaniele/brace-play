// Life after the crash: one journal page per day, rationing, expeditions, events.
import { animate, stagger } from 'motion';
import { CREW, DESTS, EVENTS, SCHEDULE, DECK, DAYS, DAY_FLAVOR } from './data.js';
import * as audio from './audio.js';
import { el, $, $$, showScreen, banner, pulse, clamp, wait, done } from './ui.js';

const ZONE_LABEL = { brace: 'Lato Brace (troppo caldo)', brina: 'Lato Brina (troppo freddo)', crepuscolo: 'Fascia del crepuscolo' };
const shuffle = (a) => a.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(([, v]) => v);

export function newGame(res) {
  const G = {
    day: 1, s: res.s, zone: res.zone, hull: res.hull, o2: 100,
    res: { cibo: 2, acqua: 2, energia: 2, medikit: 0 },
    tools: new Set(),
    crew: CREW.map((c) => ({ ...c, alive: true, hunger: 0, thirst: 0, status: null, sick: 0, hurt: 0, away: 0, fed: false, watered: false, cause: '' })),
    flags: { relitto: false, signal: 0 },
    deck: shuffle(DECK), report: [], returned: [], savedNames: res.saved.map((i) => i.name.toLowerCase()),
  };
  for (const item of res.saved) {
    for (const [k, v] of Object.entries(item.give || {})) G.res[k] += v;
    if (item.tool) G.tools.add(item.id);
  }
  shuffle(G.crew).slice(0, res.injuries).forEach((c) => { c.status = 'ferito'; c.hurt = 0; });
  return G;
}

// ------------------------------------------------------------- landing report
export function showLanding(res, G) {
  return new Promise((resolve) => {
    const hurt = G.crew.filter((c) => c.status === 'ferito').map((c) => c.name);
    const node = el(`
      <section class="screen report">
        <div class="report-card">
          <img class="report-img" src="assets/img/ev_crash.webp" alt="" data-in>
          <h1 data-in>A terra</h1>
          <ul class="stats" data-in>
            <li><span>Zona</span><b>${ZONE_LABEL[res.zone]}</b></li>
            <li><span>Paracadute</span><b>${res.chuteLabel}</b></li>
            <li><span>Massa all’impatto</span><b>${res.mass} kg</b></li>
            <li><span>Scafo</span><b class="${res.hull < 50 ? 'bad' : ''}">${res.hull}%</b></li>
            <li><span>Feriti</span><b>${hurt.length ? hurt.join(', ') : 'nessuno'}</b></li>
          </ul>
          <div class="kept" data-in>
            ${res.saved.map((i) => `<figure><img src="${i.icon}" alt=""><figcaption>${i.name}</figcaption></figure>`).join('')}
            ${res.burnt.map((i) => `<figure class="lost"><img src="${i.icon}" alt=""><figcaption>${i.name} (bruciato)</figcaption></figure>`).join('')}
          </div>
          <button class="btn primary" id="go" data-in>Giorno 1</button>
        </div>
      </section>`);
    showScreen(node);
    animate($$('.kept figure', node), { opacity: [0, 1], scale: [0.6, 1] }, { delay: stagger(0.06, { startDelay: 0.8 }), type: 'spring', bounce: 0.4 });
    $('#go', node).addEventListener('click', () => { audio.blip(880); resolve(); }, { once: true });
  });
}

// ------------------------------------------------------------------ day loop
export async function playDays(G, scene) {
  audio.music('mus_base', { volume: 0.55 });
  const wind = await audio.play('sfx_wind', { loop: true, volume: 0.25 });
  scene.setMode('ground');
  try {
    for (;;) {
      startDay(G);
      scene.ground.setCamp(G);
      await dayScreen(G, scene);
      endDay(G);
      const end = checkEnd(G);
      if (end) return end;
      G.day++;
      if (G.day > DAYS) return checkEnd(G, true);
      await dayCard(G.day);
    }
  } finally {
    wind.stop(1.5);
  }
}

function present(G) { return G.crew.filter((c) => c.alive && !c.away); }

function startDay(G) {
  G.returned = [];
  for (const c of G.crew) {
    if (c.alive && c.away && c.away <= G.day) {
      c.away = 0;
      G.returned.push(expeditionResult(G, c));
    }
  }
  const sched = SCHEDULE[G.day];
  let id = sched;
  if (!id) {
    while (G.deck.length) {
      const next = G.deck.shift();
      if (!EVENTS[next].when || EVENTS[next].when(G)) { id = next; break; }
    }
  }
  G.event = id || 'notte';
  G.answered = false;
  G.outcome = '';
  for (const c of G.crew) { c.fed = false; c.watered = false; }
}

function expeditionResult(G, c) {
  const d = DESTS[c.dest];
  const geared = !d.gear || G.tools.has(d.gear);
  const lines = [];
  let hurt = !geared ? Math.random() < 0.6 : Math.random() < (c.dest === 'relitto' ? 0.25 : 0.15);
  const near = (c.dest === 'brace' && G.s < 0) || (c.dest === 'brina' && G.s > 0) ? 1 : 0;
  if (c.dest === 'brace') {
    const e = (geared ? 2 : 1) + near;
    G.res.energia += e;
    lines.push(`+${e} energia (batterie fuse a metà)`);
    if (geared && Math.random() < 0.5) { G.hull = Math.min(100, G.hull + 12); lines.push('lamiere per lo scafo: +12%'); }
  } else if (c.dest === 'brina') {
    const w = (geared ? 3 : 1) + near;
    G.res.acqua += w;
    lines.push(`+${w} acqua (ghiaccio)`);
    if (Math.random() < 0.35) {
      lines.push('sotto il ghiaccio qualcosa brillava, a ritmo');
      if (G.tools.has('radio') && G.flags.signal < 2) { G.flags.signal++; lines.push('la radio l’ha registrato'); }
    }
  } else {
    if (!G.tools.has('elettrolizzatore')) { G.tools.add('elettrolizzatore'); lines.push('un elettrolizzatore intatto!'); }
    else if (!G.tools.has('radio') && Math.random() < 0.5) { G.tools.add('radio'); lines.push('una radio da campo'); }
    else if (Math.random() < 0.5) { G.res.cibo += 3; lines.push('+3 cibo'); }
    else { G.res.medikit += 1; G.res.acqua += 1; lines.push('+1 medikit, +1 acqua'); }
  }
  if (hurt) { c.status = 'ferito'; c.hurt = 0; lines.push(`${c.name} è ferit${c.id === 'mara' || c.id === 'lin' ? 'a' : 'o'}${geared ? '' : ' (senza tuta adatta)'}`); }
  return { who: c, dest: d, lines };
}

// ------------------------------------------------------------- the day screen
function dayScreen(G, scene) {
  return new Promise((resolve) => {
    const ev = EVENTS[G.event];
    const flavor = DAY_FLAVOR[(G.day - 1) % DAY_FLAVOR.length];
    const node = el(`
      <section class="screen day">
        <header class="day-top" data-in>
          <div class="day-title"><span class="day-n">GIORNO <b>${G.day}</b><small>/${DAYS}</small></span><span class="day-sub">${flavor}</span></div>
          <div class="res" id="res"></div>
        </header>
        <div class="sheet">
          ${G.returned.map((r) => `
            <article class="return-card" data-in>
              <img src="assets/img/${r.dest.img}.webp" alt="">
              <div><b>${r.who.name} è tornat${r.who.id === 'mara' || r.who.id === 'lin' ? 'a' : 'o'} da: ${r.dest.name}</b><span>${r.lines.join(' · ')}</span></div>
            </article>`).join('')}
          ${G.report.length ? `<div class="report-log" data-in><b>RAPPORTO DI BORDO</b>${G.report.map((l) => `<span>${l}</span>`).join('')}</div>` : ''}
          <article class="journal" data-in>
            <img class="journal-img" src="assets/img/${ev.img}.webp" alt="">
            <div class="journal-body">
              <h2>${ev.title}</h2>
              <p class="hand">${ev.text(G)}</p>
              <div class="choices" id="choices">
                ${ev.choices.map((c, i) => `<button class="choice" data-i="${i}" ${c.ok && !c.ok(G) ? 'disabled' : ''}>${c.label}</button>`).join('')}
              </div>
              <p class="hand outcome" id="outcome" hidden></p>
            </div>
          </article>
          <section class="crew" data-in>
            <h3>Famiglia <small>razioni di oggi</small></h3>
            <div class="crew-row" id="crew"></div>
          </section>
          <section class="actions" data-in>
            <button class="btn ghost" id="exp-btn">Spedizione</button>
            <button class="btn primary" id="end-btn" disabled>Fine giornata</button>
          </section>
        </div>
      </section>`);
    showScreen(node);

    const resBox = $('#res', node), crewBox = $('#crew', node), endBtn = $('#end-btn', node), expBtn = $('#exp-btn', node);

    function refresh() {
      const fed = G.crew.filter((c) => c.fed).length, wat = G.crew.filter((c) => c.watered).length;
      const chip = (k, icon, n, used) => `<div class="r" data-k="${k}"><img src="assets/icons/${icon}.webp" alt="${k}"><b>${n - used}</b>${used ? `<i>−${used}</i>` : ''}</div>`;
      const meter = (k, label, v) => `<div class="meter ${v < 35 ? 'low' : ''}" data-k="${k}"><span>${label}</span><div class="bar"><i style="width:${clamp(v, 0, 100)}%"></i></div><b>${Math.round(v)}%</b></div>`;
      resBox.innerHTML =
        chip('cibo', 'razioni', G.res.cibo, fed) + chip('acqua', 'acqua', G.res.acqua, wat) +
        chip('energia', 'batterie', G.res.energia, 0) + chip('medikit', 'medikit', G.res.medikit, 0) +
        meter('o2', 'O₂', G.o2) + meter('hull', 'SCAFO', G.hull);
      crewBox.innerHTML = G.crew.map((c) => memberHTML(G, c)).join('');
      const exp = G.crew.find((c) => c.away);
      expBtn.disabled = !!exp || !present(G).some(canExplore);
      expBtn.textContent = exp ? `${exp.name} in spedizione` : 'Spedizione';
      endBtn.disabled = !G.answered;
    }
    refresh();

    crewBox.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const c = G.crew.find((m) => m.id === btn.closest('.member').dataset.id);
      const fed = G.crew.filter((m) => m.fed).length, wat = G.crew.filter((m) => m.watered).length;
      if (btn.dataset.act === 'eat') {
        if (!c.fed && fed >= G.res.cibo) return deny(btn);
        c.fed = !c.fed;
      } else if (btn.dataset.act === 'drink') {
        if (!c.watered && wat >= G.res.acqua) return deny(btn);
        c.watered = !c.watered;
      } else if (btn.dataset.act === 'heal') {
        if (G.res.medikit < 1) return deny(btn);
        G.res.medikit--; c.status = null; c.sick = 0; c.hurt = 0;
        banner(`${c.name} curat${c.id === 'mara' || c.id === 'lin' ? 'a' : 'o'}`, 'good', 1400);
      }
      audio.blip(btn.dataset.act === 'drink' ? 740 : 620, 0.05, 'triangle', 0.08);
      refresh();
      pulse($(`.member[data-id="${c.id}"] [data-act="${btn.dataset.act}"]`, crewBox) || crewBox);
    });

    $('#choices', node).addEventListener('click', (e) => {
      const b = e.target.closest('.choice');
      if (!b || G.answered) return;
      G.answered = true;
      G.outcome = ev.choices[+b.dataset.i].run(G);
      audio.play('sfx_radio', { volume: 0.25 });
      const others = $$('.choice', node).filter((x) => x !== b);
      done(animate(others, { opacity: 0, height: 0, marginTop: 0, paddingTop: 0, paddingBottom: 0 }, { duration: 0.3 }), 400).then(() => others.forEach((x) => x.remove()));
      b.classList.add('picked');
      b.disabled = true;
      const out = $('#outcome', node);
      out.hidden = false;
      out.textContent = G.outcome;
      animate(out, { opacity: [0, 1], y: [8, 0] }, { duration: 0.5 });
      scene.ground.setCamp(G);
      refresh();
      pulse(endBtn);
    });

    expBtn.addEventListener('click', () => openExpedition(G, () => { scene.ground.setCamp(G); refresh(); }));
    endBtn.addEventListener('click', () => { audio.blip(440, 0.12, 'sine', 0.1); resolve(); }, { once: true });
  });
}

function deny(btn) {
  audio.blip(160, 0.12, 'sawtooth', 0.05);
  animate(btn, { x: [0, -5, 5, -3, 3, 0] }, { duration: 0.3 });
}

const canExplore = (c) => c.alive && !c.away && !c.status && c.id !== 'tobia';

function memberHTML(G, c) {
  const f = c.id === 'mara' || c.id === 'lin';
  const tags = [];
  if (!c.alive) tags.push(`<span class="tag dead">${c.cause || 'perso'}</span>`);
  else if (c.away) tags.push(`<span class="tag away">torna il giorno ${c.away}</span>`);
  else {
    if (c.status === 'ferito') tags.push(`<span class="tag bad">ferit${f ? 'a' : 'o'}</span>`);
    if (c.status === 'malato') tags.push(`<span class="tag bad">malat${f ? 'a' : 'o'}</span>`);
    if (c.thirst >= 3) tags.push(`<span class="tag warn">assetat${f ? 'a' : 'o'}</span>`);
    if (c.hunger >= 4) tags.push(`<span class="tag warn">affamat${f ? 'a' : 'o'}</span>`);
    if (!tags.length) tags.push('<span class="tag ok">ok</span>');
  }
  const active = c.alive && !c.away;
  return `
    <div class="member ${c.alive ? '' : 'is-dead'} ${c.away ? 'is-away' : ''}" data-id="${c.id}">
      <img src="${c.img}" alt="${c.name}">
      <div class="name">${c.name}</div>
      <div class="tags">${tags.join('')}</div>
      ${active ? `
        <div class="ration">
          <button data-act="eat" class="${c.fed ? 'on' : ''}" aria-label="Dai cibo a ${c.name}"><img src="assets/icons/razioni.webp" alt=""></button>
          <button data-act="drink" class="${c.watered ? 'on' : ''}" aria-label="Dai acqua a ${c.name}"><img src="assets/icons/acqua.webp" alt=""></button>
        </div>
        ${c.status ? `<button class="heal" data-act="heal">Cura (medikit)</button>` : ''}` : ''}
    </div>`;
}

// ---------------------------------------------------------------- expedition
function openExpedition(G, onDone) {
  let who = null, dest = null;
  const node = el(`
    <div class="modal">
      <div class="modal-card">
        <h3>Spedizione <small>torna dopo 2 giorni</small></h3>
        <p class="label">Chi va?</p>
        <div class="pick-who">
          ${G.crew.map((c) => `<button class="who" data-id="${c.id}" ${canExplore(c) ? '' : 'disabled'}><img src="${c.img}" alt=""><span>${c.name}</span></button>`).join('')}
        </div>
        <p class="label">Dove?</p>
        <div class="pick-dest">
          ${Object.entries(DESTS).map(([id, d]) => {
            const locked = d.needs && !G.flags[d.needs];
            const gear = d.gear ? (G.tools.has(d.gear) ? '<em class="ok">tuta: sì</em>' : '<em class="bad">senza tuta: rischio alto</em>') : '<em>nessuna tuta richiesta</em>';
            return `<button class="dest" data-id="${id}" ${locked ? 'disabled' : ''}>
              <img src="assets/img/${d.img}.webp" alt="">
              <span><b>${locked ? '???' : d.name}</b><small>${locked ? 'Ancora sconosciuto' : d.desc}</small>${locked ? '' : gear}</span>
            </button>`;
          }).join('')}
        </div>
        <div class="modal-actions">
          <button class="btn ghost" data-act="cancel">Annulla</button>
          <button class="btn primary" data-act="go" disabled>Parti</button>
        </div>
      </div>
    </div>`);
  document.body.append(node);
  animate(node, { opacity: [0, 1] }, { duration: 0.25 });
  animate($('.modal-card', node), { y: [80, 0] }, { type: 'spring', bounce: 0.25, duration: 0.5 });
  const go = $('[data-act="go"]', node);
  const close = () => done(animate(node, { opacity: 0 }, { duration: 0.2 }), 300).then(() => node.remove());
  node.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) { if (e.target === node) close(); return; }
    if (b.classList.contains('who')) { who = b.dataset.id; $$('.who', node).forEach((x) => x.classList.toggle('sel', x === b)); }
    if (b.classList.contains('dest')) { dest = b.dataset.id; $$('.dest', node).forEach((x) => x.classList.toggle('sel', x === b)); }
    if (b.dataset.act === 'cancel') close();
    if (b.dataset.act === 'go' && who && dest) {
      const c = G.crew.find((m) => m.id === who);
      c.away = G.day + 2;
      c.dest = dest;
      c.fed = c.watered = false;
      audio.play('sfx_radio', { volume: 0.35 });
      banner(`${c.name} parte verso: ${DESTS[dest].name}`, 'good', 1800);
      close();
      onDone();
    }
    audio.blip(700, 0.04);
    go.disabled = !(who && dest);
  });
}

// ------------------------------------------------------------ end of the day
function endDay(G) {
  const lines = [];
  const here = present(G);
  for (const c of here) {
    if (c.fed) { G.res.cibo--; c.hunger = 0; } else c.hunger++;
    if (c.watered) { G.res.acqua--; c.thirst = 0; } else c.thirst++;
    if (c.status === 'malato') c.sick++;
    if (c.status === 'ferito' && ++c.hurt >= 3) { c.status = null; lines.push(`${c.name} è guarit${c.id === 'mara' || c.id === 'lin' ? 'a' : 'o'} da sol${c.id === 'mara' || c.id === 'lin' ? 'a' : 'o'}`); }
  }
  G.res.energia -= 1;
  if (G.tools.has('pannello')) { const gain = 1 + (G.s < 0 ? 1 : 0); G.res.energia += gain; lines.push(`Pannello: +${gain} energia`); }
  if (G.zone === 'brina') { G.res.energia -= 1; lines.push('Gelo del lato Brina: −1 energia per il riscaldamento'); }
  if (G.res.energia < 0) { G.res.energia = 0; G.hull -= 6; lines.push('Batterie a secco: la capsula si raffredda (scafo −6%)'); }
  G.o2 -= 5 * here.length;
  if (G.hull < 35) { G.o2 -= 8; lines.push('Microfratture nello scafo: l’ossigeno fuoriesce'); }
  if (G.tools.has('elettrolizzatore') && G.o2 < 75) {
    if (G.res.energia >= 1 && G.res.acqua >= 1) { G.res.energia--; G.res.acqua--; G.o2 = Math.min(100, G.o2 + 35); lines.push('Elettrolizzatore: +35% O₂ (−1 acqua, −1 energia)'); }
    else lines.push('Elettrolizzatore fermo: servono acqua ed energia');
  } else if (!G.tools.has('elettrolizzatore') && G.o2 < 50) lines.push('Nessun elettrolizzatore: l’ossigeno non si rigenera');
  if (G.tools.has('trivella') && G.s > 0) { G.res.acqua += 1; lines.push('Trivella: +1 acqua dal ghiaccio'); }
  if (G.zone === 'brace') { G.res.acqua = Math.max(0, G.res.acqua - 1); G.hull -= 4; lines.push('Calore del lato Brace: −1 acqua, scafo −4%'); }
  if (G.tools.has('semi') && G.day >= 3 && G.day % 2 === 1 && G.res.energia > 0) { G.res.cibo += 1; lines.push('Serra: +1 cibo'); }
  G.o2 = clamp(G.o2, 0, 100);
  G.hull = clamp(G.hull, 0, 100);

  for (const c of here) {
    const f = c.id === 'mara' || c.id === 'lin' ? 'a' : 'o';
    if (G.o2 <= 0) kill(c, 'asfissia');
    else if (c.thirst >= 5) kill(c, `mort${f} di sete`);
    else if (c.hunger >= 7) kill(c, `mort${f} di fame`);
    else if (c.status === 'malato' && c.sick >= 3) kill(c, 'malattia');
    if (!c.alive) lines.push(`${c.name}: ${c.cause}.`);
  }
  G.report = lines;
}

function kill(c, cause) { c.alive = false; c.cause = cause; c.status = null; }

function checkEnd(G, timeUp = false) {
  const alive = G.crew.filter((c) => c.alive);
  if (!alive.length) return { kind: 'morte', G };
  if (G.hull <= 0) { alive.forEach((c) => kill(c, 'scafo distrutto')); return { kind: 'morte', G }; }
  if (timeUp) return { kind: G.flags.signal >= 2 && G.tools.has('radio') ? 'segnale' : 'vivi', G };
  return null;
}

async function dayCard(day) {
  const n = el(`<div class="day-card"><span>GIORNO</span><b>${day}</b><small>${DAY_FLAVOR[(day - 1) % DAY_FLAVOR.length]}</small></div>`);
  document.body.append(n);
  audio.play('sfx_radio', { volume: 0.2, rate: 0.8 });
  await done(animate(n, { opacity: [0, 1] }, { duration: 0.35 }), 450);
  await done(animate($('b', n), { scale: [0.7, 1], opacity: [0, 1] }, { type: 'spring', bounce: 0.4, duration: 0.6 }), 700);
  await wait(650);
  await done(animate(n, { opacity: 0 }, { duration: 0.4 }), 500);
  n.remove();
}

// --------------------------------------------------------------------- ending
export function showEnding({ kind, G }) {
  const ENDINGS = {
    segnale: { img: 'ev_segnale', title: 'Qualcuno risponde', text: 'Il segnale non era un saluto: era un faro abbandonato. La radio di Lin l’ha riacceso. Stanotte (che qui non esiste) una luce si è mossa nel cielo, dritta verso di noi.' },
    vivi: { img: 'ev_pod', title: 'Ancora qui', text: 'Dieci giorni sotto un sole che non tramonta. Siamo ancora qui. Domani, di nuovo, sarà mattina.' },
    morte: { img: 'ev_crash', title: 'Il Lume non tramonta mai', text: 'La capsula è rimasta nella fascia del crepuscolo, ferma come il sole. Le piante, piano piano, ci si sono inchinate sopra.' },
  };
  const e = ENDINGS[kind];
  const alive = G.crew.filter((c) => c.alive).length;
  audio.music(kind === 'morte' ? null : 'mus_title', { volume: 0.6 });
  return new Promise((resolve) => {
    const node = el(`
      <section class="screen ending">
        <div class="ending-card">
          <img class="ending-img" src="assets/img/${e.img}.webp" alt="" data-in>
          <h1 data-in>${e.title}</h1>
          <p class="hand" data-in>${e.text}</p>
          <div class="survivors" data-in>
            ${G.crew.map((c) => `<figure class="${c.alive ? '' : 'dead'}"><img src="${c.img}" alt=""><figcaption>${c.name}${c.alive ? '' : `<small>${c.cause}</small>`}</figcaption></figure>`).join('')}
          </div>
          <p class="end-stats" data-in>Giorni: ${Math.min(G.day, DAYS)} · Superstiti: ${alive}/4 · Segnale: ${G.flags.signal}/2</p>
          <p class="concept-note" data-in>Fine del concept. Mockup usa e getta: grafica, testi e bilanciamento sono provvisori.</p>
          <button class="btn primary" id="again" data-in>Ricomincia</button>
        </div>
      </section>`);
    showScreen(node);
    $('#again', node).addEventListener('click', () => resolve(), { once: true });
  });
}
