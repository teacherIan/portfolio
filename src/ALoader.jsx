import { useGLTF, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import {
  InstancedRigidBodies,
  CylinderCollider,
  RigidBody,
  Physics,
} from '@react-three/rapier';
import { useMemo } from 'react';

export default function Loader({ xOffset }) {
  const cubesCount = 450;
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      instances.push({
        key: 'instance_' + i,
        position: [
          (Math.random() - 0.5) * 4 + xOffset,
          20 + i * 4,
          (Math.random() - 0.5) * 4,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }

    return instances;
  }, []);
  return (
    <>
      <InstancedRigidBodies
        restitution={0}
        instances={instances}
        colliders="ball"
      >
        <instancedMesh args={[null, null, cubesCount]}>
          <sphereGeometry args={[1.2]} />
          <meshStandardMaterial shininess={100} color="#C3EB78" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
