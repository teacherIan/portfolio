import { InstancedRigidBodies } from '@react-three/rapier';
import { useMemo } from 'react';
import matCap from './assets/matCap.png';
import { useMatcapTexture } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import mapImport from './assets/map.png';
import trialImport from './assets/trialMap.jpg';

export default function MainLoader({ xOffset }) {
  const [matcapTexture] = useMatcapTexture('D04444_AF2F2F_8B2424_9B2C2C'); //31 40 45
  // const matcapTexture = useLoader(TextureLoader, trialImport); // Update with your matcap path

  const cubesCount = 520; //480
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
        restitution={0.1}
        instances={instances}
        colliders="ball"
      >
        <instancedMesh castShadow args={[null, null, cubesCount]}>
          <sphereGeometry args={[1.6]} />
          <meshMatcapMaterial
            // iridescence={1}
            // metalness={0.7}
            // clearcoat={1}
            // color="#dd1F1F"
            matcap={matcapTexture}
          />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
