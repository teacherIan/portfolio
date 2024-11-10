import { Text } from '@react-three/drei';

export default function ProjectsText() {
  const offset = window.innerWidth < 1000 ? -30 : 0;
  return (
    <Text
      rotation={[Math.PI / 2, Math.PI, 0]}
      scale={7}
      position={[60 + offset * 1.5, -9.25, -79 + offset * 1.5]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {`Projects \n (Click to View)`}
    </Text>
  );
}
