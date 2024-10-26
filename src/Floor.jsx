import { RigidBody } from '@react-three/rapier';
import { MeshReflectorMaterial } from '@react-three/drei';

export default function Floor() {
  return (
    <RigidBody type="fixed">
      <mesh
        receiveShadow
        position-y={-9.3}
        rotation-x={-Math.PI * 0.5}
        scale={1000}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          transparent
          // blur={[30, 30]}
          resolution={2046}
          mixBlur={1}
          mixStrength={80}
          roughness={0.4}
          depthScale={6}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={1}
          opacity={1}
        />
      </mesh>
    </RigidBody>
  );
}
