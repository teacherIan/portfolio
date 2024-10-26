import { useGLTF, OrbitControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Floor from './Floor';
import FullScene from './FullScene';
import MainLoader from './MainLoader';

export default function Experience() {
  return (
    <>
      <Physics debug={false} gravity={[0, -7, 0]}>
        <FullScene />
        <OrbitControls makeDefault />
        <Lights />
        <Floor />
        {/* <MainLoader /> */}
      </Physics>
    </>
  );
}
