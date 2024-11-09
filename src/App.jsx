import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Suspense, useState, useEffect } from 'react';
import { KeyboardControls, Grid } from '@react-three/drei';
import { Leva } from 'leva';

import Loading from './Loading.jsx';

export default function App() {
  return (
    <>
      <Leva />
      <Canvas
        camera={{
          fov: window.innerWidth < 1400 ? 70 : 35,
          near: 1,
          far: 2000,
          position: [
            window.innerWidth < 1400 ? 0 : 0,
            window.innerWidth < 1400 ? 30 : 100,
            window.innerWidth < 1400 ? -120 : -230,
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
            <Experience />
          </KeyboardControls>
        </Suspense>
      </Canvas>
    </>
  );
}
