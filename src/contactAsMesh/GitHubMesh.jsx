import { useGLTF } from '@react-three/drei';
import gitModel from '../assets/github.glb';
import { RigidBody } from '@react-three/rapier';
import { Outlines } from '@react-three/drei';

export default function GitHubMesh(props) {
  const { nodes, materials } = useGLTF(gitModel);
  return (
    <RigidBody
      restitution={0.5}
      // friction={1}
      //   rotation={[0, Math.PI * -1.1, 0]}
      type="dynamic"
      scale={10}
      position={[50, 10, -33]}
      colliders="cuboid"
    >
      <group {...props} dispose={null}>
        <group rotation={[0, Math.PI, 0]} scale={10}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve021.geometry}
            material={materials.github}
          />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve021_1.geometry}
            material={materials['glossy putih']}
          />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload(gitModel);
