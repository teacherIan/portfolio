import { Text } from '@react-three/drei';

export default function ProjectsText() {
  return (
    <Text
      rotation={[Math.PI / 2, Math.PI, 0]}
      scale={7}
      position={[60, -9.25, -75]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {`Projects \n (Click to View)`}
    </Text>
  );
}
