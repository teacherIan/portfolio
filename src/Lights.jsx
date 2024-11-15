export default function Lights() {
  return (
    <>
      <directionalLight
        // castShadow
        position={[0, 20, 0]}
        intensity={2}
        // shadow-mapSize-width={2046} // Large shadow map width
        // shadow-mapSize-height={2046} // Large shadow map height
        // shadow-camera-near={0.5} // Near plane
        // shadow-camera-far={300} // Far plane
        // shadow-camera-left={-300} // Left plane
        // shadow-camera-right={200} // Right plane
        // shadow-camera-top={400} // Top plane
        // shadow-camera-bottom={-300} // Bottom plane
      />

      <ambientLight intensity={1} />
    </>
  );
}
