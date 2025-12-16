import { InstancedRigidBodies } from '@react-three/rapier';
import { useMemo, useRef } from 'react';
import { useIsMobile } from './hooks/useWindowSize';
import { MAIN_LOADER } from './config/constants';

export default function MainLoader() {
  const rigidBodies = useRef();
  const meshes = useRef();
  const isMobile = useIsMobile();

  const cubesCount = isMobile
    ? MAIN_LOADER.CUBES_COUNT_MOBILE
    : MAIN_LOADER.CUBES_COUNT_DESKTOP;

  const instances = useMemo(() => {
    const instances = [];
    const options = [40, 6, -44, -29, -20, 6, 6, 40];

    for (let i = 0; i < cubesCount; i++) {
      const choice = Math.floor(Math.random() * options.length);

      instances.push({
        key: 'instance_' + i,
        position: [
          (Math.random() - 0.5) * 3 + options[choice],
          50 + i * 2,
          (Math.random() - 0.5) * 3,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }

    return instances;
  }, [cubesCount]);

  return (
    <>
      <InstancedRigidBodies
        restitution={MAIN_LOADER.RESTITUTION}
        instances={instances}
        colliders="ball"
        ref={rigidBodies}
      >
        <instancedMesh ref={meshes} castShadow args={[null, null, cubesCount]}>
          <sphereGeometry args={[MAIN_LOADER.SPHERE_RADIUS]} />
          <meshMatcapMaterial color={'#ffffff'} />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
