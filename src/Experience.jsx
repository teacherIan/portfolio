import { useGLTF, OrbitControls, Sky } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import {
  InstancedRigidBodies,
  CylinderCollider,
  RigidBody,
  Physics,
} from '@react-three/rapier';

import Lights from './Lights';
import Floor from './Floor';
import FullScene from './FullScene';
import SquareLeftLoader from './SquareLeftLoader';
import SquareRightLoader from './SquareRightLoader';
import SquareMiddleLoader from './SquareMiddleLoader';
import ILoader from './ILoader';
import ALoader from './ALoader';

export default function Experience() {
  return (
    <>
      <Physics debug={false} gravity={[0, -9.08, 0]}>
        <FullScene />
        {/* <Perf position="top-left" /> */}
        {/* <Sky /> */}
        <OrbitControls makeDefault />
        <Lights />
        <Floor />
        <ALoader xOffset={6} />
        <ILoader xOffset={40} />
        <SquareRightLoader xOffset={-44} />
        <SquareMiddleLoader xOffset={-29} />
        <SquareLeftLoader xOffset={-20} />
      </Physics>
    </>
  );
}
