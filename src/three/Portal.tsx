import { Text } from "@react-three/drei";

type PortalProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  label: string;
};

export default function Portal({
  position,
  rotation = [0, 0, 0],
  label,
}: PortalProps) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <torusGeometry args={[0.10, 0.025, 16, 64]} />
        <meshStandardMaterial
          color="#2CB5A0"
          emissive="#2CB5A0"
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh position={[0, 0, -0.05]}>
        <circleGeometry args={[0.08, 48]} />
        <meshStandardMaterial
          color="#2CB5A0"
          transparent
          opacity={0.25}
          emissive="#2CB5A0"
          emissiveIntensity={0.8}
        />
      </mesh>

     <Text
        position={[0, -0.20, 0]}
        fontSize={0.08}
        color="#F3F4F6"
        anchorX="center"
        anchorY="middle"
        >
        {label}
    </Text>
    </group>
  );
}