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
  const cubesCount = 420;
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      instances.push({
        key: 'instance_' + i,
        position: [
          (Math.random() - 0.5) * 2 + xOffset,
          500 + i * 5,
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
        colliders="ball"
      >
        <instancedMesh castShadow receiveShadow args={[null, null, cubesCount]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color="#ffffff" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
