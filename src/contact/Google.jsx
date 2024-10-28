import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import GoogleObj from '../assets/google.glb';
import { Outlines } from '@react-three/drei';

export default function Google() {
  const google = useGLTF(GoogleObj);
  return (
    <RigidBody
      restitution={0.5}
      rotation={[0, Math.PI * -1.2, 0]}
      type="dynamic"
      scale={10}
      position={[15, -0, -44]}
      colliders="cuboid"
    >
      <primitive object={google.scene} scale={0.25} />
    </RigidBody>
  );
}
