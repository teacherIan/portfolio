import { TextureLoader, Vector2 } from 'three';
import { useLoader } from '@react-three/fiber';
import roughMap from './ROUGH.jpg';
import ballTexture from './2k_sun.jpeg';
import normalMapTexture from './NORM.jpg';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import { Outlines, useCursor, Text } from '@react-three/drei';
import { useState } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

export default function Ball() {
  const offset = window.innerWidth < 1000 ? -20 : 0;
  const { positionX, positionY, positionZ, rotation } = useControls('ball', {
    positionX: {
      value: 73 + offset * 2,
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
      value: -62 + offset * 2.3,
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
  const handleInteraction = () => {
    window.open('https://pixi-rapier-drop-demo.vercel.app/', '_blank');
  };
  const roughnessMap = useLoader(TextureLoader, roughMap);
  const texture = useLoader(TextureLoader, ballTexture);
  const normalMap = useLoader(TextureLoader, normalMapTexture);
  return (
    <>
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        restitution={0.5}
        type="dynamic"
        colliders="ball"
        scale={window.innerWidth < 1400 ? 10 : 8}
        position={[positionX, positionY, positionZ]}
      >
        <mesh
          onPointerDown={handleInteraction}
          onClick={handleInteraction}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        >
          <Outlines thickness={hovered ? 5 : 0} color="white" />
          <sphereGeometry args={[1]} />
          <meshStandardMaterial wireframe color={'lightblue'} />
        </mesh>
      </RigidBody>
      <Text
        rotation={[Math.PI / 2, Math.PI, 0]}
        scale={3}
        position={[positionX, -9.25, positionZ - 3.5]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Drop Demo
      </Text>
    </>
  );
}
