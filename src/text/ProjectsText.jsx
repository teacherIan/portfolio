import { Text } from '@react-three/drei';
import { useControls } from 'leva';

export default function ProjectsText() {
  const x = window.innerWidth < 1400 ? -26 : 60;
  const z = window.innerWidth < 1400 ? -124 : -79;
  const { positionX, positionY, positionZ, rotation } = useControls(
    'projectsText',
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
    <Text
      rotation={[Math.PI / 2, Math.PI, 0]}
      scale={7}
      position={[positionX, -9.25, positionZ]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {`Projects \n (Click to View)`}
    </Text>
  );
}
