import { useEffect, useRef } from "react";

/**
 * The "out of the head, into the world" release.
 *
 * After the dive blooms to white, the screen resolves into a field of
 * pale-green pixels — the stuff the mind is made of — which then let go:
 * each cell breaks free, drifts, spins, and falls away with gravity,
 * revealing the serene Results page underneath. Center cells fall first,
 * so the world opens from the middle outward.
 */
export default function PixelDissolve({ onDone }: { onDone?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    if (doneRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      doneRef.current = true;
      onDone?.();
      return;
    }

    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cols = Math.max(28, Math.round(w / 34));
    const cell = Math.ceil(w / cols) + 1;
    const rows = Math.ceil(h / cell);
    const cx = w / 2;
    const cy = h * 0.42;
    const maxDist = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy));

    // Light field palette — white core out to mint/emerald rim
    const core = ["#FFFFFF", "#F6FAF8", "#ECFDF5"];
    const mid = ["#D1FAE5", "#BBF7D0", "#A7F3D0"];
    const rim = ["#A7F3D0", "#6EE7B7", "#86EFAC", "#4ADE80"];

    interface Cell {
      x: number; y: number; size: number; color: string;
      delay: number; fall: number; vx: number; wobble: number;
      spin: number; rot: number; g: number;
    }

    const cells: Cell[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * (w / cols);
        const y = r * (h / rows);
        const d = Math.hypot(x + cell / 2 - cx, y + cell / 2 - cy) / maxDist; // 0 center → 1 rim
        const palette = d < 0.28 ? core : d < 0.62 ? mid : rim;
        let color = palette[(Math.random() * palette.length) | 0];
        if (d > 0.55 && Math.random() < 0.06) color = "#34D399"; // rare emerald spark
        cells.push({
          x, y,
          size: cell,
          color,
          // A beat to register the field, then a fast crumble — the world
          // beneath is already painted (the bloom hold covers first paint).
          // Kept brisk so the whole dive-to-dissolved sequence stays under a second.
          delay: 0.02 + d * 0.05 + Math.random() * 0.03,
          fall: 0.14 + Math.random() * 0.08,
          vx: (Math.random() - 0.5) * 170,
          wobble: 1.5 + Math.random() * 4,
          spin: (Math.random() - 0.5) * 4.2,
          rot: Math.random() * Math.PI,
          g: 3800 + Math.random() * 2000,
        });
      }
    }

    const total = 0.1 + 0.22; // max delay + max fall
    const minRun = 0.22; // floor so the crumble always reads, never drags
    const start = performance.now();
    let raf = 0;

    const finish = () => {
      if (!doneRef.current) {
        doneRef.current = true;
        onDone?.();
      }
    };

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      ctx.clearRect(0, 0, w, h);

      let alive = false;
      for (const cell of cells) {
        const local = t - cell.delay;
        if (local < 0) {
          // not yet released — still part of the field
          ctx.fillStyle = cell.color;
          ctx.fillRect(cell.x, cell.y, cell.size, cell.size);
          alive = true;
          continue;
        }
        if (local > cell.fall) continue;
        alive = true;

        const p = local / cell.fall; // 0..1
        const fadeStart = 0.45;
        const alpha = p < fadeStart ? 1 : 1 - (p - fadeStart) / (1 - fadeStart);
        const px = cell.x + cell.vx * local + Math.sin(local * cell.wobble * 2) * 10 * p;
        const py = cell.y + cell.g * local * local * 0.5;
        const scale = 1 - p * 0.45;
        const rot = cell.rot + cell.spin * local;

        ctx.save();
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.translate(px + cell.size / 2, py + cell.size / 2);
        ctx.rotate(rot);
        ctx.scale(scale, scale);
        ctx.fillStyle = cell.color;
        ctx.fillRect(-cell.size / 2, -cell.size / 2, cell.size, cell.size);
        ctx.restore();
      }

      if (t >= minRun && !alive) {
        finish();
        return;
      }
      if (t < total + 0.5) {
        raf = requestAnimationFrame(draw);
      } else {
        finish();
      }
    };
    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
