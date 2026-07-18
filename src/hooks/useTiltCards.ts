import { useEffect } from "react";

const CARD_SELECTOR = [
  ".course-card",
  ".course-detail-card",
  ".consultant-card",
  ".tutoring-card",
  ".value-card",
  ".promise-card",
  ".scenario-card",
  ".blog-card",
  ".kq-panel",
].join(",");

const MAX_TILT = 3.2; // degrees — felt, never seasick

/**
 * Global delegated pointer-tilt + sheen tracking for every card surface on
 * the site. One listener pair on document; zero markup changes required.
 * Only engages on fine pointers with motion allowed.
 */
export function useTiltCards() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let active: HTMLElement | null = null;

    const findCard = (target: EventTarget | null): HTMLElement | null =>
      target instanceof Element ? target.closest<HTMLElement>(CARD_SELECTOR) : null;

    const onMove = (e: PointerEvent) => {
      const card = findCard(e.target);
      if (card !== active) {
        if (active) reset(active);
        active = card;
      }
      if (!card) return;

      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", `${(px * 100).toFixed(2)}%`);
      card.style.setProperty("--my", `${(py * 100).toFixed(2)}%`);
      const rx = (0.5 - py) * MAX_TILT;
      const ry = (px - 0.5) * MAX_TILT;
      card.style.transform = `translateY(-3px) perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    };

    const reset = (el: HTMLElement) => {
      el.style.transform = "";
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    };

    const onOut = (e: PointerEvent) => {
      if (active && !active.contains(e.relatedTarget as Node | null)) {
        reset(active);
        active = null;
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      if (active) reset(active);
    };
  }, []);
}
