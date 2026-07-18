import { useEffect, useRef } from "react";

/**
 * The serene green "world" that greets visitors after the brain dive —
 * slow aurora blobs in mint and emerald, plus a sparse field of drifting
 * light motes (seeds of thought, out of the head and into the open air).
 * Purely atmospheric; sits behind existing content.
 */
export default function SereneField({ motes = 34 }: { motes?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    interface Mote {
      x: number; y: number; r: number;
      vx: number; vy: number; sway: number; phase: number;
      hue: number; alpha: number;
    }
    const field: Mote[] = Array.from({ length: motes }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 2.2,
      vx: (Math.random() - 0.5) * 0.006,
      vy: -(0.008 + Math.random() * 0.02),
      sway: 0.006 + Math.random() * 0.014,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() < 0.72 ? 152 : 205, // emerald, occasionally cobalt
      alpha: 0.14 + Math.random() * 0.22,
    }));

    let t = 0;
    const tick = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      for (const m of field) {
        m.y += m.vy * 0.016;
        m.x += m.vx * 0.016 + Math.sin(t * 0.6 + m.phase) * m.sway * 0.016;
        if (m.y < -0.05) { m.y = 1.05; m.x = Math.random(); }
        if (m.x < -0.05) m.x = 1.05;
        if (m.x > 1.05) m.x = -0.05;

        const px = m.x * w;
        const py = m.y * h;
        const twinkle = 0.75 + 0.25 * Math.sin(t * 1.4 + m.phase * 3);
        const g = ctx.createRadialGradient(px, py, 0, px, py, m.r * 4);
        g.addColorStop(0, `hsla(${m.hue}, 70%, 62%, ${m.alpha * twinkle})`);
        g.addColorStop(1, `hsla(${m.hue}, 70%, 62%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, m.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [motes]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora blobs */}
      <div
        className="serene-blob serene-blob--a"
        style={{
          width: "55vw", height: "55vw", left: "-12vw", top: "-18vw",
          background: "radial-gradient(circle, rgba(167,243,208,0.55) 0%, rgba(167,243,208,0) 68%)",
        }}
      />
      <div
        className="serene-blob serene-blob--b"
        style={{
          width: "48vw", height: "48vw", right: "-10vw", top: "-8vw",
          background: "radial-gradient(circle, rgba(110,231,183,0.4) 0%, rgba(110,231,183,0) 68%)",
        }}
      />
      <div
        className="serene-blob serene-blob--c"
        style={{
          width: "40vw", height: "40vw", left: "30vw", bottom: "-22vw",
          background: "radial-gradient(circle, rgba(187,247,208,0.5) 0%, rgba(187,247,208,0) 70%)",
        }}
      />
      <div
        className="serene-blob serene-blob--a"
        style={{
          width: "26vw", height: "26vw", right: "16vw", bottom: "-6vw",
          animationDelay: "-9s",
          background: "radial-gradient(circle, rgba(219,234,254,0.5) 0%, rgba(219,234,254,0) 70%)",
        }}
      />
      {/* Drifting motes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
