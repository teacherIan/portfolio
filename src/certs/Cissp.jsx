import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import CISSP from '../assets/cissp.glb';

export default function Cissp() {
  const mesh = useGLTF(CISSP);
  return (
    <RigidBody
      restitution={0.3}
      rotation={[-Math.PI / 2, Math.PI, Math.PI / 6]}
      type="dynamic"
      scale={200}
      position={[-25, 40, -20]}
      colliders="cuboid"
    >
      <primitive object={mesh.scene} scale={0.25} />
    </RigidBody>
  );
}
