import { useGLTF } from '@react-three/drei';
import linkedinModel from '../assets/linkedin.glb';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import { Outlines, useCursor } from '@react-three/drei';
import { useState } from 'react';

export default function GitHubMesh(props) {
  const [hovered, set] = useState(false);
  useCursor(hovered ? 'pointer' : 'grab');
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/ian-malloy-0809a543/', '_blank');
  };

  const { nodes, materials } = useGLTF(linkedinModel);

  return (
    <RigidBody
      restitution={0.5}
      collisionGroups={interactionGroups([1], [1])}
      type="dynamic"
      scale={3.5}
      position={[27, 5, -37]}
      colliders="cuboid"
    >
      <group {...props} dispose={null}>
        <group position={[0, 3, 6]} rotation={[0, Math.PI, 0]} scale={2}>
          <mesh
            onClick={handleClick}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030.geometry}
            material={materials['glossy linkedin']}
          >
            <Outlines thickness={hovered ? 5 : 0} color="white" />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_1.geometry}
            material={materials['glossy putih']}
          ></mesh>
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload(linkedinModel);
