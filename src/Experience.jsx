import { useGLTF, OrbitControls, Sky, SoftShadows } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Floor from './Floor';
import FullScene from './FullScene';
import MainLoader from './MainLoader';
import Cissp from './certs/Cissp';
import CCNA from './certs/CCNA';
import Aws from './certs/Aws';
import CertText from './text/CertText';
import Linkedin from './contact/Linkedin';
import ContactText from './text/ContactText';
import GitHub from './contact/Github';
import Google from './contact/Google';
import GitHubMesh from './contactAsMesh/GitHubMesh';
import GoogleAsMesh from './contactAsMesh/GoogleAsMesh';
import LinkedinAsMesh from './contactAsMesh/LinkedinAsMesh';
import ProjectsText from './text/ProjectsText';
import SplatComponent from './SplatComponent';
import Dfw from './Dfw';
import Ball from './ball/Ball';

export default function Experience() {
  return (
    <>
      <Physics debug={false} gravity={[0, -10, 0]}>
        <FullScene />
        <OrbitControls makeDefault />
        <Lights />
        <Floor />
        <MainLoader />
        <Cissp />
        <CCNA />\
        <Aws />
        <GoogleAsMesh />
        <GitHubMesh />
        <LinkedinAsMesh />
        <ProjectsText />
        <Dfw />
        <Ball />
      </Physics>

      <CertText />
      <ContactText />
    </>
  );
}
