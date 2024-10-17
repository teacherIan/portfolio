import { RigidBody } from '@react-three/rapier';

export default function Floor() {
  return (
    <RigidBody receiveShadow castShadow type="fixed">
      <mesh receiveShadow opacity={0}>
        <boxGeometry args={[1000, 10, 1000]} />
        <meshStandardMaterial opacity="0" />
      </mesh>
    </RigidBody>
  );
}
