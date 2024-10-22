import { InstancedRigidBodies } from '@react-three/rapier';
import { useMemo } from 'react';

export default function SquareRightLoader({ xOffset }) {
  const cubesCount = 130;
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      instances.push({
        key: 'instance_' + i,
        position: [
          (Math.random() - 0.5) * 2 + xOffset,
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
        colliders="cuboid"
      >
        <instancedMesh args={[null, null, cubesCount]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#F26A8D" />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
