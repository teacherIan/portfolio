import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import LinkedInObj from './assets/linkedin.glb';

export default function Linkedin() {
  const linkedIn = useGLTF(LinkedInObj);
  return (
    <RigidBody
      restitution={10}
      rotation={[0, Math.PI, 0]}
      type="fixed"
      scale={10}
      position={[30, -8.5, -40]}
      colliders="cuboid"
    >
      <primitive object={linkedIn.scene} scale={0.25} />
    </RigidBody>
  );
}
