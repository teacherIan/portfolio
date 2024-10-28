import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import AWSObj from '../assets/aws.glb';

export default function Aws() {
  const aws = useGLTF(AWSObj);
  return (
    <RigidBody
      restitution={1}
      rotation={[Math.PI / 2, 0, Math.PI * 1.2]}
      type="dynamic"
      scale={30}
      position={[-37, 2, -35]}
      colliders="cuboid"
    >
      <primitive object={aws.scene} scale={0.25} />
    </RigidBody>
  );
}
