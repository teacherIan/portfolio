import { useGLTF, OrbitControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Floor from './Floor';
import FullScene from './FullScene';
import MainLoader from './MainLoader';
import Cissp from './Cissp';

export default function Experience() {
  return (
    <>
      <Physics debug={false} gravity={[0, -9, 0]}>
        <FullScene />
        <OrbitControls makeDefault />
        <Lights />
        <Floor />
        <MainLoader />
        <Cissp />
      </Physics>
    </>
  );
}
