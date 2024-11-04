import Pin from './Pin';

export default function Pins() {
  return (
    <group position={[150, 0, 60]}>
      <Pin loc={[-70, -8, 0]} />

      <Pin loc={[-74, -8, -2.5]} />
      <Pin loc={[-74, -8, 2.5]} />

      <Pin loc={[-78, -8, -5]} />
      <Pin loc={[-78, -8, 0]} />
      <Pin loc={[-78, -8, 5]} />

      <Pin loc={[-83, -8, -10]} />
      <Pin loc={[-83, -8, -6]} />
      <Pin loc={[-83, -8, 0]} />
      <Pin loc={[-83, -8, 6]} />
      <Pin loc={[-83, -8, 10]} />
    </group>
  );
}
