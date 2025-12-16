import { PresentationControls, Grid } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Floor from './Floor';
import FullScene from './FullScene';
import MainLoader from './MainLoader';
import CertText from './text/CertText';
import GitHubMesh from './contactAsMesh/GitHubMesh';
import GoogleAsMesh from './contactAsMesh/GoogleAsMesh';
import LinkedinAsMesh from './contactAsMesh/LinkedinAsMesh';
import ProjectsText from './text/ProjectsText';
import Dfw from './Dfw';
import Ball from './ball/Ball';
import Pins from './bowling/Pins';
import BookShelf from './BookShelf';
import ControlsText from './text/controlsText/ControlsText';
import Player from './Player';
import Walls from './Walls';
import Jump from './Jump';
import { useIsSmallScreen } from './hooks/useWindowSize';
import { PHYSICS, GRID } from './config/constants';

export default function Experience({ joystickX, joystickY }) {
  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      <PresentationControls
        enabled={false}
        global={false}
        cursor={true}
        snap={{ mass: 4, tension: 100 }}
        speed={0.1}
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[0, 0]}
        azimuth={[-Math.PI / 40, Math.PI / 10]}
        config={{ mass: 1, tension: 170, friction: 26 }}
      >
        <Physics debug={false} gravity={PHYSICS.GRAVITY}>
          <Player joystickX={joystickX} joystickY={joystickY} />
          <Pins />
          <BookShelf loc={[-45, -100, -45]} />
          <FullScene />
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
          <Jump />
        </Physics>
        <CertText />
        <Grid
          position={GRID.POSITION}
          args={GRID.ARGS}
          cellColor={GRID.CELL_COLOR}
          cellThickness={GRID.CELL_THICKNESS}
          infiniteGrid
          fadeDistance={
            isSmallScreen ? GRID.FADE_DISTANCE_MOBILE : GRID.FADE_DISTANCE_DESKTOP
          }
          sectionSize={GRID.SECTION_SIZE}
          cellSize={GRID.CELL_SIZE}
          sectionColor={GRID.SECTION_COLOR}
        />
      </PresentationControls>
    </>
  );
}
