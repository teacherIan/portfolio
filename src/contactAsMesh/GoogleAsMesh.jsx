import { useGLTF } from '@react-three/drei';
import googleModel from '../assets/google.glb';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import { Outlines, useCursor, Text } from '@react-three/drei';
import { useState } from 'react';
import { useControls } from 'leva';

export default function GitHubMesh(props) {
  const textOffset = window.innerWidth < 1400 ? -10 : -10;
  const x = window.innerWidth < 1400 ? 10 : -32;
  const z = window.innerWidth < 1400 ? -70 : -74;
  const { positionX, positionY, positionZ, rotation } = useControls('google', {
    positionX: {
      value: x,
      step: 0.01,
      min: -100,
      max: 100,
    },
    positionY: {
      value: -11,
      step: 0.01,
      min: -100,
      max: 100,
    },
    positionZ: {
      value: z,
      step: 0.01,
      min: -200,
      max: 100,
    },
    rotation: {
      value: -1.5,
      min: -Math.PI / 2,
      max: Math.PI / 2,
      step: 0.01,
    },
  });

  const [showText, setShowText] = useState(false);
  const [hovered, set] = useState(false);
  useCursor(hovered);
  const handleInteraction = (event) => {
    event.stopPropagation();
    setShowText(true);
  };

  const { nodes, materials } = useGLTF(googleModel);
  return (
    <>
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        restitution={0.5}
        type="dynamic"
        scale={3}
        position={[positionX, 5, positionZ]}
        colliders="cuboid"
      >
        <group
          {...props}
          dispose={null}
          onPointerDown={handleInteraction}
          onClick={handleInteraction}
        >
          <group rotation={[Math.PI / 2, Math.PI, 0]} scale={2}>
            <group {...props} dispose={null}>
              <group
                // position={[0, 3, 6]}
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
          position={[positionX, -9.25, positionZ + textOffset]}
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
