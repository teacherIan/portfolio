import { TextureLoader, Vector2 } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import roughMap from './ROUGH.jpg';
import ballTexture from './2k_sun.jpeg';
import normalMapTexture from './NORM.jpg';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import {
  Outlines,
  useCursor,
  Text,
  Decal,
  RenderTexture,
  PerspectiveCamera,
} from '@react-three/drei';
import { useState, useRef } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

export default function Ball() {
  const meshRef = useRef();
  // const textRef = useRef();
  const rigidBodyRef = useRef();
  const decalRef = useRef();

  const offset = window.innerWidth < 1000 ? -20 : 0;
  const x = window.innerWidth < 1400 ? 8.33 : 73;
  const z = window.innerWidth < 1400 ? -129 : -62;
  const { positionX, positionY, positionZ, rotation } = useControls('ball', {
    positionX: {
      value: x,
      step: 0.01,
      min: -100,
      max: 100,
    },
    positionY: {
      value: -2.9,
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

  useFrame(() => {
    if (rigidBodyRef.current) {
      const worldPosition = rigidBodyRef.current.translation();
      const worldRotation = rigidBodyRef.current.rotation();

      decalRef.current.position.set(
        worldPosition.x,
        worldPosition.y,
        worldPosition.z
      );
      decalRef.current.quaternion.copy(worldRotation);
    }
  });

  const [hovered, set] = useState(false);
  useCursor(hovered ? 'pointer' : 'grab');
  // useCursor(hovered);
  const handleInteraction = () => {
    window.open('https://pixi-rapier-drop-demo.vercel.app/', '_blank');
  };
  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        collisionGroups={interactionGroups([1], [1])}
        restitution={0.5}
        type="dynamic"
        colliders="ball"
        // scale={window.innerWidth < 1400 ? 10 : 8}
        position={[positionX, positionY, positionZ]}
      >
        <mesh
          ref={meshRef}
          onPointerDown={handleInteraction}
          onClick={handleInteraction}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        >
          <Outlines thickness={hovered ? 5 : 0} color="white" />
          <sphereGeometry args={[10]} />
          <meshStandardMaterial wireframe color={'lightblue'} />
        </mesh>
      </RigidBody>
      <Decal
        ref={decalRef}
        mesh={meshRef}
        position={[0, 2, -10]}
        rotation={[0, Math.PI, 0]}
        scale={[20, 20, 20]}
      >
        <meshStandardMaterial
          transparent
          polygonOffset
          polygonOffsetFactor={-10}
        >
          <RenderTexture attach="map">
            <PerspectiveCamera
              makeDefault
              manual
              aspect={1}
              position={[0, 0, 220]}
            />

            <Text fontSize={48} color="red" anchorX="center" anchorY="middle">
              {`CLICK \n  ME!`}
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>
    </>
  );
}
