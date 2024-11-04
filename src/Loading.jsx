import { Text } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';
import Lights from './Lights';

export default function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return ''; // Reset after three dots
        }
        return prevDots + '.'; // Add one dot
      });
    }, 300); // Update every 300 milliseconds

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  // Create a fixed-length string with non-breaking spaces
  const fixedLengthDots = dots.padEnd(3, '\u00A0'); // Pad with non-breaking spaces

  return (
    <>
      <Lights />
      <mesh
        // receiveShadow
        position-y={-9.3}
        rotation-x={-Math.PI * 0.5}
        // scale={400}
      >
        <planeGeometry args={[1000, 1000]} />
        <MeshReflectorMaterial
          transparent
          // blur={[30, 30]}
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
          // map={texture}
        />
      </mesh>
      <Text
        rotation={[Math.PI / 2, Math.PI, -Math.PI / 10]}
        scale={20}
        position={[0, -9.25, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Loading{fixedLengthDots}
      </Text>
    </>
  );
}
