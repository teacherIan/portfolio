export default function Lights() {
  return (
    <>
      {/* <directionalLight
        castShadow
        position={[50, 40, -100]}
        intensity={3}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-far={5000}
        shadow-camera-left={-1000}
        shadow-camera-right={1000}
        shadow-camera-top={1000}
        shadow-camera-bottom={-100}
      /> */}
      {/* Add a helper to visualize the shadow camera */}
      {/* <cameraHelper args={[directionalLight.shadow.camera]} /> */}
      <directionalLight
        castShadow
        position={[50, 40, -100]}
        intensity={10}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-far={5000}
        shadow-camera-left={-1000}
        shadow-camera-right={1000}
        shadow-camera-top={1000}
        shadow-camera-bottom={-100}
      />
      <ambientLight intensity={2} />
    </>
  );
}
