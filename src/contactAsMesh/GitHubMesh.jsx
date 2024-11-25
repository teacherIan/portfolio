import gitModel from '../assets/github.glb';
import { RigidBody } from '@react-three/rapier';
import { Outlines, useCursor, Text, useGLTF } from '@react-three/drei';
import { useState, useRef } from 'react';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';

export default function GitHubMesh(props) {
  const textRef = useRef();
  const rigidBodyRef = useRef();

  const textOffset = window.innerWidth < 1400 ? -15 : -20;
  const x = window.innerWidth < 1400 ? -8 : 50;
  const z = window.innerWidth < 1400 ? -105 : -78;
  const { positionX, positionY, positionZ, rotation } = useControls('github', {
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

  const { nodes, materials } = useGLTF(gitModel);

  const handleInteraction = (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up
    window.open('https://github.com/teacherIan', '_blank');
  };

  useFrame(() => {
    const rigidBodyPos = rigidBodyRef.current.translation();
    textRef.current.position.set(rigidBodyPos.x, -9.25, rigidBodyPos.z - 9);
  });

  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        restitution={0.5}
        // friction={1}
        //   rotation={[0, Math.PI * -1.1, 0]}
        type="dynamic"
        scale={window.innerWidth < 1400 ? 30 : 20}
        position={[positionX, 10, positionZ]}
        colliders="cuboid"
      >
        <group
          {...props}
          dispose={null}
          onPointerDown={handleInteraction}
          onClick={handleInteraction}
        >
          <group rotation={[0, Math.PI, 0]} scale={10}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve021.geometry}
              material={materials.github}
            ></mesh>

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Curve021_1.geometry}
              material={materials['glossy putih']}
              onPointerOver={() => set(true)}
              onPointerOut={() => set(false)}
            >
              <Outlines thickness={hovered ? 5 : 0} color="lightblue" />
            </mesh>
          </group>
        </group>
      </RigidBody>
      <Text
        ref={textRef}
        rotation={[Math.PI / 2, Math.PI, 0]}
        scale={3}
        position={[positionX, -9.25, positionZ + textOffset]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Git
      </Text>
    </>
  );
}

useGLTF.preload(gitModel);
