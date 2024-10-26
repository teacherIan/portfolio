import { InstancedRigidBodies } from '@react-three/rapier';
import { useMemo } from 'react';

export default function MainLoader({ xOffset }) {
  const cubesCount = 600; //480
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      const options = [40, 6, -44, -29, -20, 6, 6, 40];
      const choice = Math.floor(Math.random() * 8);

      instances.push({
        key: 'instance_' + i,

        position: [
          (Math.random() - 0.5) * 3 + options[choice],
          20 + i * 3,
          (Math.random() - 0.5) * 3,
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
          <sphereGeometry args={[1.5]} />
          <meshStandardMaterial color="#7C9EB2" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
