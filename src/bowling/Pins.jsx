import Pin from './Pin';
import { useControls } from 'leva';

export default function Pins() {
  const { positionX, positionY, positionZ, rotation } = useControls('Pins', {
    positionX: {
      value: 154.2,
      step: 0.01,
      min: -200,
      max: 200,
    },
    positionY: {
      value: -3.9,
      step: 0.01,
      min: -100,
      max: 100,
    },
    positionZ: {
      value: -16,
      step: 0.01,
      min: -100,
      max: 100,
    },
    rotation: {
      value: -1.5,
      min: -Math.PI / 2,
      max: Math.PI / 2,
      step: 0.01,
    },
  });

  return (
    <group position={[positionX, positionY, positionZ]}>
      <Pin loc={[-70, -8, 0]} />

      <Pin loc={[-74, -8, -2.5]} />
      <Pin loc={[-74, -8, 2.5]} />

      <Pin loc={[-78, -8, -5]} />
      <Pin loc={[-78, -8, 0]} />
      <Pin loc={[-78, -8, 5]} />

      <Pin loc={[-83, -8, -10]} />
      <Pin loc={[-83, -8, -6]} />
      <Pin loc={[-83, -8, 0]} />
      <Pin loc={[-83, -8, 6]} />
      <Pin loc={[-83, -8, 10]} />
    </group>
  );
}
