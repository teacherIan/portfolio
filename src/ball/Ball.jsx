import { TextureLoader, Vector2 } from 'three';
import { useLoader } from '@react-three/fiber';
import roughMap from './ROUGH.jpg';
import ballTexture from './2k_sun.jpeg';
import normalMapTexture from './NORM.jpg';
import { RigidBody } from '@react-three/rapier';

export default function Ball() {
  const roughnessMap = useLoader(TextureLoader, roughMap);
  const texture = useLoader(TextureLoader, ballTexture);
  const normalMap = useLoader(TextureLoader, normalMapTexture);
  return (
    <>
      <RigidBody restitution={0.5} type="dynamic" colliders="ball">
        <mesh position={[42, 0, -22]}>
          <sphereGeometry args={[5]} />
          <meshPhysicalMaterial
            transparent
            map={texture}
            roughness={100}
            //   roughnessMap={roughnessMap}
            //   normalMap={normalMap}
            normalScale={new Vector2(10, 10)}
            opacity={1}
          />
        </mesh>
      </RigidBody>
    </>
  );
}
