import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

export default function Island() {
  const model = useGLTF("/models/MainIsland.glb");
  const islandRef = useRef<Group>(null);

  useFrame((state) => {
    if (!islandRef.current) return;

    islandRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={islandRef} position={[0, 0, 0]}>
      <primitive object={model.scene} scale={2.5}  position={[1.1 , 1.1, 0.8]} />
    </group>
  );
}