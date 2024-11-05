import { Text } from '@react-three/drei';

export default function CertText() {
  return (
    <Text
      rotation={[Math.PI / 2, Math.PI, -Math.PI / 10]}
      scale={5}
      position={[-25, -9.25, -38]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {'Certifications\nCISSP\nCCNA\nAWS Solutions Architect\nSecurity+ '}
    </Text>
  );
}
