import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import BrainScene from "./BrainScene";

interface BrainTransitionProps {
  onComplete: () => void;
}

/**
 * Full-screen cinematic dive into the brain that transitions to the Results page.
 * The camera zooms into the glowing neural core, then calls onComplete to swap the route.
 * No light burst — just a clean brain dive directly into the results.
 */
export default function BrainTransition({ onComplete }: BrainTransitionProps) {
  return (
    <motion.div
      className="brain-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
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
            onArrive={onComplete}
          />
        </Suspense>
      </Canvas>

      <div className="brain-transition__label">
        Real Minds — Real Results
      </div>
    </motion.div>
  );
}
