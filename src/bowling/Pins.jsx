import Pin from './Pin';

export default function Pins() {
  return (
    <group position={[50, 0, -60]}>
      <Pin loc={[-70, -8, 0]} />

      <Pin loc={[-73.5, -8, -2]} />
      <Pin loc={[-73.5, -8, 2]} />

      <Pin loc={[-76, -8, -4]} />
      <Pin loc={[-76, -8, 0]} />
      <Pin loc={[-76, -8, 4]} />

      <Pin loc={[-79, -8, -8]} />
      <Pin loc={[-79, -8, -4]} />
      <Pin loc={[-79, -8, 0]} />
      <Pin loc={[-79, -8, 4]} />
      <Pin loc={[-79, -8, 8]} />
    </group>
  );
}
