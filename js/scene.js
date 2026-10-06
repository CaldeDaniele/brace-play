// three.js layer: Giano seen from orbit during the descent, and the crash site on the ground.
// One renderer, two scenes; only the active one is drawn.
import * as THREE from 'three';
import { ticker } from './ui.js';

// Star direction for the planet: day side faces −X, night side +X, terminator faces the camera.
const L = new THREE.Vector3(-1, 0, 0);
const LAND_SPREAD = 0.7; // landing coordinate s ∈ [-1, 1] → longitude ±0.7 rad

const NOISE = /* glsl */ `
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  float a = hash13(i), b = hash13(i + vec3(1,0,0)), c = hash13(i + vec3(0,1,0)), d = hash13(i + vec3(1,1,0));
  float e = hash13(i + vec3(0,0,1)), g = hash13(i + vec3(1,0,1)), h = hash13(i + vec3(0,1,1)), k = hash13(i + vec3(1,1,1));
  return mix(mix(mix(a,b,f.x), mix(c,d,f.x), f.y), mix(mix(e,g,f.x), mix(h,k,f.x), f.y), f.z);
}
float fbm(vec3 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + vec3(1.7, 9.2, 3.1); a *= 0.5; }
  return s;
}`;

export function landingPoint(s, out = new THREE.Vector3()) {
  const phi = s * LAND_SPREAD;
  return out.set(Math.sin(phi), 0, Math.cos(phi));
}

