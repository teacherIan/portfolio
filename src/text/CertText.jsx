import { Text } from '@react-three/drei';
import { useControls } from 'leva';

export default function CertText() {
  const x = window.innerWidth < 1400 ? 10 : 60;
  const z = window.innerWidth < 1400 ? -175 : -79;
  const { positionX, positionY, positionZ, rotation } = useControls(
    'certText',
    {
      positionX: {
        value: x,
        step: 0.01,
        min: -200,
        max: 200,
      },
      positionY: {
        value: -2.9,
        step: 0.01,
        min: -200,
        max: 200,
      },
      positionZ: {
        value: z,
        step: 0.01,
        min: -200,
        max: 200,
      },
      rotation: {
        value: -1.5,
        min: -Math.PI / 2,
        max: Math.PI / 2,
        step: 0.01,
      },
    }
  );

  return (
    <group>
      <Text
        rotation={[Math.PI / 2, Math.PI, 0]}
        scale={7}
        position={[positionX, -9.25, positionZ]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {'Certifications\nCISSP\nCCNA\nSecurity+\nAWS Solutions Architect'}
      </Text>
    </group>
  );
}
