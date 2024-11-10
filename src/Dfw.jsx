import { useGLTF } from '@react-three/drei';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import tableObj from '../src/assets/table_new.glb';
import { Suspense, useState } from 'react';
import { Outlines, useCursor, Text } from '@react-three/drei';
import { useControls } from 'leva';

export default function Dfw() {
  const offset = window.innerWidth < 1000 ? -25 : 0;
  const { positionX, positionY, positionZ, rotation } = useControls('dfw', {
    positionX: {
      value: 48.6 + offset * 1.8,
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
      value: -54 + offset * 2.5,
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

  const [hovered, set] = useState(false);
  useCursor(hovered);
  const handleClick = () => {
    window.open('https://www.dfw.earth', '_blank');
  };

  const { nodes, materials } = useGLTF(tableObj);
  return (
    <>
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        restitution={0.5}
        rotation={[0, rotation, 0]}
        type="dynamic"
        scale={25}
        position={[positionX, positionY, positionZ]}
        colliders="cuboid"
      >
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0.geometry}
            material={materials['Material_0.001']}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={handleClick}
          >
            <Outlines thickness={hovered ? 5 : 0} color="white" />
          </mesh>
        </group>
      </RigidBody>
      <Text
        rotation={[Math.PI / 2, Math.PI, 0]}
        scale={3}
        position={[positionX, -9.25, positionZ - 6]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        dfw.earth
      </Text>
    </>
  );
}
