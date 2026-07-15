import * as THREE from "three";

/**
 * Generate a brain-shaped point cloud in the Opal Malachite palette.
 * Points are distributed over a deformed ellipsoid (two lobes + a central
 * fissure + surface folds) with some interior points to suggest the
 * "ecological structures inside the mind".
 *
 * Color scheme: Emerald → Malachite → Teal with Cobalt iridescent flashes
 */
export function generateBrainPoints(count = 1500) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  /* === OPAL MALACHITE PALETTE === */
  const emerald = new THREE.Color("#059669");   // --kq-em-bright (deep emerald)
  const malachite = new THREE.Color("#2D9A5E"); // --kq-mal-bright (malachite)
  const teal = new THREE.Color("#0D9488");      // --kq-teal-flash (teal)
  const cobalt = new THREE.Color("#93C5FD");    // --kq-cobalt-soft (iridescent flash)
  const mint = new THREE.Color("#6EE7B7");      // --kq-em-light (light emerald)
  const sacredRed = new THREE.Color("#8B2635"); // sacred texts accent
  const philGold = new THREE.Color("#9C5A20");  // history of philosophy accent
  const v = new THREE.Vector3();

  for (let i = 0; i < count; i++) {
    v.randomDirection();

    // ellipsoid proportions of a brain (wide, slightly flattened, deeper f/b)
    v.x *= 1.18;
    v.y *= 0.92;
    v.z *= 1.04;

    // central longitudinal fissure between the two hemispheres
    const fissure = 0.2 * Math.sign(v.x || 1) * Math.exp(-Math.pow(v.x * 3, 2));
    v.x += fissure;

    // surface folds (gyri / sulci)
    let r =
      1 +
      0.09 * Math.sin(v.x * 9.0) +
      0.08 * Math.sin(v.y * 8.0 + 1.5) +
      0.08 * Math.sin(v.z * 10.0 + 3.0);

    // a portion of points sit inside -> root/neural depth
    const interior = Math.random() < 0.38 ? 0.35 + 0.6 * Math.random() : 1;

    v.multiplyScalar(r * interior * 1.5);

    positions[i * 3] = v.x;
    positions[i * 3 + 1] = v.y;
    positions[i * 3 + 2] = v.z;

    // === Color distribution ===
    // 55% emerald → malachite blend (dominant)
    // 18% emerald → teal blend (cool shift)
    // 10% emerald → mint blend (bright accents)
    // 6% cobalt iridescent flash (opal sparkle)
    // 5% sacred red (sacred texts accent — just a few)
    // 4% philosophy gold (history of philosophy — just a few)
    // 2% bright red-gold mix
    let c: THREE.Color;
    const roll = Math.random();
    if (roll < 0.04) {
      // Philosophy gold — warm accent (History of Philosophy)
      c = philGold.clone();
      c.lerp(emerald, Math.random() * 0.25);
    } else if (roll < 0.09) {
      // Sacred red — warm accent (Sacred Texts)
      c = sacredRed.clone();
      c.lerp(emerald, Math.random() * 0.2);
    } else if (roll < 0.15) {
      // Cobalt iridescent flash — the opal signature
      c = cobalt.clone();
      c.lerp(mint, Math.random() * 0.3);
    } else if (roll < 0.27) {
      // Emerald → mint bright accent
      c = emerald.clone().lerp(mint, 0.4 + Math.random() * 0.4);
    } else if (roll < 0.47) {
      // Emerald → teal cool shift
      c = emerald.clone().lerp(teal, Math.random() * 0.55);
    } else {
      // Emerald → malachite (dominant tone)
      c = emerald.clone().lerp(malachite, Math.random() * 0.65);
    }
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  return { positions, colors };
}

/**
 * Build neural connection line segments between nearby points to create the
 * glowing web / root structure.
 */
export function generateNeuralLines(positions: Float32Array, maxLines = 520) {
  const count = positions.length / 3;
  const segs: number[] = [];
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  let tries = 0;
  const cap = maxLines * 40;

  while (segs.length < maxLines * 6 && tries < cap) {
    tries++;
    const ia = (Math.random() * count) | 0;
    const ib = (Math.random() * count) | 0;
    if (ia === ib) continue;
    a.set(positions[ia * 3], positions[ia * 3 + 1], positions[ia * 3 + 2]);
    b.set(positions[ib * 3], positions[ib * 3 + 1], positions[ib * 3 + 2]);
    const d = a.distanceTo(b);
    if (d > 0.18 && d < 0.62) {
      segs.push(a.x, a.y, a.z, b.x, b.y, b.z);
    }
  }
  return new Float32Array(segs);
}

/** Soft radial glow sprite — opal-tinged bloom halo per point. */
export function makeGlowTexture() {
  const size = 64;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);

  // Opal-iridescent glow: white-hot center → emerald-teal mid → transparent
  g.addColorStop(0.0, "rgba(255,255,255,1)");
  g.addColorStop(0.15, "rgba(167,243,208,0.95)");  // em-pale
  g.addColorStop(0.35, "rgba(5,150,105,0.55)");    // em-bright
  g.addColorStop(0.6, "rgba(13,148,136,0.25)");    // teal-flash
  g.addColorStop(1.0, "rgba(7,16,26,0)");           // obsidian transparent

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c);
  t.needsUpdate = true;
  return t;
}

/**
 * Build the full brain as a single THREE.Group (core points + soft halo +
 * neural line web). Materials are stashed on userData for animation, and a
 * dispose() helper is attached for cleanup.
 */
export function buildBrainGroup() {
  const group = new THREE.Group();
  const glow = makeGlowTexture();
  const { positions, colors } = generateBrainPoints(1600);

  const pg = new THREE.BufferGeometry();
  pg.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pg.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const coreMat = new THREE.PointsMaterial({
    vertexColors: true,
    map: glow,
    size: 0.13,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const haloMat = new THREE.PointsMaterial({
    vertexColors: true,
    map: glow,
    size: 0.42,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const lineArr = generateNeuralLines(positions, 560);
  const lg = new THREE.BufferGeometry();
  lg.setAttribute("position", new THREE.BufferAttribute(lineArr, 3));

  // Neural lines in the malachite-teal spectrum
  const lineMat = new THREE.LineBasicMaterial({
    color: new THREE.Color("#0D9488"), // teal-flash
    transparent: true,
    opacity: 0.16,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  group.add(new THREE.Points(pg, haloMat));
  group.add(new THREE.LineSegments(lg, lineMat));
  group.add(new THREE.Points(pg, coreMat));

  group.userData.mats = { coreMat, haloMat, lineMat };
  group.userData.dispose = () => {
    pg.dispose();
    lg.dispose();
    coreMat.dispose();
    haloMat.dispose();
    lineMat.dispose();
    glow.dispose();
  };
  return group;
}
