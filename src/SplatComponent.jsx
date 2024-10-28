import { OrbitControls, Splat, Box } from '@react-three/drei';
import splat from './assets/my_splat.splat';
import { EffectComposer, ToneMapping } from '@react-three/postprocessing';

function SplatComponent() {
  <EffectComposer>
    <ToneMapping />
  </EffectComposer>;
  return (
    <>
      <Splat
        // alphaHash
        alphaTest={0.1}
        chunkSize={256}
        position={[60, -12, -42]}
        scale={20}
        src={splat}
      />
    </>
  );
}

export default SplatComponent;
