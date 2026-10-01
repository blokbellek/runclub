// Generates organic topographic contour paths for the site's map-sheet background.
// Run: node scripts/generate-contours.mjs  →  writes public/images/topo/{sheet,night}.svg
import { writeFileSync, mkdirSync } from "node:fs";

const W = 1600;
const H = 1000;
const STEP = 8; // grid resolution in px
const cols = Math.floor(W / STEP) + 1;
const rows = Math.floor(H / STEP) + 1;

// Deterministic PRNG so the sheet never changes between builds.
let seed = 1931;
const rand = () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};

// Smooth value noise.
const LAT = 24;
const lattice = Array.from({ length: LAT * LAT }, rand);
const smooth = (t) => t * t * (3 - 2 * t);
function noise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = smooth(x - xi), yf = smooth(y - yi);
  const g = (i, j) => lattice[(((j % LAT) + LAT) % LAT) * LAT + (((i % LAT) + LAT) % LAT)];
  const a = g(xi, yi), b = g(xi + 1, yi), c = g(xi, yi + 1), d = g(xi + 1, yi + 1);
  return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
}

// Ridges and knolls loosely modelled on a valley running SW→NE.
const hills = [
  { x: 1180, y: 300, r: 260, h: 1.0 },
  { x: 1420, y: 640, r: 220, h: 0.8 },
  { x: 300, y: 760, r: 300, h: 0.9 },
  { x: 560, y: 180, r: 200, h: 0.6 },
  { x: 900, y: 860, r: 160, h: 0.5 },
  { x: 120, y: 220, r: 180, h: 0.55 },
];

function height(x, y) {
  let h = 0;
  for (const p of hills) {
    const dx = x - p.x, dy = y - p.y;
    h += p.h * Math.exp(-(dx * dx + dy * dy) / (2 * p.r * p.r));
  }
  // valley trough
  const vd = (y - (H * 0.55 - (x - W / 2) * 0.35)) / 140;
  h -= 0.35 * Math.exp(-vd * vd);
  h += 0.38 * noise(x / 210, y / 210) + 0.14 * noise(x / 80 + 7, y / 80 + 3);
  return h;
}

const field = [];
for (let j = 0; j < rows; j++) {
  field.push([]);
  for (let i = 0; i < cols; i++) field[j].push(height(i * STEP, j * STEP));
}

let min = Infinity, max = -Infinity;
for (const r of field) for (const v of r) { min = Math.min(min, v); max = Math.max(max, v); }

const LEVELS = 26;
const out = [];

for (let l = 1; l < LEVELS; l++) {
  const t = min + ((max - min) * l) / LEVELS;
  const segs = [];
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const a = field[j][i], b = field[j][i + 1], c = field[j + 1][i + 1], d = field[j + 1][i];
      const x = i * STEP, y = j * STEP;
      const lerp = (v1, v2) => (t - v1) / (v2 - v1);
      const pts = [];
      if ((a < t) !== (b < t)) pts.push([x + STEP * lerp(a, b), y]);
      if ((b < t) !== (c < t)) pts.push([x + STEP, y + STEP * lerp(b, c)]);
      if ((d < t) !== (c < t)) pts.push([x + STEP * lerp(d, c), y + STEP]);
      if ((a < t) !== (d < t)) pts.push([x, y + STEP * lerp(a, d)]);
      if (pts.length === 2) segs.push(pts);
      else if (pts.length === 4) { segs.push([pts[0], pts[1]]); segs.push([pts[2], pts[3]]); }
    }
  }

  // Chain segments into polylines.
  const key = (p) => `${Math.round(p[0] * 10)},${Math.round(p[1] * 10)}`;
  const byPoint = new Map();
  segs.forEach((s, idx) => {
    for (const p of s) {
      const k = key(p);
      if (!byPoint.has(k)) byPoint.set(k, []);
      byPoint.get(k).push(idx);
    }
  });
  const used = new Uint8Array(segs.length);
  const lines = [];
  for (let s = 0; s < segs.length; s++) {
    if (used[s]) continue;
    used[s] = 1;
    const line = [segs[s][0], segs[s][1]];
    for (const dir of [1, 0]) {
      for (;;) {
        const end = dir ? line[line.length - 1] : line[0];
        const next = (byPoint.get(key(end)) || []).find((n) => !used[n]);
        if (next === undefined) break;
        used[next] = 1;
        const [p, q] = segs[next];
        const other = key(p) === key(end) ? q : p;
        if (dir) line.push(other); else line.unshift(other);
      }
    }
    if (line.length > 12) lines.push(line);
  }

  // Simplify (keep every 3rd point) and emit smooth quadratic paths.
  const paths = lines.map((line) => {
    const p = line.filter((_, i) => i % 3 === 0 || i === line.length - 1);
    let d = `M${p[0][0].toFixed(1)} ${p[0][1].toFixed(1)}`;
    for (let i = 1; i < p.length - 1; i++) {
      const mx = (p[i][0] + p[i + 1][0]) / 2, my = (p[i][1] + p[i + 1][1]) / 2;
      d += `Q${p[i][0].toFixed(1)} ${p[i][1].toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)}`;
    }
    const last = p[p.length - 1];
    d += `L${last[0].toFixed(1)} ${last[1].toFixed(1)}`;
    return d;
  });

  if (paths.length) out.push({ d: paths.join(""), index: l % 5 === 0, elevation: 1100 + l * 10 });
}

// "sheet" sits on the tuff-rose ground, "night" on the dark umber bands.
const variants = {
  sheet: { minor: "#a0573a", index: "#7d3a22", minorOpacity: 0.26, indexOpacity: 0.48 },
  night: { minor: "#e9b7a2", index: "#f3cdbd", minorOpacity: 0.14, indexOpacity: 0.28 },
  // behind reading sections: present, never competing with body text
  quiet: { minor: "#a0573a", index: "#7d3a22", minorOpacity: 0.12, indexOpacity: 0.24 },
};
mkdirSync("public/images/topo", { recursive: true });
for (const [name, c] of Object.entries(variants)) {
  const paths = out
    .map(
      (l) =>
        `<path d="${l.d}" stroke="${l.index ? c.index : c.minor}" stroke-opacity="${l.index ? c.indexOpacity : c.minorOpacity}" stroke-width="${l.index ? 1.6 : 0.8}"/>`,
    )
    .join("");
  writeFileSync(
    `public/images/topo/${name}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke-linecap="round" stroke-linejoin="round">${paths}</g></svg>`,
  );
}
console.log(`levels: ${out.length}`);
