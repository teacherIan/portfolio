import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function Cissp() {
  const CISSP = useGLTF('./cisspTwo.glb');
  return (
    <RigidBody
      restitution={0}
      rotation={[0, 0, 0]}
      type="fixed"
      scale={100}
      position={[2, 5, -30]}
      colliders="trimesh"
    >
      <primitive object={CISSP.scene} scale={0.25} />
    </RigidBody>
  );
}
