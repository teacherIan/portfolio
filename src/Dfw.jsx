import { RigidBody, interactionGroups } from '@react-three/rapier';
import tableObj from '../src/assets/table_new.glb';
import { Suspense, useState, useRef } from 'react';
import { Outlines, useCursor, Text, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';

export default function Dfw() {
  const textRef = useRef();
  const rigidBodyRef = useRef();

  useFrame(() => {
    if (textRef.current && rigidBodyRef.current) {
      const worldPosition = rigidBodyRef.current.translation();

      textRef.current.position.set(worldPosition.x, -9.25, worldPosition.z - 8);
    }
  });

  const offset = window.innerWidth < 1000 ? -25 : 0;
  const x = window.innerWidth < 1400 ? -36 : 48.6;
  const z = window.innerWidth < 1400 ? -108 : -53;
  const { positionX, positionY, positionZ, rotation } = useControls('dfw', {
    positionX: {
      value: x,
      step: 0.01,
      min: -100,
      max: 100,
    },
    positionY: {
      value: -11,
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

  const [hovered, set] = useState(false);
  useCursor(hovered ? 'pointer' : 'grab');

  const handleInteraction = (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up
    window.open('https://www.dfw.earth', '_blank');
  };

  const { nodes, materials } = useGLTF(tableObj);
  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        collisionGroups={interactionGroups([1], [1])}
        restitution={0.5}
        rotation={[0, rotation, 0]}
        type="dynamic"
        scale={window.innerWidth < 1400 ? 40 : 30}
        position={[positionX, positionY, positionZ]}
        colliders="cuboid"
      >
        <group dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0.geometry}
            material={materials['Material_0.001']}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onPointerDown={handleInteraction}
            onClick={handleInteraction}
          >
            <Outlines thickness={hovered ? 5 : 0} color="white" />
          </mesh>
        </group>
      </RigidBody>
      <Text
        ref={textRef}
        rotation={[Math.PI / 2, Math.PI, 0]}
        scale={3}
        position={[positionX, -9.25, positionZ - 6]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        dfw.earth
      </Text>
    </>
  );
}
