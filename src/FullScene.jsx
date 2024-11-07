import { useGLTF } from '@react-three/drei';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import scene from '../src/assets/scene.glb';
export default function fullScene() {
  const I = useGLTF(scene);

  return (
    <>
      <RigidBody
        collisionGroups={interactionGroups([2], [2])}
        restitution={0}
        rotation={[Math.PI / 2, 0, 0]}
        type="fixed"
        position={[40, -9.5, 0]}
        colliders="cuboid"
      >
        <primitive object={I.scene} scale={0.25} />
      </RigidBody>
    </>
  );
}
