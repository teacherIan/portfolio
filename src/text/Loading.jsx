import { Text } from '@react-three/drei';

export default function Loading() {
  return (
    <Text
      rotation={[Math.PI / 2, Math.PI, -Math.PI / 10]}
      scale={20}
      position={[0, 0, 0]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Loading
    </Text>
  );
}
