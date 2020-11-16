import { useLayoutEffect, useState } from 'react';

export const useWindowSize = (num) => {
  const [windowSize, setWindowSize] = useState([0, 0]);
  num = num || 1;
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize([window.innerWidth / num, window.innerHeight / num]);
      console.log('resize');
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [num]);
  return windowSize;
}