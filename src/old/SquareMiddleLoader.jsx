import { InstancedRigidBodies } from '@react-three/rapier';
import { useMemo } from 'react';

export default function SquareLeftLoader({ xOffset }) {
  const cubesCount = 100; //480
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      const options = [-44, -29, -20];
      const choice = Math.floor(Math.random() * 3);

      instances.push({
        key: 'instance_' + i,

        position: [
          (Math.random() - 0.5) * 2 + options[choice],
          20 + i * 4,
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
          <sphereGeometry args={[1.3]} />
          <meshStandardMaterial color="#8B0000" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
