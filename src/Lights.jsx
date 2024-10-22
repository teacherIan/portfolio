export default function Lights() {
  return (
    <>
      <directionalLight
        // castShadow
        position={[50, 20, -50]}
        intensity={7}
      />
      <ambientLight intensity={1} />
    </>
  );
}
