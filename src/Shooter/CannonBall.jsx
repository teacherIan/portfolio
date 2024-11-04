import { useRef, useEffect } from 'react';
import { RigidBody } from '@react-three/rapier';
import { useThree } from '@react-three/fiber';

export default function CannonBall({}) {
  const { camera } = useThree();

  let cameraPosition = camera.position.toArray();

  const x = (window.clientX / window.innerWidth) * 2 - 1;
  const y = -(window.clientY / window.innerHeight) * 2 + 1;
  console.log(x);

  cameraPosition = [
    cameraPosition[0] + x,
    cameraPosition[1] + y,
    cameraPosition[2],
  ];

  return (
    <RigidBody
      colliders="ball"
      type="dynamic"
      linearVelocity={[0, 0, 150]}
      position={cameraPosition}
    >
      <mesh castShadow>
        <sphereGeometry args={[1]} /> <meshNormalMaterial />
      </mesh>
    </RigidBody>
  );
}
