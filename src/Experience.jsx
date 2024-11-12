import {
  PresentationControls,
  useGLTF,
  OrbitControls,
  Sky,
  SoftShadows,
  Grid,
  useDetectGPU,
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
import Walls from './Walls';

export default function Experience({
  joystickX,
  joystickY,
  leftButtonState,
  rightButtonState,
  upButtonState,
  downButtonState,
}) {
  const useGPU = useDetectGPU();
  return (
    <>
      <PresentationControls
        enabled={!useGPU.isMobile} // the controls can be disabled by setting this to false
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={{ mass: 4, tension: 100 }} // Snap-back to center (can also be a spring config)
        speed={0.1} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[0, 0]} // Vertical limits
        azimuth={[-Math.PI / 40, Math.PI / 40]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <Physics debug={false} gravity={[0, -20, 0]}>
          <Player
            joystickX={joystickX}
            joystickY={joystickY}
            leftButtonState={leftButtonState}
            rightButtonState={rightButtonState}
            upButtonState={upButtonState}
            downButtonState={downButtonState}
          />
          <Pins />
          <BookShelf loc={[-45, 0, -45]} />
          <FullScene />
          {/* <OrbitControls makeDefault /> */}
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
          <Walls />
        </Physics>
        <CertText />
        {/* <ContactText /> */}
        <Grid
          position={[0, -9, 0]}
          args={[50, 50]}
          cellColor="white"
          cellThickness={1}
          infiniteGrid
          fadeDistance={window.innerWidth < 1400 ? 700 : 500}
          sectionSize={100}
          cellSize={50}
          sectionColor={'#ffffff'}
        />
      </PresentationControls>
    </>
  );
}
