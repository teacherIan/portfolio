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

      // textRef.current.position.set(
      //   worldPosition.x,
      //   worldPosition.y + 12,
      //   worldPosition.z
      // );

      decalRef.current.position.set(
        worldPosition.x,
        worldPosition.y,
        worldPosition.z
      );
      decalRef.current.quaternion.copy(worldRotation);
    }
  });

  const [hovered, set] = useState(false);
  useCursor(hovered);
  const handleInteraction = () => {
    window.open('https://pixi-rapier-drop-demo.vercel.app/', '_blank');
  };
  const roughnessMap = useLoader(TextureLoader, roughMap);
  const texture = useLoader(TextureLoader, ballTexture);
  const normalMap = useLoader(TextureLoader, normalMapTexture);
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
          <sphereGeometry args={[8]} />
          <meshStandardMaterial wireframe color={'lightblue'} />
        </mesh>
      </RigidBody>
      <Decal
        ref={decalRef}
        mesh={meshRef}
        position={[0, 0, -10]}
        rotation={[0, Math.PI, 0]}
        scale={[15, 20, 20]}
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

            <Text
              fontSize={60}
              color="tomato"
              anchorX="center"
              anchorY="middle"
            >
              DROP
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      {/* <Text
        ref={textRef}
        rotation={[0, Math.PI, 0]}
        scale={3}
        position={[positionX, -9.25, positionZ - 7]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Drop Demo
      </Text> */}
    </>
  );
}