function glowTexture(stops) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  for (const [o, col] of stops) grad.addColorStop(o, col);
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---------------------------------------------------------------- space scene
function buildSpace() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#05060f');

  const planetMat = new THREE.ShaderMaterial({
    uniforms: { uLight: { value: L }, uTime: { value: 0 }, uBand: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec3 vPos; varying vec3 vN;
      void main() {
        vPos = position;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: NOISE + /* glsl */ `
      uniform vec3 uLight; uniform float uTime; uniform float uBand;
      varying vec3 vPos; varying vec3 vN;
      void main() {
        vec3 n = normalize(vN);
        float d = dot(n, uLight);
        float h = fbm(vPos * 2.6);
        float h2 = fbm(vPos * 7.0 + 4.0);
        vec3 basalt = mix(vec3(0.05, 0.025, 0.03), vec3(0.32, 0.13, 0.08), h);
        float ridge = 1.0 - abs(fbm(vPos * 4.0 + 1.3) * 2.0 - 1.0);
        float lava = smoothstep(0.76, 0.92, ridge) * smoothstep(0.02, 0.35, d);
        vec3 lichen = mix(vec3(0.10, 0.45, 0.42), vec3(0.65, 0.22, 0.45), smoothstep(0.35, 0.65, h2));
        vec3 ice = mix(vec3(0.33, 0.50, 0.66), vec3(0.82, 0.91, 0.99), smoothstep(0.3, 0.7, h));
        float tw = exp(-pow(d / 0.16, 2.0));
        vec3 albedo = mix(ice, basalt, smoothstep(-0.08, 0.10, d));
        albedo *= 0.82 + 0.36 * fbm(vPos * 30.0); // fine grain, visible on the final approach
        albedo = mix(albedo, lichen, tw * 0.6 * smoothstep(0.4, 0.6, h2 + 0.1));
        float light = smoothstep(-0.12, 0.45, d);
        vec3 col = albedo * (vec3(1.0, 0.55, 0.36) * light * 1.05 + vec3(0.07, 0.09, 0.19));
        col += vec3(0.85, 0.25, 0.38) * tw * 0.22;
        col += vec3(1.0, 0.45, 0.1) * lava * (1.5 + 0.4 * sin(uTime * 1.7 + h * 20.0));
        col += vec3(0.5, 0.12, 0.02) * smoothstep(0.55, 1.0, d) * 0.35; // heat haze toward the substellar point
        float bio = smoothstep(0.62, 0.72, h2) * (1.0 - smoothstep(-0.35, 0.05, d));
        col += vec3(0.1, 0.85, 0.8) * bio * 0.35;
        // Dashed guides at the edges of the habitable twilight band.
        float lon = atan(vPos.x, vPos.z);
        float line = 1.0 - smoothstep(0.0, 0.007, abs(abs(lon) - 0.245));
        float dash = step(0.5, fract(vPos.y * 16.0 + uTime * 0.5));
        col += vec3(0.3, 1.0, 0.9) * line * dash * uBand * step(abs(vPos.y), 0.75) * step(0.0, vPos.z) * 0.8;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const planet = new THREE.Mesh(new THREE.SphereGeometry(1, 160, 120), planetMat);
  scene.add(planet);

  // Thin rim of atmosphere on the disc...
  const rimMat = new THREE.ShaderMaterial({
    uniforms: { uLight: { value: L }, uFade: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vN = normalize(mat3(modelMatrix) * normal);
        vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uLight; uniform float uFade; varying vec3 vN; varying vec3 vV;
      void main() {
        float f = 1.0 - max(dot(normalize(vN), normalize(vV)), 0.0);
        float rim = pow(f, 3.0);
        float d = dot(normalize(vN), uLight);
        vec3 c = mix(vec3(0.20, 0.35, 0.90), vec3(0.95, 0.30, 0.55), smoothstep(-0.45, 0.0, d));
        c = mix(c, vec3(1.0, 0.55, 0.25), smoothstep(0.0, 0.5, d));
        float a = rim * (0.3 + 0.9 * smoothstep(-0.5, 0.3, d));
        gl_FragColor = vec4(c * a * 1.4 * uFade, 1.0);
      }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.02, 96, 64), rimMat));

  // ...and a soft halo beyond the limb.
  const haloMat = new THREE.ShaderMaterial({
    uniforms: { uLight: { value: L }, uFade: { value: 1 } },
    vertexShader: /* glsl */ `
      varying float vI; varying float vD;
      void main() {
        vec3 nv = normalize(normalMatrix * normal);
        vI = pow(max(0.5 - nv.z, 0.0), 6.0);
        vD = dot(normalize(mat3(modelMatrix) * normal), vec3(-1.0, 0.0, 0.0));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uFade; varying float vI; varying float vD;
      void main() {
        vec3 c = mix(vec3(0.25, 0.35, 0.95), vec3(0.95, 0.35, 0.55), smoothstep(-0.5, 0.0, vD));
        c = mix(c, vec3(1.0, 0.5, 0.2), smoothstep(0.0, 0.6, vD));
        gl_FragColor = vec4(c * vI * 0.6 * uFade, 1.0);
      }`,
    side: THREE.BackSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.16, 96, 64), haloMat));

  // Stars.
  const starGeo = new THREE.BufferGeometry();
  const N = 2600, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const v = new THREE.Vector3().randomDirection().multiplyScalar(60 + Math.random() * 30);
    pos.set([v.x, v.y, v.z], i * 3);
    const warm = Math.random();
    col.set([0.8 + 0.2 * warm, 0.8 + 0.1 * warm, 1.0 - 0.25 * warm], i * 3);
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ size: 0.16, vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false })));

  // The red dwarf "Lume": parked behind the day-side limb so it reads on portrait screens too.
  const sun = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture([[0, 'rgba(255,240,210,1)'], [0.12, 'rgba(255,170,90,1)'], [0.3, 'rgba(255,90,40,0.55)'], [0.6, 'rgba(200,40,60,0.15)'], [1, 'rgba(0,0,0,0)']]),
    blending: THREE.AdditiveBlending, depthWrite: false, transparent: true,
  }));
  sun.position.set(-7.5, 1.2, -26);
  sun.scale.setScalar(22);
  scene.add(sun);

  // Landing reticle that rides the surface.
  const reticle = new THREE.Group();
  const ringMat = new THREE.MeshBasicMaterial({ color: '#5ff5df', transparent: true, opacity: 0.95, depthWrite: false, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.034, 0.042, 48), ringMat);
  const outer = new THREE.Mesh(new THREE.RingGeometry(0.06, 0.063, 48), ringMat.clone());
  outer.material.opacity = 0.5;
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.008, 16), ringMat);
  reticle.add(ring, outer, dot);
  scene.add(reticle);

  // Debris of the mothership, flung across the first seconds.
  const debris = new THREE.Group();
  const debrisMat = new THREE.MeshStandardMaterial({ color: '#d9cbb8', emissive: '#ff6a2b', emissiveIntensity: 0.5, roughness: 0.6, metalness: 0.4, flatShading: true });
  for (let i = 0; i < 38; i++) {
    const m = new THREE.Mesh(i % 3 ? new THREE.TetrahedronGeometry(0.02 + Math.random() * 0.05) : new THREE.BoxGeometry(0.08, 0.02, 0.04), debrisMat);
    m.userData.v = new THREE.Vector3().randomDirection().multiplyScalar(0.25 + Math.random() * 0.6);
    m.userData.r = new THREE.Vector3(Math.random(), Math.random(), Math.random()).multiplyScalar(3);
    debris.add(m);
  }
  debris.position.set(0.25, 0.75, 3.4);
  debris.visible = false;
  scene.add(debris);
  scene.add(new THREE.AmbientLight('#ffffff', 0.4));
  const key = new THREE.DirectionalLight('#ffb07a', 2.2);
  key.position.copy(L).multiplyScalar(10);
  scene.add(key);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 400);
  const tmp = new THREE.Vector3(), p = new THREE.Vector3(), look = new THREE.Vector3();
  const startPos = new THREE.Vector3(0.55, 0.85, 4.3);
  let progress = 0, landing = 0.1, shakeAmp = 0, debrisT = -1;

  function smooth(a, b, x) { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }

  function update(dt, time) {
    planetMat.uniforms.uTime.value = time;
    landingPoint(landing, p);
    // Camera falls along an accelerating path toward a point just south of the landing site.
    const k = Math.pow(progress, 1.55);
    const endPos = tmp.copy(p).multiplyScalar(1.3).add({ x: 0, y: -0.17, z: 0 });
    camera.position.copy(startPos).lerp(endPos, k);
    look.set(0, 0, 0).lerp(p.clone().add({ x: 0, y: 0.1, z: 0 }), smooth(0.25, 1.0, progress));
    if (shakeAmp > 0) {
      camera.position.x += (Math.random() - 0.5) * shakeAmp;
      camera.position.y += (Math.random() - 0.5) * shakeAmp;
    }
    camera.lookAt(look);
    haloMat.uniforms.uFade.value = smooth(1.3, 1.9, camera.position.length());
    rimMat.uniforms.uFade.value = 0.25 + 0.75 * smooth(1.15, 1.6, camera.position.length());
    // Reticle sits on the surface, scaled so it stays readable from orbit.
    reticle.position.copy(p).multiplyScalar(1.002);
    reticle.lookAt(p.clone().multiplyScalar(2));
    const dist = camera.position.distanceTo(reticle.position);
    reticle.scale.setScalar(Math.max(0.45, Math.min(2.6, dist * 0.75)));
    outer.rotation.z = time * 0.8;
    const zoneCol = landing < -0.35 ? '#ff7a3d' : landing > 0.35 ? '#7fb8ff' : '#5ff5df';
    ringMat.color.set(zoneCol);
    outer.material.color.set(zoneCol);
    planetMat.uniforms.uBand.value = 1 - smooth(0.75, 0.95, progress);
    // Debris burst.
    if (debrisT >= 0) {
      debrisT += dt;
      debris.children.forEach((m) => {
        m.position.addScaledVector(m.userData.v, dt);
        m.rotation.x += m.userData.r.x * dt;
        m.rotation.y += m.userData.r.y * dt;
      });
      debrisMat.emissiveIntensity = Math.max(0, 1.4 - debrisT * 0.25);
      if (debrisT > 9) { debris.visible = false; debrisT = -1; }
    }
  }

  return {
    scene, camera, update,
    setProgress: (t) => { progress = t; },
    setLanding: (s) => { landing = s; },
    setShake: (a) => { shakeAmp = a; },
    explode: () => { debris.visible = true; debrisT = 0; debris.children.forEach((m) => m.position.set(0, 0, 0)); },
    reset: () => { progress = 0; shakeAmp = 0; },
  };
}

// --------------------------------------------------------------- ground scene
function vnoise2(x, y) {
  const h = (i, j) => { const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; return s - Math.floor(s); };
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = h(xi, yi), b = h(xi + 1, yi), c = h(xi, yi + 1), d = h(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function buildPod() {
  const pod = new THREE.Group();
  const prof = [[0, 1.52], [0.4, 1.5], [0.43, 1.36], [0.56, 1.25], [0.98, 0.3], [1.0, 0.2]].map(([x, y]) => new THREE.Vector2(x, y));
  const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 40), new THREE.MeshStandardMaterial({ color: '#e9dfcf', roughness: 0.55, metalness: 0.15, flatShading: true }));
  const stripe = new THREE.Mesh(new THREE.LatheGeometry([[0.86, 0.5], [0.73, 0.75]].map(([x, y]) => new THREE.Vector2(x * 1.012, y)), 40), new THREE.MeshStandardMaterial({ color: '#e0662f', roughness: 0.6, side: THREE.DoubleSide }));
  const shield = new THREE.Mesh(new THREE.LatheGeometry([[0, 0], [0.7, 0.04], [0.98, 0.13], [1.01, 0.22]].map(([x, y]) => new THREE.Vector2(x, y)), 40), new THREE.MeshStandardMaterial({ color: '#2a1a14', roughness: 0.9, flatShading: true }));
  const port = new THREE.Mesh(new THREE.CircleGeometry(0.16, 24), new THREE.MeshStandardMaterial({ color: '#ffcf8a', emissive: '#ffb050', emissiveIntensity: 2.2 }));
  port.position.set(0, 0.95, 0.735);
  port.rotation.x = -0.42;
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.03, 8, 24), new THREE.MeshStandardMaterial({ color: '#5a4a44', metalness: 0.6, roughness: 0.4 }));
  rim.position.copy(port.position);
  rim.rotation.x = -0.42;
  pod.add(body, stripe, shield, port, rim);
  pod.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return pod;
}

function roundSprite() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.6)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function buildFigure(h) {
  // A readable silhouette: body, head, a hint of shoulders.
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: '#1a1428', roughness: 0.8, emissive: '#3a1f4a', emissiveIntensity: 0.25 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.17 * h, 0.55 * h, 4, 10), mat);
  body.position.y = 0.45 * h;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13 * h, 14, 10), mat);
  head.position.y = 1.0 * h;
  g.add(body, head);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

function floraMaterial() {
  // Each stalk glows in its own instance colour (teal or magenta).
  const m = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.5, flatShading: true });
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <emissivemap_fragment>',
      '#include <emissivemap_fragment>\n  totalEmissiveRadiance += vColor.rgb * 0.6;');
  };
  return m;
}

function buildGround() {
  const scene = new THREE.Scene();
  const sunDir = new THREE.Vector3(-1, 0.03, -0.4).normalize();

  // Sky: warm only near the sun, magenta further out, cold indigo on the night side.
  const sky = new THREE.Mesh(new THREE.SphereGeometry(200, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: { uSun: { value: sunDir }, uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,
    fragmentShader: NOISE + /* glsl */ `
      uniform vec3 uSun; uniform float uTime; varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        float ang = acos(clamp(dot(d, uSun), -1.0, 1.0));
        float el = d.y;
        vec3 horizon = mix(vec3(1.0, 0.45, 0.18), vec3(0.70, 0.22, 0.45), smoothstep(0.12, 0.42, ang));
        horizon = mix(horizon, vec3(0.10, 0.13, 0.32), smoothstep(0.42, 1.1, ang));
        float k = mix(10.0, 3.5, 1.0 - smoothstep(0.0, 0.7, ang));
        float hg = exp(-max(el, 0.0) * k);
        vec3 col = mix(vec3(0.025, 0.03, 0.09), horizon, hg);
        col += vec3(1.0, 0.4, 0.15) * exp(-ang * 6.0) * 0.55;
        float disc = 1.0 - smoothstep(0.118, 0.125, ang);
        col = mix(col, vec3(1.0, 0.42, 0.18) + 0.25 * fbm(d * 40.0 + uTime * 0.05), disc);
        float st = step(0.9965, hash13(floor(d * 260.0))) * smoothstep(0.5, 1.0, ang) * smoothstep(0.02, 0.15, el);
        col += vec3(0.95, 0.97, 1.0) * st * (1.0 - hg * 0.8);
        float au = smoothstep(0.6, 1.2, ang) * exp(-pow((el - 0.2) / 0.07, 2.0));
        au *= 0.55 + 0.45 * sin(d.x * 13.0 + d.z * 7.0 + uTime * 0.35);
        col += vec3(0.15, 0.95, 0.55) * au * 0.35 + vec3(0.55, 0.2, 0.85) * au * 0.15;
        col = mix(col, vec3(0.08, 0.05, 0.1), 1.0 - smoothstep(-0.06, 0.0, el));
        gl_FragColor = vec4(col, 1.0);
      }`,
  }));
  scene.add(sky);

  // Terrain: scorched rock on the left (toward the sun), frost on the right, lichens in between.
  const geo = new THREE.PlaneGeometry(160, 160, 160, 160);
  geo.rotateX(-Math.PI / 2);
  const P = geo.attributes.position;
  const colors = new Float32Array(P.count * 3);
  const rock = new THREE.Color('#6a3424'), ember = new THREE.Color('#c25a2c'), frost = new THREE.Color('#c9def0'), ice = new THREE.Color('#7da3c4');
  const lichA = new THREE.Color('#22a090'), lichB = new THREE.Color('#a83f78');
  const c = new THREE.Color();
  for (let i = 0; i < P.count; i++) {
    const x = P.getX(i), z = P.getZ(i);
    const r = Math.hypot(x - 0.9, z);
    let y = vnoise2(x * 0.05, z * 0.05) * 4.5 + vnoise2(x * 0.2, z * 0.2) * 0.5 - 2.4;
    y *= Math.min(1, Math.max(0, (r - 4) / 10));
    if (z > 4) y = Math.min(y, -0.2); // keep the foreground open toward the camera
    P.setY(i, y);
    const u = (-x + 0.25 * -z) / 16; // >0 toward the sun side of the screen
    const n = vnoise2(x * 0.3 + 7, z * 0.3);
    c.copy(ice).lerp(frost, n);
    c.lerp(rock.clone().lerp(ember, n * 0.7), Math.min(1, Math.max(0, (u + 0.35) / 0.7)));
    const lich = Math.max(0, 1 - Math.abs(u) / 0.35) * (vnoise2(x * 0.45, z * 0.45) > 0.58 ? 1 : 0);
    c.lerp(n > 0.5 ? lichA : lichB, lich * 0.7);
    colors.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const terrain = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true }));
  terrain.receiveShadow = true;
  scene.add(terrain);

  const pod = buildPod();
  pod.scale.setScalar(1.3);
  pod.position.set(0.9, -0.3, 0);
  pod.rotation.set(0.12, 0.6, -0.3);
  scene.add(pod);

  // Rocks.
  const rocks = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ color: '#4a3236', roughness: 1, flatShading: true }), 80);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), s3 = new THREE.Vector3(), p3 = new THREE.Vector3(), e = new THREE.Euler();
  for (let i = 0; i < rocks.count; i++) {
    let x, z;
    do { x = (Math.random() - 0.5) * 60; z = -Math.random() * 45 + 6; } while (Math.hypot(x - 0.9, z) < 4.5 || (z > 3 && Math.abs(x) < 5));
    const sc = 0.15 + Math.random() ** 2 * 1.5;
    m4.compose(p3.set(x, -0.15 + sc * 0.2, z), q.setFromEuler(e.set(Math.random() * 3, Math.random() * 3, 0)), s3.set(sc, sc * (0.6 + Math.random() * 0.5), sc));
    rocks.setMatrixAt(i, m4);
  }
  rocks.castShadow = true;
  rocks.receiveShadow = true;
  scene.add(rocks);

  // Twilight flora: small glowing stalks that all lean toward the sun.
  const flora = new THREE.InstancedMesh(
    new THREE.ConeGeometry(0.07, 1, 5).translate(0, 0.5, 0),
    floraMaterial(), 220);
  for (let i = 0; i < flora.count; i++) {
    let x, z;
    do { x = (Math.random() - 0.5) * 26; z = Math.random() * 12 - 9; } while (Math.hypot(x - 0.9, z) < 3.2);
    const h = 0.25 + Math.random() * 0.75;
    m4.compose(p3.set(x, -0.2, z), q.setFromEuler(e.set(-0.12, 0, 0.32 + (Math.random() - 0.5) * 0.2)), s3.set(1, h, 1));
    flora.setMatrixAt(i, m4);
    flora.setColorAt(i, c.set(Math.random() < 0.55 ? '#38e0c8' : '#e0559a'));
  }
  flora.castShadow = true;
  scene.add(flora);

  // Reactive props: they appear only if that cargo survived the descent.
  const props = {};
  {
    const g = new THREE.Group();
    const frame = new THREE.MeshStandardMaterial({ color: '#8a7a6a', metalness: 0.6, roughness: 0.4 });
    const cells = new THREE.MeshStandardMaterial({ color: '#22335f', metalness: 0.3, roughness: 0.25, emissive: '#3355bb', emissiveIntensity: 0.35 });
    const panel = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.05, 1.1), cells);
    panel.position.y = 0.95;
    panel.rotation.z = 0.95;
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.95), frame);
    leg.position.y = 0.47;
    g.add(panel, leg);
    g.position.set(-3.3, -0.2, -0.6);
    g.rotation.y = -0.25;
    props.pannello = g;
  }
  {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: '#b0a59b', metalness: 0.7, roughness: 0.35 });
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 3.4), mat);
    mast.position.y = 1.7;
    const dish = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 8, 0, Math.PI * 2, 0, 0.9), mat);
    dish.position.y = 3.2;
    dish.rotation.x = 2.3;
    const blink = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), new THREE.MeshBasicMaterial({ color: '#ff3030' }));
    blink.position.y = 3.45;
    g.add(mast, dish, blink);
    g.userData.blink = blink;
    g.position.set(3.1, -0.25, -1.3);
    props.radio = g;
  }
  {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: '#ddd0bb', metalness: 0.4, roughness: 0.5 });
    for (let i = 0; i < 2; i++) {
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.8, 16), mat);
      tank.position.set(i * 0.45, 0.4, 0);
      g.add(tank);
    }
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.35, 0.45), new THREE.MeshStandardMaterial({ color: '#2a9a8e', roughness: 0.6, emissive: '#0d4a44', emissiveIntensity: 0.5 }));
    box.position.set(0.2, 0.18, 0.45);
    g.add(box);
    g.position.set(2.6, -0.25, 1.4);
    props.elettrolizzatore = g;
  }
  {
    const g = new THREE.Group();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#bfe9ff', transparent: true, opacity: 0.35, roughness: 0.1 }));
    const sprouts = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.3, 6), new THREE.MeshStandardMaterial({ color: '#4bd06a', emissive: '#2f9a45', emissiveIntensity: 0.8 }));
    sprouts.position.y = 0.15;
    g.add(dome, sprouts);
    g.position.set(-2.4, -0.2, 1.6);
    props.semi = g;
  }
  {
    // Torn parachute draped behind the pod (always there: it is what landed us).
    const cloth = new THREE.PlaneGeometry(3.2, 2.4, 14, 10);
    const cp = cloth.attributes.position;
    for (let i = 0; i < cp.count; i++) cp.setZ(i, vnoise2(cp.getX(i) * 1.3, cp.getY(i) * 1.3) * 0.6);
    cloth.computeVertexNormals();
    const chute = new THREE.Mesh(cloth, new THREE.MeshStandardMaterial({ color: '#e36a2c', roughness: 0.8, side: THREE.DoubleSide }));
    chute.rotation.set(-Math.PI / 2 + 0.25, 0, 0.4);
    chute.position.set(3.8, 0.0, -3.2);
    chute.receiveShadow = true;
    scene.add(chute);
  }
  Object.values(props).forEach((g) => { g.traverse((o) => { if (o.isMesh) o.castShadow = true; }); g.visible = false; scene.add(g); });

  // Family silhouettes: one per living crew member at camp.
  const figures = {};
  [['mara', 1.0, -1.9, 0.9], ['elio', 1.06, -1.35, 1.2], ['lin', 0.9, -0.8, 1.5], ['tobia', 0.64, -0.35, 1.8]].forEach(([id, h, x, z]) => {
    const f = buildFigure(h);
    f.position.set(x, -0.2, z);
    f.rotation.y = -0.6;
    figures[id] = f;
    scene.add(f);
  });

  // Spores drifting toward the sun.
  const SP = 380, spPos = new Float32Array(SP * 3), spSeed = new Float32Array(SP);
  for (let i = 0; i < SP; i++) {
    spPos.set([(Math.random() - 0.5) * 30, Math.random() * 5, (Math.random() - 0.5) * 18 - 2], i * 3);
    spSeed[i] = Math.random() * 10;
  }
  const spGeo = new THREE.BufferGeometry();
  spGeo.setAttribute('position', new THREE.BufferAttribute(spPos, 3));
  const spores = new THREE.Points(spGeo, new THREE.PointsMaterial({
    size: 0.12, map: roundSprite(), color: '#ffc98a', transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false,
  }));
  scene.add(spores);

  scene.add(new THREE.HemisphereLight('#8a62c8', '#20121c', 1.1));
  const sunLight = new THREE.DirectionalLight('#ff8a4c', 3.6);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(1024, 1024);
  Object.assign(sunLight.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 140 });
  sunLight.shadow.bias = -0.0008;
  sunLight.shadow.normalBias = 0.04;
  scene.add(sunLight, sunLight.target);
  const fill = new THREE.DirectionalLight('#b4b8ff', 1.3); // cold bounce from the night side
  fill.position.set(6, 5, 12);
  scene.add(fill);
  scene.fog = new THREE.FogExp2('#2b1838', 0.014);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 500);
  const look = new THREE.Vector3(0.2, 1.1, 0);

  /** Frame the camp for this screen shape; the journal sheet covers the lower part on phones. */
  function aim(w, h) {
    const aspect = w / h;
    const portrait = aspect < 0.8;
    if (portrait) camera.setViewOffset(w, h, 0, h * 0.27, w, h);
    else camera.setViewOffset(w, h, -w * 0.26, 0, w, h);
    camera.updateProjectionMatrix();
    // Put the sun disc near the left edge of what is actually on screen.
    const tanH = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * aspect;
    const leftNdc = portrait ? -1 : -1 - 0.52;
    const az = Math.atan(leftNdc * tanH) * 0.78;
    sunDir.set(Math.sin(az), 0.11, -Math.cos(az)).normalize();
    sunLight.position.copy(sunDir).multiplyScalar(60);
  }

  function update(dt, time) {
    sky.material.uniforms.uTime.value = time;
    camera.position.set(Math.sin(time * 0.07) * 0.4, 2.4 + Math.sin(time * 0.11) * 0.06, 16.5);
    camera.lookAt(look);
    const a = spGeo.attributes.position;
    for (let i = 0; i < SP; i++) {
      let x = a.getX(i) + (sunDir.x * 0.8 + Math.sin(time + spSeed[i]) * 0.2) * dt;
      const y = a.getY(i) + Math.cos(time * 0.7 + spSeed[i]) * 0.15 * dt;
      let z = a.getZ(i) + sunDir.z * 0.5 * dt;
      if (x < -15) x += 30;
      if (z < -11) z += 18;
      a.setXYZ(i, x, y, z);
    }
    a.needsUpdate = true;
    if (props.radio.visible) props.radio.userData.blink.visible = Math.floor(time * 1.5) % 2 === 0;
  }

  return {
    scene, camera, update, aim,
    /** Show which cargo survived and who is at camp. */
    setCamp({ tools, crew }) {
      for (const [id, g] of Object.entries(props)) g.visible = tools.has(id);
      for (const m of crew) figures[m.id].visible = m.alive && !m.away;
    },
  };
}

// ------------------------------------------------------------------ renderer
export function initScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const space = buildSpace();
  const ground = buildGround();
  let mode = 'space';

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    for (const cam of [space.camera, ground.camera]) { cam.aspect = w / h; cam.updateProjectionMatrix(); }
    // Portrait phones: wider lens, and lift the planet into the gap between the HUD panels.
    const portrait = w / h < 0.8;
    space.camera.fov = portrait ? 58 : 42;
    if (portrait) space.camera.setViewOffset(w, h, 0, h * 0.1, w, h);
    else space.camera.clearViewOffset();
    space.camera.updateProjectionMatrix();
    ground.aim(w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  const t0 = performance.now();
  let prev = t0;
  ticker((now) => {
    const dt = Math.min((now - prev) / 1000, 0.05);
    prev = now;
    const s = mode === 'space' ? space : ground;
    s.update(dt, (now - t0) / 1000);
    renderer.render(s.scene, s.camera);
  });

  return {
    space, ground,
    setMode(m) { mode = m; },
  };
}
