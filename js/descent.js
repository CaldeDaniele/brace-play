// The 60-second descent: dump cargo, steer toward the twilight band, time the parachute.
import { animate } from 'motion';
import { CARGO, SAFE_KG } from './data.js';
import * as audio from './audio.js';
import { el, $, $$, showScreen, floatText, banner, pulse, shake, clamp, wait, ticker, done } from './ui.js';

const TOTAL = 60;
const MAX_KG = CARGO.reduce((s, c) => s + c.kg, 0);
const CHUTE = {
  perfetto: { f: 0.55, label: 'Paracadute perfetto' },
  buono: { f: 0.7, label: 'Paracadute aperto' },
  presto: { f: 0.85, label: 'Troppo presto: la vela si è strappata' },
  tardi: { f: 0.8, label: 'Tardi! Frenata brusca' },
  auto: { f: 0.95, label: 'Apertura automatica, all’ultimo' },
};

export function runDescent(scene) {
  return new Promise((resolve) => {
    const hold = CARGO.map((c) => ({ ...c, status: 'in' }));
    // ?t=50 starts the descent 50 s in (for quick visual checks).
    const skip = clamp(Number(new URLSearchParams(location.search).get('t')) || 0, 0, TOTAL - 1);
    const st = {
      T: TOTAL - skip, s: (Math.random() < 0.5 ? -1 : 1) * (0.08 + Math.random() * 0.14),
      steer: 0, drag: 0, drift: 0, fire: null, fireDamage: 0, chute: null, fired: new Set(), done: false,
    };
    const mass = () => hold.reduce((s, c) => s + (c.status === 'in' ? c.kg : 0), 0);

    const node = el(`
      <section class="screen descent">
        <header class="hud-top" data-in>
          <div class="timer"><span id="d-timer">60.0</span><small>IMPATTO</small></div>
          <div class="readouts"><span id="d-alt">QUOTA 120 km</span><span id="d-vel">VEL 2.40 km/s</span></div>
        </header>
        <div class="band" data-in>
          <div class="band-bar"><div class="band-safe"></div><div class="band-marker" id="d-marker"></div></div>
          <div class="band-labels"><span class="brace">BRACE</span><span>CREPUSCOLO</span><span class="brina">BRINA</span></div>
          <div class="steer">
            <button class="steer-btn" id="d-left" aria-label="Vira verso il lato Brace">◀</button>
            <div class="band-zone" id="d-zone">—</div>
            <button class="steer-btn" id="d-right" aria-label="Vira verso il lato Brina">▶</button>
          </div>
        </div>
        <div class="drag-zone" id="d-drag"></div>
        <div class="chute" id="d-chute" hidden>
          <div class="alti"><div class="alti-good"></div><div class="alti-ok"></div><div class="alti-needle" id="d-needle"></div></div>
          <button class="chute-btn" id="d-chute-btn">APRI<br>PARACADUTE</button>
        </div>
        <section class="hold" data-in>
          <div class="hold-head"><span>STIVA</span><span id="d-mass"></span></div>
          <div class="mass-bar"><div class="mass-fill" id="d-massfill"></div><div class="mass-safe" style="left:${(SAFE_KG / MAX_KG) * 100}%"><i>sicuro</i></div></div>
          <div class="hold-grid" id="d-grid">
            ${hold.map((c) => `
              <button class="cargo" data-id="${c.id}" aria-label="${c.name}, ${c.kg} chili">
                <img src="${c.icon}" alt="" draggable="false">
                <span class="kg">${c.kg}<small>kg</small></span>
                <span class="nm">${c.name}</span>
                <span class="burn"></span>
              </button>`).join('')}
          </div>
          <div class="hold-hint">Scorri in alto o tocca due volte per sganciare</div>
        </section>
      </section>`);
    showScreen(node);

    const ui = {
      timer: $('#d-timer', node), alt: $('#d-alt', node), vel: $('#d-vel', node), marker: $('#d-marker', node), zone: $('#d-zone', node),
      mass: $('#d-mass', node), fill: $('#d-massfill', node), grid: $('#d-grid', node), chute: $('#d-chute', node), needle: $('#d-needle', node),
      reentry: document.getElementById('fx-reentry'), flash: document.getElementById('fx-flash'),
    };

    // ---- cargo: swipe up or double tap to jettison
    function jettison(card, item, reason = 'out', from = { x: 0, y: 0, r: 0 }) {
      if (item.status !== 'in') return;
      item.status = reason;
      card.classList.add('gone');
      card.disabled = true;
      const r = card.getBoundingClientRect();
      if (reason === 'out') {
        floatText(r.left + r.width / 2, r.top, `−${item.kg} kg`, 'good');
        audio.play('sfx_jettison', { volume: 0.8, rate: 0.9 + Math.random() * 0.2 });
      }
      const spin = (Math.random() - 0.5) * 90;
      done(animate(card,
        { x: [from.x, from.x * 2], y: [from.y, from.y - 240], rotate: [from.r, from.r + spin], opacity: [1, 0], scale: [1, 0.6] },
        { duration: 0.55, ease: 'easeIn' }), 700)
        .then(() => { card.style.visibility = 'hidden'; });
      if (st.fire?.id === item.id) extinguish(true);
      refreshMass();
    }

    $$('.cargo', node).forEach((card) => {
      const item = hold.find((c) => c.id === card.dataset.id);
      let y0 = 0, x0 = 0, dx = 0, dy = 0, dragging = false, armedAt = 0;
      card.addEventListener('pointerdown', (e) => {
        if (item.status !== 'in') return;
        dragging = true; y0 = e.clientY; x0 = e.clientX; dx = 0; dy = 0;
        try { card.setPointerCapture(e.pointerId); } catch {}
      });
      card.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        dy = Math.min(0, e.clientY - y0);
        dx = (e.clientX - x0) * 0.3;
        card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dy * -0.08}deg)`;
      });
      const end = () => {
        if (!dragging) return;
        dragging = false;
        const from = { x: dx, y: dy, r: dy * -0.08 };
        card.style.transform = '';
        if (dy < -55) { jettison(card, item, 'out', from); return; }
        if (dy < -2) animate(card, { x: [from.x, 0], y: [from.y, 0], rotate: [from.r, 0] }, { type: 'spring', bounce: 0.5, duration: 0.4 });
        if (dy > -6) {
          const now = performance.now();
          if (now - armedAt < 1600) { jettison(card, item); return; }
          armedAt = now;
          card.classList.add('armed');
          audio.blip(520, 0.05);
          setTimeout(() => card.classList.remove('armed'), 1600);
        }
      };
      card.addEventListener('pointerup', end);
      card.addEventListener('pointercancel', end);
    });

    function refreshMass() {
      const m = mass();
      ui.mass.textContent = `${m} kg · sicuro ${SAFE_KG}`;
      ui.fill.style.width = `${(m / MAX_KG) * 100}%`;
      ui.fill.dataset.level = m <= SAFE_KG ? 'ok' : m <= 160 ? 'warn' : 'bad';
    }
    refreshMass();

    // ---- fire event
    function startFire() {
      const candidates = hold.filter((c) => c.status === 'in' && c.kg >= 6);
      if (!candidates.length) return;
      const item = candidates[Math.floor(Math.random() * candidates.length)];
      const card = $(`.cargo[data-id="${item.id}"]`, node);
      st.fire = { id: item.id, until: st.T - 6, card, sound: null };
      card.classList.add('burning');
      banner(`INCENDIO: ${item.name.toUpperCase()}. Sgancialo!`, 'bad', 2600);
      audio.play('vo_fuoco', { volume: 1 });
      audio.play('sfx_fire', { loop: true, volume: 0.55 }).then((h) => { if (st.fire) st.fire.sound = h; else h.stop(0.1); });
    }
    function extinguish(dumped) {
      const f = st.fire;
      if (!f) return;
      st.fire = null;
      f.sound?.stop(0.3);
      f.card.classList.remove('burning');
      if (!dumped) {
        const item = hold.find((c) => c.id === f.id);
        st.fireDamage += 15;
        banner(`${item.name} distrutto dal fuoco. Scafo −15%`, 'bad');
        jettison(f.card, item, 'burnt');
        shake(document.getElementById('app'), 8, 0.4);
      } else banner('Incendio sganciato', 'good', 1400);
    }

    // ---- steering
    const hold_ = (btn, dir) => {
      const on = (e) => { e.preventDefault(); st.steer = dir; btn.classList.add('on'); };
      const off = () => { if (st.steer === dir) st.steer = 0; btn.classList.remove('on'); };
      btn.addEventListener('pointerdown', on);
      ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => btn.addEventListener(ev, off));
    };
    hold_($('#d-left', node), -1);
    hold_($('#d-right', node), 1);
    const dragZone = $('#d-drag', node);
    let dx0 = null;
    dragZone.addEventListener('pointerdown', (e) => { dx0 = e.clientX; try { dragZone.setPointerCapture(e.pointerId); } catch {} });
    dragZone.addEventListener('pointermove', (e) => { if (dx0 !== null) st.drag = clamp((e.clientX - dx0) / 70, -1, 1); });
    const dragEnd = () => { dx0 = null; st.drag = 0; };
    dragZone.addEventListener('pointerup', dragEnd);
    dragZone.addEventListener('pointercancel', dragEnd);
    const keys = (e) => {
      if (e.key === 'ArrowLeft') st.steer = e.type === 'keydown' ? -1 : 0;
      if (e.key === 'ArrowRight') st.steer = e.type === 'keydown' ? 1 : 0;
    };
    window.addEventListener('keydown', keys);
    window.addEventListener('keyup', keys);

    // ---- parachute
    const chuteBtn = $('#d-chute-btn', node);
    chuteBtn.addEventListener('click', () => deployChute());
    function deployChute(auto = false) {
      if (st.chute) return;
      const T = st.T;
      const q = auto ? 'auto' : T > 10 ? 'presto' : T > 8 ? 'buono' : T >= 5 ? 'perfetto' : 'tardi';
      st.chute = q;
      audio.play('sfx_chute', { volume: 0.9 });
      banner(CHUTE[q].label, q === 'perfetto' || q === 'buono' ? 'good' : 'warn', 2000);
      chuteBtn.disabled = true;
      chuteBtn.textContent = q === 'perfetto' ? 'PERFETTO' : 'APERTO';
      pulse(chuteBtn, 1.15);
      shake(document.getElementById('app'), 6, 0.35);
    }

    // ---- timeline
    const once = (key, T, fn) => { if (st.T <= T && !st.fired.has(key)) { st.fired.add(key); fn(); } };
    let reentrySound = null;
    let last = performance.now();
    audio.music('mus_descent', { volume: 0.75, fade: 0.8 });
    audio.play('sfx_alarm', { volume: 0.6 });
    scene.space.reset();
    scene.space.explode();
    flash(0.8);

    function flash(strength) {
      animate(ui.flash, { opacity: [strength, 0] }, { duration: 0.9, ease: 'easeOut' });
    }

    function frame(now) {
      if (st.done) return;
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      st.T = Math.max(0, st.T - dt);
      const t = 1 - st.T / TOTAL;

      once('vo_start', 59.4, () => audio.play('vo_start'));
      once('peso1', 47, () => { if (mass() > SAFE_KG) { banner('CARICO ECCESSIVO', 'warn'); audio.play('vo_peso'); } });
      once('fire', 43, startFire);
      if (st.fire && st.T <= st.fire.until) extinguish(false);
      once('wind', 34, () => { banner('CORRENTE D’ALTA QUOTA → lato Brina', 'warn', 2600); st.drift = 0.2; setTimeout(() => { st.drift = 0; }, 5500); });
      once('vo_30', 30, () => audio.play('vo_30'));
      once('reentry', 27, () => audio.play('sfx_reentry', { loop: true, volume: 0.7 }).then((h) => { reentrySound = h; }));
      once('peso2', 21, () => { if (mass() > SAFE_KG) { banner('CARICO ECCESSIVO', 'warn'); audio.play('vo_peso'); } });
      once('chute', 14, () => {
        ui.chute.hidden = false;
        animate(ui.chute, { opacity: [0, 1], scale: [0.8, 1] }, { type: 'spring', bounce: 0.4 });
        audio.play('vo_paracadute');
      });
      once('vo_10', 10, () => audio.play('vo_10'));
      once('auto', 2, () => deployChute(true));

      // landing drift + steering
      const wobble = Math.sin(now / 900) * 0.025;
      st.s = clamp(st.s + (clamp(st.steer + st.drag, -1, 1) * 0.42 + st.drift + wobble) * dt, -1, 1);

      // HUD
      ui.timer.textContent = st.T.toFixed(1);
      ui.timer.parentElement.dataset.level = st.T < 10 ? 'bad' : st.T < 30 ? 'warn' : 'ok';
      ui.alt.textContent = `QUOTA ${Math.max(0, 120 * Math.pow(st.T / TOTAL, 1.6)).toFixed(1)} km`;
      const v = (0.3 + 2.1 * Math.sin(Math.min(1, t * 1.25) * Math.PI * 0.95)) * (st.chute ? 0.35 : 1);
      ui.vel.textContent = `VEL ${v.toFixed(2)} km/s`;
      ui.marker.style.left = `${((st.s + 1) / 2) * 100}%`;
      const zone = st.s < -0.35 ? 'brace' : st.s > 0.35 ? 'brina' : 'crepuscolo';
      ui.zone.dataset.zone = zone;
      ui.zone.textContent = zone === 'brace' ? 'Troppo nel lato Brace' : zone === 'brina' ? 'Troppo nel lato Brina' : st.s < 0 ? 'Crepuscolo, verso il Brace' : 'Crepuscolo, verso la Brina';
      if (st.fire) st.fire.card.dataset.left = Math.max(0, st.T - st.fire.until).toFixed(0);
      if (!ui.chute.hidden) {
        const k = clamp((14 - st.T) / 14, 0, 1);
        ui.needle.style.top = `${k * 100}%`;
      }

      // reentry glow + shake
      const heat = smoothstep(0.38, 0.52, t) * (1 - smoothstep(0.78, 0.9, t));
      ui.reentry.style.opacity = heat.toFixed(3);
      scene.space.setShake(heat * 0.02 + smoothstep(0.85, 1, t) * 0.012);
      scene.space.setProgress(t);
      scene.space.setLanding(st.s);

      if (st.T <= 0) impact();
    }
    const stopTicker = ticker(frame);

    async function impact() {
      st.done = true;
      stopTicker();
      window.removeEventListener('keydown', keys);
      window.removeEventListener('keyup', keys);
      st.fire?.sound?.stop(0.1);
      reentrySound?.stop(0.2);
      ui.reentry.style.opacity = 0;
      audio.music(null, { fade: 0.2 });
      audio.play('sfx_impact', { volume: 1 });
      animate(ui.flash, { opacity: [1, 1, 0] }, { duration: 1.6, times: [0, 0.4, 1] });
      shake(document.getElementById('app'), 18, 0.7);
      scene.space.setShake(0);

      const m = mass();
      const over = Math.max(0, m - SAFE_KG);
      const q = st.chute || 'auto';
      const force = (0.5 + (over / (MAX_KG - SAFE_KG)) * 0.9) * CHUTE[q].f;
      const hull = clamp(100 - Math.round(Math.max(0, (force - 0.28) * 80)) - st.fireDamage, 8, 100);
      const zone = st.s < -0.35 ? 'brace' : st.s > 0.35 ? 'brina' : 'crepuscolo';
      await wait(1300);
      resolve({
        s: st.s, zone, hull, force, chute: q, chuteLabel: CHUTE[q].label, mass: m,
        injuries: force > 0.95 ? 2 : force > 0.62 ? 1 : 0,
        saved: hold.filter((c) => c.status === 'in'),
        burnt: hold.filter((c) => c.status === 'burnt'),
        dumped: hold.filter((c) => c.status === 'out'),
      });
    }
  });
}

function smoothstep(a, b, x) {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}
