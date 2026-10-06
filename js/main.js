// DUSKLINE concept — screen flow: title → briefing → 60s descent → landing → 10 days → ending.
import { animate } from 'motion';
import { initScene } from './scene.js';
import { runDescent } from './descent.js';
import { newGame, showLanding, playDays, showEnding } from './survival.js';
import * as audio from './audio.js';
import { el, $, showScreen } from './ui.js';

const scene = initScene(document.getElementById('gl'));

const AUDIO = ['mus_title', 'mus_descent', 'mus_base', 'sfx_alarm', 'sfx_impact', 'sfx_jettison', 'sfx_wind', 'sfx_chute', 'sfx_fire',
  'sfx_radio', 'sfx_reentry', 'vo_start', 'vo_peso', 'vo_fuoco', 'vo_30', 'vo_paracadute', 'vo_10'];

// Mute toggle, always available.
const muteBtn = el(`<button class="mute" aria-label="Audio on/off"></button>`);
const muteIcon = () => {
  muteBtn.innerHTML = audio.isMuted()
    ? '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l4 6M21 9l-4 6"/></svg>'
    : '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
};
muteBtn.addEventListener('click', () => { audio.setMuted(!audio.isMuted()); muteIcon(); });
muteIcon();
document.body.append(muteBtn);

function title() {
  scene.setMode('space');
  scene.space.reset();
  return new Promise((resolve) => {
    const node = el(`
      <section class="screen title">
        <img class="key-art" src="assets/img/key_art.webp" alt="">
        <div class="title-shade"></div>
        <div class="title-content">
          <p class="kicker" data-in>CONCEPT · MOCKUP GIOCABILE</p>
          <h1 class="logo" data-in>DUSKLINE</h1>
          <p class="tagline" data-in>Sessanta secondi per scendere.<br>Poi, sopravvivere dove il sole non tramonta.</p>
          <button class="btn primary big" id="start" data-in>Inizia</button>
          <p class="fine" data-in>Audio consigliato · tocca per iniziare</p>
        </div>
      </section>`);
    showScreen(node);
    animate($('.key-art', node), { scale: [1.12, 1.0], y: [0, -10] }, { duration: 14, ease: 'easeOut' });
    $('#start', node).addEventListener('click', async () => {
      await audio.unlock();
      audio.preload(AUDIO);
      audio.blip(880, 0.08, 'triangle', 0.08);
      audio.music('mus_title', { volume: 0.6 });
      resolve();
    }, { once: true });
  });
}

function briefing() {
  return new Promise((resolve) => {
    const node = el(`
      <section class="screen brief">
        <div class="brief-card">
          <p class="kicker" data-in>ANNO 2291 · ORBITA DI GIANO</p>
          <h2 data-in>L’ARCA-7 è esplosa.</h2>
          <p data-in>Giano mostra sempre la stessa faccia alla sua stella, il Lume. Da una parte brucia (il lato <b class="t-brace">Brace</b>), dall’altra gela (il lato <b class="t-brina">Brina</b>). In mezzo, una striscia di eterno tramonto.</p>
          <p data-in>Mara, Elio, Lin e Tobia sono nella capsula 3. La capsula è troppo pesante.</p>
          <ol class="howto" data-in>
            <li><b>Alleggerisci la stiva:</b> scorri un oggetto verso l’alto (o toccalo due volte). Sotto i ${110} kg l’impatto è morbido.</li>
            <li><b>Scegli dove atterrare:</b> tieni premuto ◀ ▶ o trascina sul pianeta. Resta nella fascia tratteggiata.</li>
            <li><b>Apri il paracadute</b> quando l’ago è nella zona verde.</li>
          </ol>
          <p class="note" data-in>Ciò che tieni decide la run: niente elettrolizzatore = niente ossigeno.</p>
          <button class="btn primary big" id="go" data-in>Sgancia la capsula</button>
        </div>
      </section>`);
    showScreen(node);
    $('#go', node).addEventListener('click', () => { audio.blip(660, 0.1); resolve(); }, { once: true });
  });
}

// #giorni skips straight to the survival phase with a sample loadout (handy while iterating).
async function skipToDays() {
  const { CARGO } = await import('./data.js');
  const keep = ['razioni', 'acqua', 'elettrolizzatore', 'pannello', 'radio', 'tuta_isolante', 'semi', 'giocattolo'];
  const res = { s: 0.12, zone: 'crepuscolo', hull: 82, injuries: 0, saved: CARGO.filter((c) => keep.includes(c.id)), burnt: [], mass: 140, chuteLabel: 'Paracadute perfetto' };
  const G = newGame(res);
  scene.setMode('ground');
  const end = await playDays(G, scene);
  await showEnding(end);
}

async function run() {
  if (location.hash === '#giorni') { await audio.unlock(); await skipToDays(); }
  for (;;) {
    await title();
    await briefing();
    scene.setMode('space');
    const res = await runDescent(scene);
    const G = newGame(res);
    scene.setMode('ground');
    scene.ground.setCamp(G);
    audio.music('mus_title', { volume: 0.5 });
    await showLanding(res, G);
    const end = await playDays(G, scene);
    await showEnding(end);
  }
}

run();
