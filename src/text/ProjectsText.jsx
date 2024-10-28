import { Text } from '@react-three/drei';

export default function ProjectsText() {
  return (
    <Text
      rotation={[Math.PI / 2, Math.PI, -Math.PI / 10]}
      scale={5}
      position={[50, -9.2, -20]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Projects
    </Text>
  );
}
