import { Canvas } from "@react-three/fiber";
import BrainScene from "./BrainScene";

export default function HeroBrain() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <BrainScene
        interactive={true}
        dive={false}
        background={null}
      />
    </Canvas>
  );
}
