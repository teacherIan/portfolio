import { Text } from '@react-three/drei';

export default function ProjectsText() {
  return (
    <Text
      rotation={[Math.PI / 2, Math.PI, -Math.PI / 10]}
      scale={7}
      position={[60, -9.25, -48]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {`Projects \n (Click to View)`}
    </Text>
  );
}
