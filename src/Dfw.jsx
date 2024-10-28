import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import GitHubObj from '../src/assets/table_new.glb';
import { Suspense } from 'react';

export default function Dfw() {
  const github = useGLTF(GitHubObj);
  return (
    <RigidBody
      restitution={0.5}
      rotation={[0, Math.PI * -1.1, 0]}
      type="dynamic"
      scale={10}
      position={[62, 10, -20]}
      colliders="cuboid"
    >
      <Suspense
        fallback=<mesh>
          {' '}
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      >
        <primitive object={github.scene} scale={2} />
      </Suspense>
    </RigidBody>
  );
}
