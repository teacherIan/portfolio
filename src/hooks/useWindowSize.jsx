import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export function useIsSmallScreen(breakpoint = 1400) {
  const { width } = useWindowSize();
  return width < breakpoint;
}

export function useIsMobile(breakpoint = 1000) {
  const { width } = useWindowSize();
  return width < breakpoint;
}
