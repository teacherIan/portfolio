import { useGLTF } from '@react-three/drei';

export default function A() {
  const I = useGLTF('./A.glb');

  return (
    <>
      <primitive object={I.scene} scale={0.25} />
    </>
  );
}
