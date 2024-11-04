import CannonBall from './CannonBall';
import { useEffect, useState } from 'react';

export default function Cannon() {
  const [cannonBalls, setCannonBalls] = useState([]);

  useEffect(() => {
    const handleClick = () => {
      setCannonBalls((prevBalls) => [
        ...prevBalls,
        <CannonBall key={Math.random()} />, // Create a new CannonBall on click
      ]);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick); // Clean up the event listener
    };
  }, []);

  return <>{cannonBalls}</>;
}
