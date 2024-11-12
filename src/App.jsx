import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Suspense, useState, useEffect, useRef } from 'react';
import { KeyboardControls, Grid, useDetectGPU } from '@react-three/drei';
import { Leva } from 'leva';

import {
  PiArrowFatDownThin,
  PiArrowFatLeftThin,
  PiArrowFatRightThin,
  PiArrowFatUpThin,
} from 'react-icons/pi';

import { Joystick } from 'react-joystick-component';

import Loading from './Loading.jsx';

export default function App() {
  const smallScreen = window.innerWidth < 1400;
  const useGPU = useDetectGPU();
  const [leftButtonState, setLeftButtonState] = useState(false);
  const [rightButtonState, setRightButtonState] = useState(false);
  const [upButtonState, setUpButtonState] = useState(false);
  const [downButtonState, setDownButtonState] = useState(false);

  const joystickX = useRef(0);
  const joystickY = useRef(0);

  const handlePressStart = (direction) => {
    switch (direction) {
      case 'left':
        setLeftButtonState(true);
        break;
      case 'right':
        setRightButtonState(true);
        break;
      case 'up':
        setUpButtonState(true);
        break;
      case 'down':
        setDownButtonState(true);
        break;
    }
  };

  const handlePressEnd = (direction) => {
    switch (direction) {
      case 'left':
        setLeftButtonState(false);
        break;
      case 'right':
        setRightButtonState(false);
        break;
      case 'up':
        setUpButtonState(false);
        break;
      case 'down':
        setDownButtonState(false);
        break;
    }
  };

  function handleJoystickMove(e) {
    joystickX.current = e.x;
    joystickY.current = e.y;
  }

  function handleJoystickStop() {
    joystickX.current = 0;
    joystickY.current = 0;
  }

  return (
    <>
      <Leva hidden />
      <div className="joystick">
        <Joystick
          className
          size={100}
          sticky={false}
          baseColor="#dddddd33"
          stickColor="#50747c"
          move={handleJoystickMove}
          stop={handleJoystickStop}
          // pos={ x: 100, y: 100 }
        />
      </div>

      {/* {useGPU.isMobile ? (
        <div className="container">
          <div
            onTouchStart={() => handlePressStart('left')}
            onTouchEnd={() => handlePressEnd('left')}
            className="arrow"
          >
            <PiArrowFatLeftThin />
          </div>
          <div
            onTouchStart={() => handlePressStart('right')}
            onTouchEnd={() => handlePressEnd('right')}
            className="arrow"
          >
            <PiArrowFatRightThin />
          </div>
          <div
            onTouchStart={() => handlePressStart('up')}
            onTouchEnd={() => handlePressEnd('up')}
            className="arrow"
          >
            <PiArrowFatUpThin />
          </div>
          <div
            onTouchStart={() => handlePressStart('down')}
            onTouchEnd={() => handlePressEnd('down')}
            className="arrow"
          >
            <PiArrowFatDownThin />
          </div>
        </div>
      ) : null} */}

      <Canvas
        camera={{
          // 82
          fov: window.innerWidth < 1400 ? 30 : 35,
          near: 1,
          far: 2000,
          position: [
            window.innerWidth < 1400 ? 0 : 0,
            window.innerWidth < 1400 ? 300 : 100,
            window.innerWidth < 1400 ? -500 : -220,
          ],
        }}
      >
        <fog attach="fog" args={['#50747c', 20, smallScreen ? 1000 : 500]} />
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
            <Experience
              joystickX={joystickX}
              joystickY={joystickY}
              leftButtonState={leftButtonState}
              rightButtonState={rightButtonState}
              upButtonState={upButtonState}
              downButtonState={downButtonState}
            />
          </KeyboardControls>
        </Suspense>
      </Canvas>
    </>
  );
}
