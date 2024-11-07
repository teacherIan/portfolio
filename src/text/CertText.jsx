import { Text } from '@react-three/drei';

export default function CertText() {
  return (
    <Text
      rotation={[Math.PI / 2, Math.PI, -Math.PI / 10]}
      scale={7}
      position={[-35, -9.25, -45]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {'Certifications\nCISSP\nCCNA\nAWS Solutions Architect\nSecurity+ '}
    </Text>
  );
}
