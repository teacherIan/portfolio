import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Canvas
    // shadows
    camera={{
      fov: window.innerWidth < 1400 ? 40 : 40,
      near: 1,
      far: 2000,
      position: [
        window.innerWidth < 1400 ? -40 : -10,
        window.innerWidth < 1400 ? 30 : 20,
        window.innerWidth < 1400 ? -270 : -110,
      ],
    }}
  >
    <Experience />
  </Canvas>
);
