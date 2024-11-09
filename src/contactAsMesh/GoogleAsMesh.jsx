import { useGLTF } from '@react-three/drei';
import googleModel from '../assets/google.glb';
import { RigidBody } from '@react-three/rapier';
import { Outlines, useCursor, Text } from '@react-three/drei';
import { useState } from 'react';

export default function GitHubMesh(props) {
  const [showText, setShowText] = useState(false);
  const [hovered, set] = useState(false);
  useCursor(hovered);
  const handleClick = () => {
    setShowText(true);
  };

  const { nodes, materials } = useGLTF(googleModel);
  return (
    <>
      <RigidBody
        restitution={0.5}
        type="dynamic"
        scale={2}
        position={[12, 5, -37]}
        colliders="cuboid"
      >
        <group {...props} dispose={null} onClick={handleClick}>
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
                  onPointerOver={() => set(true)}
                  onPointerOut={() => set(false)}
                  onClick={handleClick}
                >
                  <Outlines thickness={hovered ? 5 : 0} color="lightblue" />
                </mesh>

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
                ></mesh>
              </group>
            </group>
          </group>
        </group>
      </RigidBody>

      {showText ? (
        <Text
          rotation={[Math.PI / 2, Math.PI, 0]}
          scale={3}
          position={[11, 5, -55]}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          iansmalloy@gmail.com
        </Text>
      ) : null}
    </>
  );
}

useGLTF.preload(googleModel);
