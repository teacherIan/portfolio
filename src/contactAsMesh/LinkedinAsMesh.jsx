import { useGLTF } from '@react-three/drei';
import linkedinModel from '../assets/linkedin.glb';
import { RigidBody } from '@react-three/rapier';
import { Outlines } from '@react-three/drei';

export default function GitHubMesh(props) {
  const { nodes, materials } = useGLTF(linkedinModel);
  return (
    <RigidBody
      restitution={0.5}
      // friction={1}
      //   rotation={[0, Math.PI * -1.1, 0]}
      type="dynamic"
      scale={3}
      position={[27, 5, -45]}
      colliders="cuboid"
    >
      <group {...props} dispose={null}>
        <group position={[0, 3, 6]} rotation={[0, Math.PI, 0]} scale={0.843}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030.geometry}
            material={materials['glossy linkedin']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_1.geometry}
            material={materials['glossy putih']}
          />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload(linkedinModel);
