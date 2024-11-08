import { useGLTF } from '@react-three/drei';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import GitHubObj from '../assets/github.glb';

export default function GitHub() {
  const github = useGLTF(GitHubObj);
  return (
    <RigidBody
      collisionGroups={interactionGroups([1], [1])}
      restitution={1}
      rotation={[0, Math.PI * -1.1, 0]}
      type="dynamic"
      scale={10}
      position={[23, -2, -43]}
      colliders="cuboid"
    >
      <primitive object={github.scene} scale={0.25} />
    </RigidBody>
  );
}
