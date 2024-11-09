import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Suspense, useState, useEffect } from 'react';
import { KeyboardControls, Grid } from '@react-three/drei';
import { Leva } from 'leva';

import {
  PiArrowFatDownThin,
  PiArrowFatLeftThin,
  PiArrowFatRightThin,
  PiArrowFatUpThin,
} from 'react-icons/pi';

import Loading from './Loading.jsx';

export default function App() {
  const [leftButtonState, setLeftButtonState] = useState(false);
  const [rightButtonState, setRightButtonState] = useState(false);
  const [upButtonState, setUpButtonState] = useState(false);
  const [downButtonState, setDownButtonState] = useState(false);

  // const handlePressStart = (direction) => {
  //   switch (direction) {
  //     case 'left':
  //       setLeftButtonState(true);
  //       break;
  //     case 'right':
  //       setRightButtonState(true);
  //       break;
  //     case 'up':
  //       setUpButtonState(true);
  //       break;
  //     case 'down':
  //       setDownButtonState(true);
  //       break;
  //   }
  // };

  // const handlePressEnd = (direction) => {
  //   switch (direction) {
  //     case 'left':
  //       setLeftButtonState(false);
  //       break;
  //     case 'right':
  //       setRightButtonState(false);
  //       break;
  //     case 'up':
  //       setUpButtonState(false);
  //       break;
  //     case 'down':
  //       setDownButtonState(false);
  //       break;
  //   }
  // };

  return (
    <>
      <Leva hidden />

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
      <Canvas
        camera={{
          // 82
          fov: window.innerWidth < 1400 ? 70 : 35,
          near: 1,
          far: 2000,
          position: [
            window.innerWidth < 1400 ? 0 : 0,
            window.innerWidth < 1400 ? 100 : 100,
            window.innerWidth < 1400 ? -220 : -220,
          ],
        }}
      >
        <fog attach="fog" args={['#50747c', 20, 500]} />
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
