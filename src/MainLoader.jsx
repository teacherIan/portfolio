import { InstancedRigidBodies, useRapier } from '@react-three/rapier';
import { useMemo, useRef, useEffect, useState } from 'react';
import matCap from './assets/matCap.png';
import { useMatcapTexture } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import mapImport from './assets/map.png';
import trialImport from './assets/trialMap.jpg';
import * as RAPIER from '@react-three/rapier';

export default function MainLoader({ xOffset }) {
  const cubesCount = 700; //480
  const rigidBodies = useRef();
  const rapier = useRapier();
  const meshes = useRef();
  const [currentBody, setCurrentBody] = useState(0);
  const [startInterval, setStartInterval] = useState(false);

  // const [matcapTexture] = useMatcapTexture(170); //31 40 45 'D04444_AF2F2F_8B2424_9B2C2C'
  // const matcapTexture = useLoader(TextureLoader, trialImport); // Update with your matcap path

  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      const options = [40, 6, -44, -29, -20, 6, 6, 40];
      const choice = Math.floor(Math.random() * 8);

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
  }, []);
  return (
    <>
      <InstancedRigidBodies
        restitution={0.1}
        instances={instances}
        colliders="ball"
        ref={rigidBodies}
      >
        <instancedMesh ref={meshes} castShadow args={[null, null, cubesCount]}>
          <sphereGeometry args={[1.55]} />
          <meshMatcapMaterial color={'#ffffff'} />
        </instancedMesh>
      </InstancedRigidBodies>
    </>
  );
}
