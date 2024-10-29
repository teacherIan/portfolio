import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import CCNAObj from '../assets/CCNA.glb';

export default function CCNA() {
  const myObj = useGLTF(CCNAObj);
  return (
    <RigidBody
      restitution={0.3}
      rotation={[Math.PI / 2, 0, Math.PI * 1]}
      type="dynamic"
      scale={30}
      position={[-5, 2, -26]}
      colliders="cuboid"
    >
      <primitive object={myObj.scene} scale={0.25} />
    </RigidBody>
  );
}
