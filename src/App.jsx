import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Suspense, useRef, useMemo } from 'react';
import { KeyboardControls } from '@react-three/drei';
import { Leva } from 'leva';
import joystickArt from '../src/assets/joystick.png';
import { Analytics } from '@vercel/analytics/react';
import { Joystick } from 'react-joystick-component';
import Loading from './Loading.jsx';
import { useIsSmallScreen, useIsMobile } from './hooks/useWindowSize';
import { CAMERA, FOG, JOYSTICK } from './config/constants';

export default function App() {
  const isSmallScreen = useIsSmallScreen();
  const isMobile = useIsMobile();

  const joystickX = useRef(0);
  const joystickY = useRef(0);

  const handleJoystickMove = (e) => {
    joystickX.current = e.x;
    joystickY.current = e.y;
  };

  const handleJoystickStop = () => {
    joystickX.current = 0;
    joystickY.current = 0;
  };

  const cameraPosition = useMemo(
    () => (isSmallScreen ? CAMERA.POSITION_MOBILE : CAMERA.POSITION_DESKTOP),
    [isSmallScreen]
  );

  const fogFar = useMemo(
    () => (isSmallScreen ? FOG.FAR_MOBILE : FOG.FAR_DESKTOP),
    [isSmallScreen]
  );

  return (
    <>
      <Analytics />
      <Leva hidden={import.meta.env.PROD} />
      <div className="joystick">
        <Joystick
          size={isMobile ? JOYSTICK.SIZE_MOBILE : JOYSTICK.SIZE_DESKTOP}
          sticky={false}
          baseColor={JOYSTICK.BASE_COLOR}
          stickColor={JOYSTICK.STICK_COLOR}
          move={handleJoystickMove}
          stop={handleJoystickStop}
          stickImage={joystickArt}
        />
      </div>

      <Canvas
        camera={{
          fov: CAMERA.FOV,
          near: CAMERA.NEAR,
          far: CAMERA.FAR,
          position: cameraPosition,
        }}
      >
        <fog attach="fog" args={[FOG.COLOR, FOG.NEAR, fogFar]} />
        <Suspense fallback={<Loading />}>
          <KeyboardControls
            map={[
              { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
              { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
              { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
              { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
              { name: 'jump', keys: ['Space'] },
            ]}
          >
            <Experience joystickX={joystickX} joystickY={joystickY} />
          </KeyboardControls>
        </Suspense>
      </Canvas>
    </>
  );
}
