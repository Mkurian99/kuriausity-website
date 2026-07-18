import { useCallback, useEffect, useRef } from "react";

/**
 * Shared scroll-reveal with per-batch staggering.
 * Elements registering via the returned ref callback rise and de-blur into
 * view; elements entering in the same animation frame are delayed in
 * document order so sections bloom as a cascade instead of all at once.
 * Drop-in replacement for the per-page IntersectionObserver boilerplate.
 */
export function useStaggerReveal(deps: unknown[] = []) {
  const items = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const batch = entries.filter((e) => e.isIntersecting);
        batch.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.setProperty("--reveal-delay", `${i * 90}ms`);
          el.classList.add("visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    items.current.forEach((el) => {
      if (!el.classList.contains("visible")) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return useCallback((el: HTMLElement | null) => {
    if (el && !items.current.includes(el)) {
      items.current.push(el);
    }
  }, []);
}
