import React, { useRef, useState } from 'react';
import { useGLTF, Outlines } from '@react-three/drei';
import bookShelfObj from './assets/bookShelf.glb';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import * as THREE from 'three';
import { useControls, button } from 'leva';

const material = new THREE.MeshStandardMaterial({
  color: 'white',
  metalness: 0.0,
  roughness: 0,
});

const materialTwo = new THREE.MeshPhysicalMaterial({
  color: 'lightblue',
  metalness: 0.0,
  roughness: 1,
  clearcoat: 1,
  clearcoatRoughness: 0,
});

export default function BookShelf({ loc }) {
  const offset = window.innerWidth < 1000 ? 25 : 0;
  //[-55, 10, -40]
  //-70, 10, -30
  //-50, 10, -60
  const { aPositionX, aPositionY, aPositionZ, aRotation } = useControls(
    'shelfA',
    {
      aPositionX: {
        value: -50.34 + offset,
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
        value: -30,
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
        value: -68.68 + offset,
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
        value: -37.09,
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
        value: -66.37 + offset,
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

  const shelfARef = useRef();
  const shelfBRef = useRef();
  const shelfCRef = useRef();

  const [shelfAHover, setShelfAHover] = useState(false);
  const [shelfBHover, setShelfBHover] = useState(false);
  const [shelfCHover, setShelfCHover] = useState(false);

  const jump = (num) => {
    setTimeout(() => {
      const shelf =
        num === 0
          ? shelfARef.current
          : num === 1
          ? shelfBRef.current
          : shelfCRef.current;
      const mass = shelf.mass();
      const moveLeft = shelf.translation().x > 0;

      shelf.applyImpulse({
        x: 30 + 100 * mass * Math.random(),
        y: 3 * mass,
        z: 30 + 100 * mass * Math.random(),
      });
      shelf.applyTorqueImpulse({
        x: (Math.random() - 0.5) * mass * 100,
        y: (Math.random() - 0.5) * mass * 100,
        z: (Math.random() - 0.5) * mass * 100,
      });
    }, 0);
  };

  const { nodes, materials } = useGLTF(bookShelfObj);
  return (
    <group dispose={null}>
      {/* <RigidBody
        onClick={(e) => jump(0)}
        ref={shelfARef}
        collisionGroups={interactionGroups([1], [1])}
        colliders="cuboid"
        type="dynamic"
        position={[aPositionX, aPositionY, aPositionZ]}
        rotation={[Math.PI / 2, 0, aRotation]}
        scale={15}
        canSleep={false}
      >
        <group>
          <mesh
            onPointerOver={() => setShelfAHover(true)}
            onPointerOut={() => setShelfAHover(false)}
            geometry={nodes.Cube030.geometry}
            material={material}
          >
            <Outlines thickness={3} color={shelfAHover ? 'white' : 'black'} />
          </mesh>

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
      </RigidBody> */}
      <RigidBody
        onClick={(e) => jump(1)}
        ref={shelfBRef}
        collisionGroups={interactionGroups([1], [1])}
        colliders="cuboid"
        type="dynamic"
        position={[bPositionX, bPositionY, bPositionZ]}
        rotation={[Math.PI / 2, 0, bRotation]}
        scale={15}
        canSleep={false}
      >
        <group>
          <mesh
            onPointerOver={() => setShelfBHover(true)}
            onPointerOut={() => setShelfBHover(false)}
            geometry={nodes.Cube030.geometry}
            material={material}
          >
            <Outlines thickness={3} color={shelfBHover ? 'white' : 'black'} />
          </mesh>
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
      {/* <RigidBody
        onClick={(e) => jump(2)}
        ref={shelfCRef}
        collisionGroups={interactionGroups([1], [1])}
        colliders="cuboid"
        type="dynamic"
        position={[cPositionX, cPositionY, cPositionZ]}
        rotation={[Math.PI / 2, 0, cRotation]}
        scale={15}
        canSleep={false}
      >
        <group>
          <mesh
            onPointerOver={() => setShelfCHover(true)}
            onPointerOut={() => setShelfCHover(false)}
            geometry={nodes.Cube030.geometry}
            material={material}
          >
            <Outlines thickness={3} color={shelfCHover ? 'white' : 'black'} />
          </mesh>
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
      </RigidBody> */}
    </group>
  );
}

useGLTF.preload(bookShelfObj);
