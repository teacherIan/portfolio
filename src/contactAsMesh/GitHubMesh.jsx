import { useGLTF } from '@react-three/drei';
import gitModel from '../assets/github.glb';
import { RigidBody } from '@react-three/rapier';
import { Outlines, useCursor, Text } from '@react-three/drei';
import { useState } from 'react';

export default function GitHubMesh(props) {
  const offset = window.innerWidth < 1000 ? -30 : 0;

  const [hovered, set] = useState(false);
  useCursor(hovered);
  const handleClick = () => {
    window.open('https://github.com/teacherIan', '_blank');
  };

  const { nodes, materials } = useGLTF(gitModel);

  return (
    <>
      <RigidBody
        restitution={0.5}
        // friction={1}
        //   rotation={[0, Math.PI * -1.1, 0]}
        type="dynamic"
        scale={15}
        position={[50 + offset, 10, -72 + offset * 1.3]}
        colliders="cuboid"
      >
        <group {...props} dispose={null}>
          <group rotation={[0, Math.PI, 0]} scale={10}>
            <mesh
              onClick={handleClick}
              castShadow
              receiveShadow
              geometry={nodes.Curve021.geometry}
              material={materials.github}
            ></mesh>

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve021_1.geometry}
              material={materials['glossy putih']}
              onPointerOver={() => set(true)}
              onPointerOut={() => set(false)}
            >
              <Outlines thickness={hovered ? 5 : 0} color="lightblue" />
            </mesh>
          </group>
        </group>
      </RigidBody>
      <Text
        rotation={[Math.PI / 2, Math.PI, 0]}
        scale={3}
        position={[50 + offset, -9.25, -72 + offset * 1.3 - 7]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Git
      </Text>
    </>
  );
}

useGLTF.preload(gitModel);
