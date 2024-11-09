import { Text } from '@react-three/drei';

export default function ContactText() {
  return (
    <Text
      rotation={[Math.PI / 2, Math.PI, 0]}
      scale={7}
      position={[20, -9.25, -12]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Contact
    </Text>
  );
}
