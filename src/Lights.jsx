export default function Lights() {
  return (
    <>
      <directionalLight
        // castShadow
        position={[50, 40, -100]}
        intensity={9}
      />
      <ambientLight intensity={1} />
    </>
  );
}
