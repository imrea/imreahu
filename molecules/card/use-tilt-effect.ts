import { useCallback, useEffect, useRef } from 'react';

export function useTiltEffect(
  containerRef: any,
  objectRef: any,
  isEnabled: boolean
) {
  const origin = useRef({ x: 0, y: 0 });

  const updateOrigin = useCallback(() => {
    const { offsetLeft, offsetTop, offsetWidth, offsetHeight } =
      containerRef.current!;

    origin.current = {
      x: offsetLeft + Math.floor(offsetWidth / 2),
      y: offsetTop + Math.floor(offsetHeight / 2),
    };
  }, []);

  const updateTransform = useCallback((clientX?: number, clientY?: number) => {
    const { x: originX, y: originY } = origin.current;
    const X = clientX ? ((clientX - originX) / 500).toFixed(2) : 0;
    const Y = clientY ? ((clientY - originY) / 500).toFixed(2) : 0;

    objectRef.current?.style.setProperty(
      'transform',
      `rotateX(${-Y}deg) rotateY(${X}deg)`
    );
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let isActive = true;

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      isActive && updateTransform(clientX, clientY);
    };

    const handleMouseLeave = (_: MouseEvent) => updateTransform();

    updateOrigin();

    window.addEventListener('resize', updateOrigin);
    document.addEventListener('mousemove', handleMouseMove);
    // document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      isActive = false;
      window.removeEventListener('resize', updateOrigin);
      document.removeEventListener('mousemove', handleMouseMove);
      // document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isEnabled, updateOrigin, updateTransform]);
}
