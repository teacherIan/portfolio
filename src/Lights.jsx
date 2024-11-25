export default function Lights() {
  return (
    <>
      <directionalLight
        // castShadow
        position={[0, 20, 0]}
        intensity={2}
      />
      <directionalLight
        // castShadow
        position={[-100, 5, -100]}
        intensity={1}
      />

      <ambientLight intensity={1} />
    </>
  );
}
