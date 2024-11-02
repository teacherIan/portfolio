import { useRef, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import useWindowDimensions from '../Hooks/windowDimensions';

export default function Shooter({ mouseX, mouseY }) {
  const ballRef = useRef();

  useEffect(() => {
    requestAnimationFrame(() => {
      applyImpulse();
    });
  }, []);

  const { height, width } = useWindowDimensions();

  function applyImpulse() {
    ballRef.current.applyImpulse(
      { x: (mouseX - width / 2) / 10, y: mouseY / height, z: -5 },
      true
    );
  }

  return (
    <>
      <Html>
        <button
          style={{ color: 'blue', position: 'fixed', top: -500, left: 700 }}
          onClick={applyImpulse}
        >
          Click
        </button>
      </Html>
      <RigidBody
        canSleep={false}
        ref={ballRef}
        name={Math.random()}
        type="Dynamic"
        colliders={'ball'}
        mass={2}
        restitution={0.2}
        friction={10}
        linearDamping={1}
        angularDamping={1}
      >
        <mesh castShadow position={[-1.5, 2, 0]}>
          <sphereGeometry onClick={applyImpulse} />
          <meshNormalMaterial color="orange" />
        </mesh>
      </RigidBody>
    </>
  );
}
