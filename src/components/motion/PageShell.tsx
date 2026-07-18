import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Route-change choreography: the incoming page rises out of a soft blur,
 * the outgoing page sinks gently. Wrapped around every route so navigation
 * feels like turning a page, not reloading a document.
 *
 * Exception: arriving from the brain dive. There the pixel dissolve IS the
 * entrance — the serene world must already be fully present beneath the
 * falling pixels, so the page renders instantly (no blur/fade-in).
 */
export default function PageShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const fromDive = (location.state as { fromDive?: boolean } | null)?.fromDive === true;

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced) return <>{children}</>;

  if (fromDive) {
    return (
      <motion.div
        initial={false}
        exit={{
          opacity: 0,
          y: -12,
          filter: "blur(4px)",
          transition: { duration: 0.26, ease: EASE },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: EASE },
      }}
      exit={{
        opacity: 0,
        y: -12,
        filter: "blur(4px)",
        transition: { duration: 0.26, ease: EASE },
      }}
    >
      {children}
    </motion.div>
  );
}
