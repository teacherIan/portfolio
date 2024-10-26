import { InstancedRigidBodies } from '@react-three/rapier';
import { useMemo } from 'react';

export default function ILoader({ xOffset }) {
  const cubesCount = 100; //320
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      instances.push({
        key: 'instance_' + i,
        position: [
          (Math.random() - 0.5) * 2 + xOffset,
          10 + i * 5,
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
        <instancedMesh args={[null, null, cubesCount]}>
          <sphereGeometry args={[1.1]} />
          <meshStandardMaterial color="#7C9EB2" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
