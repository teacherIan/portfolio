import {
  useGLTF,
  OrbitControls,
  Sky,
  SoftShadows,
  Grid,
} from '@react-three/drei';
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

const gridOptions = {
  cellSize: { value: 5, min: 0, max: 10, step: 0.1 },
  cellThickness: { value: 10, min: 0, max: 10, step: 0.1 },
  cellColor: '#6f6f6f',
  sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
  sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
  sectionColor: '#9d4b4b',
  fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
  fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
  // followCamera: false,
  infiniteGrid: true,
};

export default function Experience({
  leftButtonState,
  rightButtonState,
  upButtonState,
  downButtonState,
}) {
  return (
    <>
      <Physics debug={false} gravity={[0, -20, 0]}>
        <Player
          leftButtonState={leftButtonState}
          rightButtonState={rightButtonState}
          upButtonState={upButtonState}
          downButtonState={downButtonState}
        />
        <Pins />
        <BookShelf loc={[-45, 0, -45]} />
        <FullScene />
        <OrbitControls makeDefault />
        <Lights />
        <Floor />
        <MainLoader />
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
      <Grid
        position={[0, -9, 0]}
        args={[50, 50]}
        cellColor="white"
        cellThickness={1}
        infiniteGrid
        fadeDistance={500}
        sectionSize={100}
        cellSize={50}
        sectionColor={'#ffffff'}
      />
    </>
  );
}
