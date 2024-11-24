import {
  interactionGroups,
  RigidBody,
  BallCollider,
} from '@react-three/rapier';
import {
  useKeyboardControls,
  Text,
  Decal,
  RenderTexture,
  PerspectiveCamera,
} from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Player({
  leftButtonState,
  rightButtonState,
  upButtonState,
  downButtonState,
  joystickX,
  joystickY,
}) {
  const textRef = useRef();
  const bodyRef = useRef();
  const ballVis = useRef();

  const ballSize = window.innerWidth < 1400 ? 13 : 10;
  const speedMultiplier = window.innerWidth < 1400 ? 3.5 : 1;
  const multiplier = 1.3;

  const [subscribeKeys, getKeys] = useKeyboardControls();
  const location = window.innerWidth < 1400 ? [-15, 100, 100] : [17, 100, -68];

  useFrame((state, delta) => {
    if (textRef.current && bodyRef.current) {
      const worldPosition = bodyRef.current.translation();

      textRef.current.position.set(
        worldPosition.x,
        worldPosition.y + 17,
        worldPosition.z - 6
      );
    }

    /**
     * Controls
     */
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 20000 * speedMultiplier;
    const torqueStrength = 1000;

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

    if (ballVis.current && bodyRef.current) {
      const bPosition = bodyRef.current.translation();
      const bRotation = bodyRef.current.rotation();
      ballVis.current.position.set(bPosition.x, bPosition.y, bPosition.z);
      ballVis.current.quaternion.copy(bRotation);
    }
  });

  return (
    <>
      {/*fix body */}
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        ref={bodyRef}
        canSleep={false}
        colliders="ball"
        restitution={0.2}
        friction={1}
        linearDamping={0.5}
        angularDamping={0.5}
        gravityScale={10}
        position={location}
        scale={1}
        rotation={[Math.PI / 4, Math.PI / 12, 0]}
      >
        <BallCollider args={[ballSize]} />
      </RigidBody>

      <mesh ref={ballVis}>
        <sphereGeometry args={[ballSize]} />
        <meshStandardMaterial metalness={0.3} roughness={0} color="red" />
        <Decal
          attach={ballVis.current}
          position={[0, 0, 0]}
          rotation={[0, Math.PI, 0]}
          scale={[15, 20, 40]}
        >
          <meshStandardMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-20}
          >
            <RenderTexture attach="map">
              <PerspectiveCamera
                makeDefault
                manual
                aspect={1}
                position={[0, 0, 180]}
              />

              <Text
                fontSize={30}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                Control Me!
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </Decal>
      </mesh>
    </>
  );
}
