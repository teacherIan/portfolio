import { interactionGroups, RigidBody } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Player({
  leftButtonState,
  rightButtonState,
  upButtonState,
  downButtonState,
  joystickX,
  joystickY,
}) {
  //[17, 100, -68]--> front loaded
  const ballSize = window.innerWidth < 1400 ? 13 : 10;
  const speedMultiplier = window.innerWidth < 1400 ? 3.5 : 1;
  const multiplier = 1.3;
  const bodyRef = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const location = window.innerWidth < 1400 ? [-15, 100, 100] : [17, 100, -68];

  useFrame((state, delta) => {
    /**
     * Controls
     */
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 20000 * speedMultiplier;
    const torqueStrength = 40000;

    if (forward || upButtonState) {
      impulse.z = impulseStrength;
      torque.x = torqueStrength;
    }

    if (rightward || rightButtonState) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    if (backward || downButtonState) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (leftward || leftButtonState) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (joystickX.current != 0) {
      if (joystickX.current < 0) {
        impulse.x -= impulseStrength * joystickX.current * multiplier;
        torque.z += torqueStrength * joystickX.current * multiplier;
      }

      if (joystickX.current > 0) {
        impulse.x += impulseStrength * -joystickX.current * multiplier;
        torque.z -= torqueStrength * -joystickX.current * multiplier;
      }
    }

    if (joystickY.current != 0) {
      if (joystickY.current < 0) {
        impulse.z -= impulseStrength * -joystickY.current * multiplier;
        torque.x -= torqueStrength * -joystickY.current * multiplier;
      }
      if (joystickY.current > 0) {
        impulse.z = impulseStrength * joystickY.current * multiplier;
        torque.x = torqueStrength * joystickY.current * multiplier;
      }
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
      linearDamping={1}
      angularDamping={1}
      gravityScale={10}
      position={location}
      scale={1}
    >
      <mesh>
        <sphereGeometry args={[ballSize]} />
        <meshStandardMaterial metalness={0.3} roughness={0} color="red" />
      </mesh>
    </RigidBody>
  );
}
