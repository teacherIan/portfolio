import { useGLTF, OrbitControls, Sky, SoftShadows } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Floor from './Floor';
import FullScene from './FullScene';
import MainLoader from './MainLoader';
import Cissp from './Cissp';
import CCNA from './CCNA';
import Aws from './Aws';
import CertText from './CertText';
import Linkedin from './Linkedin';

export default function Experience() {
  return (
    <>
      {/* <Sky /> */}
      <Physics debug={false} gravity={[0, -9, 0]}>
        <FullScene />
        <OrbitControls makeDefault />
        <Lights />
        <Floor />
        <MainLoader />
        <Cissp />
        <CCNA />\
        <Aws />
        <Linkedin />
      </Physics>
      <CertText />
    </>
  );
}
