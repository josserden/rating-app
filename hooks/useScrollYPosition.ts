import { useEffect, useState } from 'react';

export const useScrollYPosition = (): number => {
  const [scrollY, setScrollY] = useState<number>(0);
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(isBrowser ? window.pageYOffset : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBrowser]);

  return scrollY;
};
