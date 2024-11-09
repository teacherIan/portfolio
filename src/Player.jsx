import { interactionGroups, RigidBody } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Player() {
  const bodyRef = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame((state, delta) => {
    /**
     * Controls
     */
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 12000;
    const torqueStrength = 12000;

    if (forward) {
      impulse.z = impulseStrength;
      torque.x = torqueStrength;
    }

    if (rightward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    if (backward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (leftward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (bodyRef.current) {
      bodyRef.current.applyImpulse(impulse);
      bodyRef.current.applyTorqueImpulse(torque);
    }
  });

  return (
    <RigidBody
      collisionGroups={interactionGroups([1], [1])}
      ref={bodyRef}
      canSleep={false}
      colliders="ball"
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      position={[17, 100, -68]}
      scale={1}
    >
      <mesh>
        <sphereGeometry args={[10]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </RigidBody>
  );
}
