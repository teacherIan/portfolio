import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Suspense, useState, useEffect } from 'react';

import Loading from './Loading.jsx';

export default function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: window.innerWidth < 1400 ? 70 : 40,
          near: 1,
          far: 2000,
          position: [
            window.innerWidth < 1400 ? -50 : 30,
            window.innerWidth < 1400 ? 30 : 70,
            window.innerWidth < 1400 ? -120 : -170,
          ],
        }}
      >
        <fog attach="fog" args={['#50747c', 100, 500]} />
        <Suspense fallback={<Loading />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
