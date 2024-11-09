import { TextureLoader, Vector2 } from 'three';
import { useLoader } from '@react-three/fiber';
import roughMap from './ROUGH.jpg';
import ballTexture from './2k_sun.jpeg';
import normalMapTexture from './NORM.jpg';
import { RigidBody } from '@react-three/rapier';
import { Outlines, useCursor, Text } from '@react-three/drei';
import { useState } from 'react';
import { useControls } from 'leva';

export default function Ball() {
  const { positionX, positionY, positionZ, rotation } = useControls('ball', {
    positionX: {
      value: 73,
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
      value: -54,
      step: 0.01,
      min: -100,
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
    window.open('https://pixi-rapier-drop-demo.vercel.app/', '_blank');
  };
  const roughnessMap = useLoader(TextureLoader, roughMap);
  const texture = useLoader(TextureLoader, ballTexture);
  const normalMap = useLoader(TextureLoader, normalMapTexture);
  return (
    <>
      <RigidBody
        restitution={0.5}
        type="dynamic"
        colliders="ball"
        scale={5}
        position={[positionX, positionY, positionZ]}
      >
        <mesh
          onClick={handleClick}
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
        position={[positionX, -9.25, positionZ - 3]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Drop Demo
      </Text>
    </>
  );
}
