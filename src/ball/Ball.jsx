import { TextureLoader, Vector2 } from 'three';
import { useLoader } from '@react-three/fiber';
import roughMap from './ROUGH.jpg';
import ballTexture from './2k_sun.jpeg';
import normalMapTexture from './NORM.jpg';
import { RigidBody } from '@react-three/rapier';
import { Outlines, useCursor } from '@react-three/drei';
import { useState } from 'react';

export default function Ball() {
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
      <RigidBody restitution={0.5} type="dynamic" colliders="ball">
        <mesh
          position={[42, 0, -22]}
          onClick={handleClick}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
        >
          <Outlines thickness={hovered ? 5 : 0} color="white" />
          <sphereGeometry args={[5]} />
          <meshStandardMaterial wireframe />
        </mesh>
      </RigidBody>
    </>
  );
}
