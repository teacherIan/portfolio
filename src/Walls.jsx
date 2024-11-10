import { RigidBody, CuboidCollider } from '@react-three/rapier';

export default function Walls() {
  return (
    <RigidBody type="fixed">
      {/*left wall */}
      <CuboidCollider args={[5, 100, 300]} position={[150, 1, 5.5]} />
      {/*right wall */}
      <CuboidCollider args={[5, 100, 300]} position={[-150, 1, -5.5]} />
      {/*back wall */}
      <CuboidCollider args={[300, 100, 5]} position={[0, 1, -200]} />
      {/*front wall */}
      <CuboidCollider args={[300, 100, 5]} position={[0, 1, 300]} />
    </RigidBody>
  );
}
