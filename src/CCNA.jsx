import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import CCNAObj from './assets/CCNA.glb';

export default function CCNA() {
  const myObj = useGLTF(CCNAObj);
  return (
    <RigidBody
      restitution={10}
      rotation={[Math.PI / 2, 0, Math.PI * 1.1]}
      type="fixed"
      scale={16}
      position={[-20, -5.2, -26]}
      colliders="cuboid"
    >
      <primitive object={myObj.scene} scale={0.25} />
    </RigidBody>
  );
}
