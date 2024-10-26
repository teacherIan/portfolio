import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function CCNA() {
  const CCNA = useGLTF('./CCNA.glb');
  return (
    <RigidBody
      restitution={10}
      rotation={[Math.PI / 2, 0, Math.PI * 1.1]}
      type="fixed"
      scale={16}
      position={[-20, -5.2, -26]}
      colliders="cuboid"
    >
      <primitive object={CCNA.scene} scale={0.25} />
    </RigidBody>
  );
}
