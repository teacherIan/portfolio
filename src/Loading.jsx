import { Text, MeshReflectorMaterial } from '@react-three/drei';
import { useState, useEffect } from 'react';
import Lights from './Lights';

export default function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return '';
        }
        return prevDots + '.';
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fixedLengthDots = dots.padEnd(3, '\u00A0');

  return (
    <>
      <Lights />
      <mesh position-y={-9.3} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[1000, 1000]} />
        <MeshReflectorMaterial
          transparent
          resolution={2046}
          mixBlur={500}
          mixStrength={5}
          roughness={1}
          depthScale={6}
          minDepthThreshold={0.4}
          maxDepthThreshold={1}
          color="#4d8d9d"
          metalness={1}
          opacity={0.7}
        />
      </mesh>
      <Text
        rotation={[Math.PI / 2, Math.PI, -Math.PI / 10]}
        scale={25}
        position={[0, -9.25, 10]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Loading{fixedLengthDots}
      </Text>
    </>
  );
}
