import { InstancedRigidBodies } from '@react-three/rapier';
import { useMemo } from 'react';

export default function SquareLeftLoader({ xOffset }) {
  const cubesCount = 100;
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
        restitution={0.3}
        instances={instances}
        colliders="ball"
      >
        <instancedMesh castShadow receiveShadow args={[null, null, cubesCount]}>
          <sphereGeometry args={[1.5]} />
          <meshStandardMaterial color="lightblue" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
