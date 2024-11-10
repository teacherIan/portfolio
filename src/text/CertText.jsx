import { Text } from '@react-three/drei';

export default function CertText() {
  const offset = window.innerWidth < 1000 ? 25 : 0;
  return (
    <group>
      <Text
        rotation={[Math.PI / 2, Math.PI, 0]}
        scale={7}
        position={[-40 + offset, -9.25, -60]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {'Certifications\nCISSP\nCCNA\nAWS Solutions Architect\nSecurity+ '}
      </Text>
    </group>
  );
}
