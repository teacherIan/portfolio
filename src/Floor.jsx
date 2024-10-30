import { RigidBody } from '@react-three/rapier';
import { MeshReflectorMaterial } from '@react-three/drei';

export default function Floor() {
  return (
    <RigidBody type="fixed" restitution={0.3}>
      <mesh
        // receiveShadow
        position-y={-9.3}
        rotation-x={-Math.PI * 0.5}
        // scale={400}
      >
        <planeGeometry args={[1000, 1000]} />
        <MeshReflectorMaterial
          // blur={[30, 30]}
          resolution={2046}
          mixBlur={150}
          mixStrength={5}
          roughness={1}
          depthScale={6}
          minDepthThreshold={0.4}
          maxDepthThreshold={1}
          color="#4d8d9d"
          metalness={1}
          opacity={1}
          // map={texture}
        />
      </mesh>
    </RigidBody>
  );
}
