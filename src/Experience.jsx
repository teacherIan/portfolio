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
import Dfw from './Dfw';
import Ball from './ball/Ball';
import Cannon from './Shooter/Cannon';
import Pins from './bowling/Pins';
import Pin from './bowling/Pin';
import BookShelf from './BookShelf';
import ControlsText from './text/controlsText/ControlsText';
import Player from './Player';

export default function Experience() {
  return (
    <>
      <Physics debug={false} gravity={[0, -12, 0]}>
        <Player />
        <Pins />
        {/* <Cannon /> */}
        <BookShelf loc={[-45, 0, -45]} />
        {/* <BookShelf loc={[-45, 0, -50]} /> */}
        <FullScene />
        <OrbitControls makeDefault />
        <Lights />
        <Floor />
        <MainLoader />
        {/* <Cissp /> */}
        {/* <CCNA /> */}
        {/* <Aws /> */}
        <ControlsText />
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
