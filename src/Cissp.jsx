import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function Cissp() {
  const CISSP = useGLTF('./cissp.glb');
  return (
    <RigidBody
      restitution={10}
      rotation={[-Math.PI / 2, Math.PI, Math.PI / 6]}
      type="fixed"
      scale={53}
      position={[-25, -1.2, -28]}
      colliders="cuboid"
    >
      <primitive object={CISSP.scene} scale={0.25} />
    </RigidBody>
  );
}
