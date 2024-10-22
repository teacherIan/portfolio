import { useGLTF, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import {
  InstancedRigidBodies,
  CylinderCollider,
  RigidBody,
  Physics,
} from '@react-three/rapier';
import { useMemo } from 'react';

export default function ILoader({ xOffset }) {
  const cubesCount = 200;
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      instances.push({
        key: 'instance_' + i,
        position: [
          (Math.random() - 0.5) * 2 + xOffset,
          200 + i * 5,
          (Math.random() - 0.5) * 2,
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
        colliders="cuboid"
      >
        <instancedMesh args={[null, null, cubesCount]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#7C9EB2" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
