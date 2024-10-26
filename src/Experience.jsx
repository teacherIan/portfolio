import { useGLTF, OrbitControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Floor from './Floor';
import FullScene from './FullScene';
import Cissp from './Cissp';
import CCNA from './CCNA';
import Aws from './Aws';
import CertText from './CertText';
import Linkedin from './Linkedin';
import MainLoader from './MainLoader';

export default function Experience() {
  return (
    <>
      <Physics debug={false} gravity={[0, -7, 0]}>
        <FullScene />
        <OrbitControls makeDefault />
        <Lights />
        <Floor />
        <MainLoader />

        {/* <Cissp /> */}
        {/* <CCNA /> */}
        {/* <Aws /> */}
        {/* <Linkedin /> */}
      </Physics>

      {/* <CertText /> */}
    </>
  );
}
