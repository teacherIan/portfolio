import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
export default function fullScene() {
  const I = useGLTF('./scene.glb');

  return (
    <>
      <RigidBody
        restitution={0}
        rotation={[Math.PI / 2, 0, 0]}
        type="fixed"
        position={[40, -10, 0]}
        colliders="trimesh"
      >
        <primitive object={I.scene} scale={0.25} />
      </RigidBody>
    </>
  );
}
