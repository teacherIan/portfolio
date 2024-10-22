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
        position={[-50, 20, 50]}
        intensity={2}
      /> */}
      <ambientLight intensity={1} />
    </>
  );
}
