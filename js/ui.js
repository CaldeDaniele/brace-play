// DOM helpers + Motion-powered transitions shared by every screen.
import { animate, stagger, MotionGlobalConfig } from 'motion';

// ?test: instant animations, for automated runs in a browser that renders no frames.
export const TEST = new URLSearchParams(location.search).has('test');
if (TEST) MotionGlobalConfig.skipAnimations = true;

/** Await an animation, but never longer than `ms` (frames can stall in background tabs). */
export const done = (anim, ms = 800) => Promise.race([anim.finished, wait(ms)]);

/**
 * Frame ticker: requestAnimationFrame, with a timer fallback when no frames arrive
 * (hidden webviews, some background states). Returns a stop() function.
 */
export function ticker(fn) {
  let last = 0, stopped = false;
  const run = (now) => { last = now; fn(now); };
  const raf = (now) => { if (stopped) return; run(now); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  const id = setInterval(() => { const now = performance.now(); if (now - last > 120) run(now); }, 33);
  return () => { stopped = true; clearInterval(id); };
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Build a DOM fragment from an HTML string and return its first element. */
export function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

const app = () => document.getElementById('app');

/** Replace the current screen with a fade, then stagger in every [data-in] child. */
export async function showScreen(node) {
  const old = app().firstElementChild;
  if (old) {
    await done(animate(old, { opacity: 0, filter: ['blur(0px)', 'blur(6px)'] }, { duration: 0.35 }), 450);
    old.remove();
  }
  app().append(node);
  const items = $$('[data-in]', node);
  animate(node, { opacity: [0, 1] }, { duration: 0.4 });
  if (items.length) {
    animate(items, { opacity: [0, 1], y: [18, 0] }, { delay: stagger(0.07, { startDelay: 0.1 }), duration: 0.5, ease: [0.22, 1, 0.36, 1] });
  }
  return node;
}

/** Short floating label (e.g. "−30 kg") rising from a point. */
export function floatText(x, y, text, cls = '') {
  const n = el(`<div class="float-text ${cls}">${text}</div>`);
  n.style.left = `${x}px`;
  n.style.top = `${y}px`;
  document.body.append(n);
  done(animate(n, { y: [0, -60], opacity: [1, 0] }, { duration: 1.1, ease: 'easeOut' }), 1300).then(() => n.remove());
}

/** Banner across the top of the screen for alarms and events. */
export function banner(text, kind = 'warn', ms = 2200) {
  const n = el(`<div class="banner ${kind}">${text}</div>`);
  document.body.append(n);
  animate(n, { y: [-30, 0], opacity: [0, 1] }, { type: 'spring', bounce: 0.35, duration: 0.5 });
  setTimeout(() => done(animate(n, { opacity: 0, y: -20 }, { duration: 0.3 }), 400).then(() => n.remove()), ms);
}

export function pulse(node, scale = 1.08) {
  animate(node, { scale: [1, scale, 1] }, { duration: 0.35, ease: 'easeOut' });
}

export function shake(node, strength = 10, duration = 0.5) {
  const xs = Array.from({ length: 10 }, (_, i) => (i % 2 ? -1 : 1) * strength * (1 - i / 10));
  animate(node, { x: [0, ...xs, 0] }, { duration });
}

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const wait = (ms) => new Promise((r) => setTimeout(r, ms));
