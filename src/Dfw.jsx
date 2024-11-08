import { useGLTF } from '@react-three/drei';
import { RigidBody, interactionGroups } from '@react-three/rapier';
import tableObj from '../src/assets/table_new.glb';
import { Suspense, useState } from 'react';
import { Outlines, useCursor, Text } from '@react-three/drei';

export default function Dfw() {
  const [hovered, set] = useState(false);
  useCursor(hovered);
  const handleClick = () => {
    window.open('https://www.dfw.earth', '_blank');
  };

  const { nodes, materials } = useGLTF(tableObj);
  return (
    <RigidBody
      collisionGroups={interactionGroups([1], [1])}
      restitution={0.5}
      rotation={[0, Math.PI * -1.1, 0]}
      type="dynamic"
      scale={25}
      position={[62, 10, -20]}
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
          onClick={handleClick}
        >
          <Outlines thickness={hovered ? 5 : 0} color="white" />
        </mesh>
      </group>
      {/* <primitive object={table.scene} scale={2} /> */}
    </RigidBody>
  );
}
