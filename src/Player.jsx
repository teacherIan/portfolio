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
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useIsSmallScreen } from './hooks/useWindowSize';
import { PLAYER } from './config/constants';

export default function Player({ joystickX, joystickY }) {
  const textRef = useRef();
  const bodyRef = useRef();
  const ballVis = useRef();
  const isSmallScreen = useIsSmallScreen();

  const ballSize = useMemo(
    () => (isSmallScreen ? PLAYER.BALL_SIZE_MOBILE : PLAYER.BALL_SIZE_DESKTOP),
    [isSmallScreen]
  );

  const speedMultiplier = useMemo(
    () =>
      isSmallScreen
        ? PLAYER.SPEED_MULTIPLIER_MOBILE
        : PLAYER.SPEED_MULTIPLIER_DESKTOP,
    [isSmallScreen]
  );

  const location = useMemo(
    () => (isSmallScreen ? PLAYER.SPAWN_MOBILE : PLAYER.SPAWN_DESKTOP),
    [isSmallScreen]
  );

  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame((state, delta) => {
    if (textRef.current && bodyRef.current) {
      const worldPosition = bodyRef.current.translation();

      textRef.current.position.set(
        worldPosition.x,
        worldPosition.y + 17,
        worldPosition.z - 6
      );
    }

    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = PLAYER.IMPULSE_STRENGTH_BASE * speedMultiplier;
    const torqueStrength = PLAYER.TORQUE_STRENGTH;

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

    // Joystick controls
    if (joystickX.current !== 0) {
      if (joystickX.current < 0) {
        impulse.x -=
          impulseStrength * joystickX.current * PLAYER.JOYSTICK_MULTIPLIER;
        torque.z +=
          torqueStrength * joystickX.current * PLAYER.JOYSTICK_MULTIPLIER;
      }

      if (joystickX.current > 0) {
        impulse.x +=
          impulseStrength * -joystickX.current * PLAYER.JOYSTICK_MULTIPLIER;
        torque.z -=
          torqueStrength * -joystickX.current * PLAYER.JOYSTICK_MULTIPLIER;
      }
    }

    if (joystickY.current !== 0) {
      if (joystickY.current < 0) {
        impulse.z -=
          impulseStrength * -joystickY.current * PLAYER.JOYSTICK_MULTIPLIER;
        torque.x -=
          torqueStrength * -joystickY.current * PLAYER.JOYSTICK_MULTIPLIER;
      }
      if (joystickY.current > 0) {
        impulse.z =
          impulseStrength * joystickY.current * PLAYER.JOYSTICK_MULTIPLIER;
        torque.x =
          torqueStrength * joystickY.current * PLAYER.JOYSTICK_MULTIPLIER;
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
      <RigidBody
        collisionGroups={interactionGroups([1], [1])}
        ref={bodyRef}
        canSleep={false}
        colliders="ball"
        restitution={PLAYER.RESTITUTION}
        friction={PLAYER.FRICTION}
        linearDamping={PLAYER.LINEAR_DAMPING}
        angularDamping={PLAYER.ANGULAR_DAMPING}
        gravityScale={PLAYER.GRAVITY_SCALE}
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
          position={[0, 0, -15]}
          rotation={[0, Math.PI, 0]}
          scale={[22, 22, 22]}
        >
          <meshStandardMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={0}
          >
            <RenderTexture attach="map">
              <PerspectiveCamera
                makeDefault
                manual
                aspect={1}
                position={[0, 0, 220]}
              />

              <Text
                fontSize={34}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {`CONTROL\n     ME!`}
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </Decal>
      </mesh>
    </>
  );
}
