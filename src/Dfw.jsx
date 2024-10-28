import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import GitHubObj from '../src/assets/desk.glb';

export default function Dfw() {
  const github = useGLTF(GitHubObj);
  return (
    <RigidBody
      restitution={0.5}
      rotation={[0, Math.PI * -1.1, 0]}
      type="dynamic"
      scale={10}
      position={[62, 10, -28]}
      colliders="cuboid"
    >
      <primitive object={github.scene} scale={1} />
    </RigidBody>
  );
}
