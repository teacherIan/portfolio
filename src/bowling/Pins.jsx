import Pin from './Pin';
import { useControls } from 'leva';
import { useIsMobile } from '../hooks/useWindowSize';
import { BOWLING_PINS } from '../config/constants';
import { useMemo } from 'react';

const PIN_POSITIONS = [
  [-70, -8, 0],
  [-74, -8, -2.5],
  [-74, -8, 2.5],
  [-78, -8, -5],
  [-78, -8, 0],
  [-78, -8, 5],
  [-83, -8, -10],
  [-83, -8, -6],
  [-83, -8, 0],
  [-83, -8, 6],
  [-83, -8, 10],
];

export default function Pins() {
  const isMobile = useIsMobile();

  const defaultX = isMobile
    ? BOWLING_PINS.POSITION_X_MOBILE
    : BOWLING_PINS.POSITION_X_DESKTOP;
  const defaultZ = isMobile
    ? BOWLING_PINS.POSITION_Z_MOBILE
    : BOWLING_PINS.POSITION_Z_DESKTOP;

  const { positionX, positionY, positionZ } =
    import.meta.env.MODE === 'development'
      ? useControls('Pins', {
          positionX: {
            value: defaultX,
            step: 0.01,
            min: -200,
            max: 200,
          },
          positionY: {
            value: BOWLING_PINS.POSITION_Y,
            step: 0.01,
            min: -100,
            max: 100,
          },
          positionZ: {
            value: defaultZ,
            step: 0.01,
            min: -100,
            max: 100,
          },
        })
      : {
          positionX: defaultX,
          positionY: BOWLING_PINS.POSITION_Y,
          positionZ: defaultZ,
        };

  return (
    <group position={[positionX, positionY, positionZ]}>
      {PIN_POSITIONS.map((pos, index) => (
        <Pin key={index} loc={pos} />
      ))}
    </group>
  );
}
