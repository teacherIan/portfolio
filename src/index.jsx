import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import { Suspense } from 'react';

import Loading from './text/Loading';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Canvas
    // shadows
    camera={{
      fov: window.innerWidth < 1400 ? 70 : 40,
      near: 1,
      far: 2000,
      position: [
        window.innerWidth < 1400 ? -50 : 50,
        window.innerWidth < 1400 ? 30 : 60,
        window.innerWidth < 1400 ? -120 : -110,
      ],
    }}
  >
    <Suspense fallback={<Loading />}>
      <Experience />
    </Suspense>
  </Canvas>
);
