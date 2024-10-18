import { useCallback, useState } from 'react';

  // Minimum swipe distance to trigger swipe action
  const MIN_SWIPE_DISTANCE = 50;

export const useSwipe = (onSwipe: (direction: 'left' | 'right') => void) => {
  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);

  // Handle touch start
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setStartX(e.targetTouches[0].clientX);
  }, []);

  // Handle touch move
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setEndX(e.targetTouches[0].clientX);
  }, []);

  // Handle touch end
  const handleTouchEnd = useCallback(() => {
    if (!startX || !endX) return;

    const distance = startX - endX;

    // Trigger swipe if the swipe distance is greater than the minimum
    if (Math.abs(distance) > MIN_SWIPE_DISTANCE) {
      if (distance > 0) {
        onSwipe('left'); // Swiped left
      } else {
        onSwipe('right'); // Swiped right
      }
    }

    // Reset start and end values
    setStartX(null);
    setEndX(null);
  }, [startX, endX, onSwipe]);

  // Handle mouse down
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setStartX(e.clientX);
  }, []);

  // Handle mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (startX !== null) {
      setEndX(e.clientX);
    }
  }, [startX]);

  // Handle mouse up (end of swipe)
  const handleMouseUp = useCallback(() => {
    if (!startX || !endX) return;

    const distance = startX - endX;

    if (Math.abs(distance) > MIN_SWIPE_DISTANCE) {
      if (distance > 0) {
        onSwipe('left'); // Swiped left
      } else {
        onSwipe('right'); // Swiped right
      }
    }

    // Reset start and end values
    setStartX(null);
    setEndX(null);
  }, [startX, endX, onSwipe]);

  // Return the necessary event bindings for both touch and mouse
  return {
    bind: () => ({
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
    }),
  };
};
