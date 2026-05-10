import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Island from "./Island";
import Lights from "./Lights";
import Portal from "./Portal";
import type { rotate } from "three/src/nodes/utils/RotateNode.js";

export default function Experience() {
  return (
    <Canvas
        camera={{ position: [8, 3, 1], fov: 35 }}
        style={{ width: "100%", height: "100%", background: "#0B0F14" }}
    >
        <color attach="background" args={["#0B0F14"]} />
        <fog attach="fog" args={["#0B0F14", 10, 35]} />
        <Suspense fallback={null}>
            <Lights />
            <Island />
            <Portal position={[1, 1.6, 0.2]} rotation={[0, Math.PI / 4, 0]} label="Arena" />
            <Portal position={[0.8, 1.6, 0.7]} rotation={[0, Math.PI / 2, 0]} label="Dev Core" />
            <Portal position={[1, 1.6, 1.2]} rotation={[0, (3 * Math.PI) / 4, 0]} label="Gallery" />
        </Suspense>

        <OrbitControls
            target={[0, 0, 0]}
            enablePan={false}
            minDistance={4}
            maxDistance={10}
            minPolarAngle={0.5}
            maxPolarAngle={1.2}
        />
    </Canvas>
  );
}