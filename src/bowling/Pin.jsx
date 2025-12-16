import React from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import bowlingPinObj from '../assets/bowlingPin.glb';
import { BOWLING_PINS } from '../config/constants';

const Pin = React.memo(function Pin({ loc }) {
  const { nodes, materials } = useGLTF(bowlingPinObj);
  return (
    <group dispose={null}>
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        colliders="cuboid"
        position={loc}
        scale={BOWLING_PINS.SCALE}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group>
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
});

export default Pin;

useGLTF.preload(bowlingPinObj);
