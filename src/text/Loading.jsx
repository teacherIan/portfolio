import { Text } from '@react-three/drei';
import { useState, useEffect } from 'react';

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
    <Text
      rotation={[Math.PI / 2, Math.PI, -Math.PI / 10]}
      scale={20}
      position={[0, 0, 0]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Loading{fixedLengthDots}
    </Text>
  );
}
