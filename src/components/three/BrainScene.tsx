import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { buildBrainGroup } from "@/lib/brain";

const DIVE_DURATION = 0.42;
const easeInOutCubic = (x: number) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

interface BrainSceneProps {
  interactive?: boolean;
  dive?: boolean;
  background?: string | null;
  onArrive?: () => void;
}

/**
 * Adds the neural brain to the scene imperatively (NO three.js JSX intrinsics,
 * so the visual-edits babel plugin cannot inject props that break R3F).
 *
 * - interactive: subtle pointer parallax
 * - dive: cinematic camera zoom into the core (used by the Results transition)
 * - background: optional scene background color
 */
export default function BrainScene({
  interactive = true,
  dive = false,
  background = null,
  onArrive,
}: BrainSceneProps) {
  const { scene, camera } = useThree();
  const brain = useMemo(() => buildBrainGroup(), []);
  const diveT = useRef(0);
  const fired = useRef(false);

  useEffect(() => {
    const light = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(brain, light);
    const prevBg = scene.background;
    if (background) scene.background = new THREE.Color(background);
    return () => {
      scene.remove(brain, light);
      scene.background = prevBg;
      (brain.userData as { dispose?: () => void }).dispose?.();
    };
  }, [scene, brain, background]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const px = interactive ? state.pointer.x * 0.3 : 0;
    const py = interactive ? state.pointer.y * 0.2 : 0;
    brain.rotation.y = t * 0.12 + px;
    brain.rotation.x = THREE.MathUtils.lerp(
      brain.rotation.x,
      -py + Math.sin(t * 0.25) * 0.04,
      0.06
    );
    const pulse = Math.max(0, Math.sin(t * 0.55)) ** 3;
    brain.scale.setScalar(1 + Math.sin(t * 1.1) * 0.015 + pulse * 0.05);

    const mats = brain.userData.mats as {
      coreMat: THREE.PointsMaterial;
      haloMat: THREE.PointsMaterial;
      lineMat: THREE.LineBasicMaterial;
    };
    if (mats) {
      mats.coreMat.size = 0.13 + pulse * 0.05;
      mats.haloMat.opacity = 0.18 + pulse * 0.22;
      mats.lineMat.opacity = 0.12 + pulse * 0.18;
    }

    if (dive) {
      diveT.current = Math.min(diveT.current + delta, DIVE_DURATION);
      const e = easeInOutCubic(diveT.current / DIVE_DURATION);
      camera.position.z = 5.6 - e * 5.35;
      (camera as THREE.PerspectiveCamera).fov = 50 + e * 34;
      (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
      if (diveT.current >= DIVE_DURATION && !fired.current) {
        fired.current = true;
        onArrive?.();
      }
    }
  });

  return null;
}
