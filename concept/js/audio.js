// Tiny Web Audio layer: decoded buffers, sfx, looping beds and crossfaded music.
const Ctx = window.AudioContext || window.webkitAudioContext;
const ctx = new Ctx();
const master = ctx.createGain();
const musicBus = ctx.createGain();
const sfxBus = ctx.createGain();
musicBus.gain.value = 0.55;
sfxBus.gain.value = 0.9;
musicBus.connect(master);
sfxBus.connect(master);
master.connect(ctx.destination);

const buffers = new Map();
let currentMusic = null;
let muted = false;

export const isMuted = () => muted;

/** Resume the context; never blocks the UI for long (resume() can stay pending without a real gesture). */
export async function unlock() {
  if (ctx.state === 'running') return;
  await Promise.race([ctx.resume().catch(() => {}), new Promise((r) => setTimeout(r, 400))]);
}

function load(id) {
  if (!buffers.has(id)) {
    buffers.set(id, fetch(`assets/audio/${id}.mp3`)
      .then((r) => r.arrayBuffer())
      .then((b) => ctx.decodeAudioData(b))
      .catch(() => null));
  }
  return buffers.get(id);
}

export const preload = (ids) => Promise.all(ids.map(load));

function source(buffer, { loop = false, rate = 1, volume = 1, bus = sfxBus } = {}) {
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.loop = loop;
  src.playbackRate.value = rate;
  const gain = ctx.createGain();
  gain.gain.value = volume;
  src.connect(gain).connect(bus);
  src.start();
  return {
    src, gain,
    stop(fade = 0.3) {
      const t = ctx.currentTime;
      gain.gain.cancelScheduledValues(t);
      gain.gain.setValueAtTime(gain.gain.value, t);
      gain.gain.linearRampToValueAtTime(0, t + fade);
      src.stop(t + fade + 0.05);
    },
  };
}

/** Fire-and-forget (or looping) sound effect. Returns a handle with stop(). */
export async function play(id, opts = {}) {
  const buf = await load(id);
  if (!buf) return { stop() {} };
  return source(buf, opts);
}

/** Crossfade to a music loop (null = fade out). */
export async function music(id, { volume = 0.8, fade = 1.6 } = {}) {
  const prev = currentMusic;
  currentMusic = null;
  if (prev) prev.stop(fade);
  if (!id) return;
  const buf = await load(id);
  if (!buf) return;
  const h = source(buf, { loop: true, volume: 0, bus: musicBus });
  h.gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + fade);
  currentMusic = h;
}

/** Procedural UI blip, so taps always answer even before files load. */
export function blip(freq = 660, dur = 0.06, type = 'square', vol = 0.06) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(vol, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
  o.connect(g).connect(sfxBus);
  o.start();
  o.stop(ctx.currentTime + dur + 0.02);
}

export function setMuted(m) {
  muted = m;
  master.gain.setTargetAtTime(m ? 0 : 1, ctx.currentTime, 0.05);
}
