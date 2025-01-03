import { useGLTF } from '@react-three/drei';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import LinkedInObj from '../assets/linkedin.glb';

export default function Linkedin() {
  const linkedIn = useGLTF(LinkedInObj);
  return (
    <RigidBody
      collisionGroups={interactionGroups([1], [1])}
      restitution={1}
      rotation={[0, Math.PI, 0]}
      type="dynamic"
      scale={10}
      position={[30, -0, -40]}
      colliders="cuboid"
    >
      <primitive object={linkedIn.scene} scale={0.25} />
    </RigidBody>
  );
}
