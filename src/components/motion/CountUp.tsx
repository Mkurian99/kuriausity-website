import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

/**
 * Renders the exact same stat string, but counts up to it when scrolled
 * into view. Handles "150+", "94%", "4+", "270", and range forms like
 * "3.2→3.9" (the second figure sweeps from the first). Non-numeric values
 * (e.g. "Top 10") render as-is.
 */
export default function CountUp({ value, duration = 1.5, className, style }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // "3.2→3.9" style range
  const range = value.match(/^(\d+(?:\.\d+)?)(→)(\d+(?:\.\d+)?)$/);
  // "150+" / "94%" / "270" style single figure
  const single = value.match(/^(\d+(?:\.\d+)?)([^\d]*)$/);

  useEffect(() => {
    if (!inView || reduced || !ref.current) return;
    const el = ref.current;

    if (range) {
      const from = parseFloat(range[1]);
      const to = parseFloat(range[3]);
      const decimals = (range[3].split(".")[1] || "").length;
      const controls = animate(from, to, {
        duration,
        ease: easeOutCubic,
        onUpdate: (v) => {
          el.textContent = `${range[1]}→${v.toFixed(decimals)}`;
        },
      });
      return () => controls.stop();
    }

    if (single) {
      const to = parseFloat(single[1]);
      const suffix = single[2];
      const decimals = (single[1].split(".")[1] || "").length;
      const controls = animate(0, to, {
        duration,
        ease: easeOutCubic,
        onUpdate: (v) => {
          el.textContent = `${v.toFixed(decimals)}${suffix}`;
        },
      });
      return () => controls.stop();
    }
  }, [inView, reduced, duration, range, single, value]);

  return (
    <span ref={ref} className={className} style={style}>
      {value}
    </span>
  );
}
