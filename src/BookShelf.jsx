import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import bookShelfObj from './assets/bookShelf.glb';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import * as THREE from 'three';
import { useControls, button } from 'leva';

const material = new THREE.MeshStandardMaterial({
  color: 'lightblue',
  metalness: 0.0,
  roughness: 1,
});

const materialTwo = new THREE.MeshPhysicalMaterial({
  color: 'lightblue',
  metalness: 0.0,
  roughness: 1,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

export default function BookShelf({ loc }) {
  //[-55, 10, -40]
  //-70, 10, -30
  //-50, 10, -60
  const { aPositionX, aPositionY, aPositionZ, aRotation } = useControls(
    'shelfA',
    {
      aPositionX: {
        value: -47.34,
        step: 0.01,
        min: -100,
        max: 100,
      },
      aPositionY: {
        value: -9,
        step: 0.01,
        min: -100,
        max: 100,
      },
      aPositionZ: {
        value: -35,
        step: 0.01,
        min: -100,
        max: 100,
      },
      aRotation: {
        value: 0.56,
        min: -Math.PI / 2,
        max: Math.PI / 2,
        step: 0.01,
      },
    }
  );

  const { bPositionX, bPositionY, bPositionZ, bRotation } = useControls(
    'shelfB',
    {
      bPositionX: {
        value: -55.68,
        step: 0.01,
        min: -100,
        max: 100,
      },
      bPositionY: {
        value: -9.0,
        step: 0.01,
        min: -100,
        max: 100,
      },
      bPositionZ: {
        value: -42.09,
        step: 0.01,
        min: -100,
        max: 100,
      },
      bRotation: {
        value: 0.89,
        min: -Math.PI / 2,
        max: Math.PI / 2,
        step: 0.01,
      },
    }
  );
  const { cPositionX, cPositionY, cPositionZ, cRotation } = useControls(
    'shelfC',
    {
      cPositionX: {
        value: -62.37,
        step: 0.01,
        min: -100,
        max: 100,
      },
      cPositionY: {
        value: -9.0,
        step: 0.01,
        min: -100,
        max: 100,
      },
      cPositionZ: {
        value: -51.2,
        step: 0.01,
        min: -100,
        max: 100,
      },
      cRotation: {
        value: 0.99,
        min: -Math.PI / 2,
        max: Math.PI / 2,
        step: 0.01,
      },
    }
  );

  const { nodes, materials } = useGLTF(bookShelfObj);
  return (
    <group dispose={null}>
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        colliders="cuboid"
        type="dynamic"
        position={[aPositionX, aPositionY, aPositionZ]}
        rotation={[Math.PI / 2, 0, aRotation]}
        scale={10}
      >
        <group>
          <mesh geometry={nodes.Cube030.geometry} material={material} />
          <mesh
            geometry={nodes.Cube030_1.geometry}
            material={materials['PurpleDark.001']}
          />
          <mesh
            geometry={nodes.Cube030_2.geometry}
            material={materials['White.032']}
          />
          <mesh
            geometry={nodes.Cube030_3.geometry}
            material={materials['Metal.078']}
          />
          <mesh
            geometry={nodes.Cube030_4.geometry}
            material={materials['BlueDark.001']}
          />
          <mesh
            geometry={nodes.Cube030_5.geometry}
            material={materials['GreenDark.005']}
          />
          <mesh
            geometry={nodes.Cube030_6.geometry}
            material={materials['WoodDark.003']}
          />
          <mesh
            geometry={nodes.Cube030_7.geometry}
            material={materials['Black.029']}
          />
        </group>
      </RigidBody>
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        colliders="cuboid"
        type="dynamic"
        position={[bPositionX, bPositionY, bPositionZ]}
        rotation={[Math.PI / 2, 0, bRotation]}
        scale={10}
      >
        <group>
          <mesh geometry={nodes.Cube030.geometry} material={material} />
          <mesh
            geometry={nodes.Cube030_1.geometry}
            material={materials['PurpleDark.001']}
          />
          <mesh
            geometry={nodes.Cube030_2.geometry}
            material={materials['White.032']}
          />
          <mesh
            geometry={nodes.Cube030_3.geometry}
            material={materials['Metal.078']}
          />
          <mesh
            geometry={nodes.Cube030_4.geometry}
            material={materials['BlueDark.001']}
          />
          <mesh
            geometry={nodes.Cube030_5.geometry}
            material={materials['GreenDark.005']}
          />
          <mesh
            geometry={nodes.Cube030_6.geometry}
            material={materials['WoodDark.003']}
          />
          <mesh
            geometry={nodes.Cube030_7.geometry}
            material={materials['Black.029']}
          />
        </group>
      </RigidBody>
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        colliders="cuboid"
        type="dynamic"
        position={[cPositionX, cPositionY, cPositionZ]}
        rotation={[Math.PI / 2, 0, cRotation]}
        scale={10}
      >
        <group>
          <mesh geometry={nodes.Cube030.geometry} material={material} />
          <mesh
            geometry={nodes.Cube030_1.geometry}
            material={materials['PurpleDark.001']}
          />
          <mesh
            geometry={nodes.Cube030_2.geometry}
            material={materials['White.032']}
          />
          <mesh
            geometry={nodes.Cube030_3.geometry}
            material={materials['Metal.078']}
          />
          <mesh
            geometry={nodes.Cube030_4.geometry}
            material={materials['BlueDark.001']}
          />
          <mesh
            geometry={nodes.Cube030_5.geometry}
            material={materials['GreenDark.005']}
          />
          <mesh
            geometry={nodes.Cube030_6.geometry}
            material={materials['WoodDark.003']}
          />
          <mesh
            geometry={nodes.Cube030_7.geometry}
            material={materials['Black.029']}
          />
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload(bookShelfObj);
