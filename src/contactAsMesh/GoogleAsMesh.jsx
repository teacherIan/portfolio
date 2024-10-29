import { useGLTF } from '@react-three/drei';
import googleModel from '../assets/google.glb';
import { RigidBody } from '@react-three/rapier';
import { Outlines } from '@react-three/drei';

export default function GitHubMesh(props) {
  const { nodes, materials } = useGLTF(googleModel);
  return (
    <RigidBody
      restitution={0.5}
      // friction={1}
      //   rotation={[0, Math.PI * -1.1, 0]}
      type="dynamic"
      scale={2}
      position={[12, 5, -45]}
      colliders="cuboid"
    >
      <group {...props} dispose={null}>
        <group rotation={[Math.PI / 2, Math.PI, 0]} scale={2}>
          <group {...props} dispose={null}>
            <group
              position={[0, 3, 6]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009.geometry}
                material={materials['glossy putih.002']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_1.geometry}
                material={materials['google 3 GLOS']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_2.geometry}
                material={materials['google 4 GLOS']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_3.geometry}
                material={materials['google2 GLOS']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_4.geometry}
                material={materials['google 1 GLOS']}
              />
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload(googleModel);
