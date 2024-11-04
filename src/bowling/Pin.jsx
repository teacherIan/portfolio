import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import bowlingPinObj from '../assets/bowlingPin.glb';

export default function Pin({ loc }) {
  console.log(loc + ' is loc');
  const { nodes, materials } = useGLTF(bowlingPinObj);
  return (
    <group dispose={null}>
      <RigidBody colliders="hull" type="dynamic" position={loc}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={30}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bowling_Pin_Pin_Stripes_0.geometry}
            material={materials.Pin_Stripes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bowling_Pin_Pin_0.geometry}
            material={materials.material}
          />
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload(bowlingPinObj);
