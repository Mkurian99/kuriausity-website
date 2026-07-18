import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import BrainScene from "./BrainScene";
import PixelDissolve from "./PixelDissolve";

interface BrainTransitionProps {
  /** Fired at the height of the bloom — the moment to swap the route. */
  onNavigate: () => void;
  /** Fired when the last pixel has fallen — safe to unmount the overlay. */
  onFinish: () => void;
}

type Phase = "dive" | "bloom" | "release";

const BLOOM_NAVIGATE_MS = 70; // route swap while the light is still cresting
// The bloom holds just long enough for the old page to exit and the serene
// world to mount beneath the light — then the pixels crumble immediately.
// The whole dive-to-dissolved sequence targets well under a second.
const BLOOM_RELEASE_MS = 180;

/**
 * Full-screen cinematic transition to the Results page, in three acts:
 *
 *   I. DIVE    — the camera plunges into the glowing neural core while
 *                streaks of signal rush past ("into the head").
 *   II. BLOOM  — the core ignites into a field of light ("through the brain").
 *   III. RELEASE — the light resolves into pixels that let go and fall away,
 *                revealing the green, serene world of results ("out of the
 *                head, into the world").
 */
export default function BrainTransition({ onNavigate, onFinish }: BrainTransitionProps) {
  const [phase, setPhase] = useState<Phase>("dive");
  const timers = useRef<number[]>([]);
  const navigated = useRef(false);
  const arrived = useRef(false);

  useEffect(() => {
    const stored = timers.current;
    return () => stored.forEach((t) => window.clearTimeout(t));
  }, []);

  const handleArrive = () => {
    if (arrived.current) return;
    arrived.current = true;
    setPhase("bloom");
    timers.current.push(
      window.setTimeout(() => {
        if (!navigated.current) {
          navigated.current = true;
          onNavigate();
        }
      }, BLOOM_NAVIGATE_MS),
      window.setTimeout(() => setPhase("release"), BLOOM_RELEASE_MS)
    );
  };

  // Wall-clock guarantee: even if the GPU stalls the very first frames,
  // the sequence advances on time. Idempotent with the scene's onArrive.
  useEffect(() => {
    timers.current.push(window.setTimeout(handleArrive, 520));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="brain-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      style={{
        background:
          phase === "dive"
            ? "var(--kq-obsidian)"
            : phase === "bloom"
              ? "transparent"
              : "#F4FAF7", // release: gaps always open onto light, never dark
      }}
    >
      {/* Act I — the dive (unmounted at release to free the GPU) */}
      {phase !== "release" && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5.6], fov: 50 }}
          gl={{ antialias: true }}
        >
          <Suspense fallback={null}>
            <BrainScene
              interactive={false}
              dive={true}
              background="#07101A"
              onArrive={handleArrive}
            />
          </Suspense>
        </Canvas>
      )}

      {/* Act II — the bloom: the core ignites into light */}
      {phase === "bloom" && (
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "160vmax",
            height: "160vmax",
            left: "50%",
            top: "44%",
            x: "-50%",
            y: "-50%",
            background:
              "radial-gradient(circle, #FFFFFF 0%, #F6FAF8 30%, #ECFDF5 46%, #D1FAE5 60%, #A7F3D0 74%, rgba(167,243,208,0) 100%)",
          }}
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Act III — the release: pixels let go and fall away */}
      {phase === "release" && <PixelDissolve onDone={onFinish} />}

      {/* Labels — one for the descent, one for the arrival */}
      <AnimatePresence mode="wait">
        {phase === "dive" && (
          <motion.div
            key="label-dive"
            className="brain-transition__label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            Real Minds — Real Results
          </motion.div>
        )}
        {phase === "release" && (
          <motion.div
            key="label-release"
            className="brain-transition__label"
            style={{ color: "#047857" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{
              opacity: [0, 0.85, 0.85, 0],
              y: [8, 0, 0, -6],
              transition: { duration: 1.15, delay: 0.1, times: [0, 0.25, 0.7, 1], ease: "easeInOut" },
            }}
            exit={{ opacity: 0 }}
          >
            Out of the Head — Into the World
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
