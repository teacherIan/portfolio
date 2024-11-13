import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';

export default function Jump() {
  const twister = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const eulerRotation = new THREE.Euler(0, time * 3, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    twister.current.setNextKinematicRotation(quaternionRotation);
  });

  return (
    <>
      <RigidBody //behind
        type="fixed"
        position={[0, -10, 150]}
        rotation={[Math.PI / 7, 0, 0]}
        friction={0}
      >
        <mesh>
          <meshStandardMaterial />
          <boxGeometry args={[40, 10, 40]} />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={twister}
        //rotator
        type="kinematicPosition"
        position={[20, -10, 100]}
        rotation={[0, Math.PI / 3, 0]}
      >
        <mesh>
          <meshStandardMaterial />
          <boxGeometry args={[4, 10, 60]} />
        </mesh>
      </RigidBody>
    </>
  );
}
