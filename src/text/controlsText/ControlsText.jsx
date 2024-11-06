import { Text, Float } from '@react-three/drei';

export default function ControlsText() {
  return (
    <group position={[30, -109.25, -120]} rotation={[Math.PI / 2, 0, 0]}>
      <Text
        rotation={[0, 0, 0]}
        scale={10}
        position={[-20, 50, -100]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        ◀
      </Text>
      <Text
        rotation={[0, 0, 0]}
        scale={10}
        position={[4, 50, -100]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        ▶
      </Text>
      <Text
        rotation={[0, 0, Math.PI / 2]}
        scale={10}
        position={[-8, 60, -100]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        ▶
      </Text>
      <Text
        rotation={[0, 0, -Math.PI / 2]}
        scale={10}
        position={[-8, 40, -100]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        ▶
      </Text>

      <Text
        fillOpacity={0.5}
        rotation={[0, 0, 0]}
        scale={10}
        position={[-8, 50, -100]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        ⌨
      </Text>
    </group>
  );
}
