export default function Lights() {
  return (
    <>
      <directionalLight
        // castShadow
        position={[50, 20, -50]}
        intensity={2}
      />
      <directionalLight
        // castShadow
        position={[-50, 20, -50]}
        intensity={2}
      />
      {/* <directionalLight
        // castShadow
        position={[-50, 100, 10]}
        intensity={0.4}
      /> */}
      <ambientLight intensity={0} />
    </>
  );
}
