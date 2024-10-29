import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import CISSP from '../assets/cissp_new.glb';

export default function Cissp() {
  const mesh = useGLTF(CISSP);
  return (
    <RigidBody
      restitution={0.3}
      rotation={[-Math.PI / 2, Math.PI, (Math.PI / 7) * 1.1]}
      type="dynamic"
      scale={30}
      position={[-27, 5, -22]}
      colliders="cuboid"
    >
      <primitive object={mesh.scene} scale={0.25} />
    </RigidBody>
  );
}
