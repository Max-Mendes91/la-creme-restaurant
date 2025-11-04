import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll position
 *
 * Usage:
 * const scrollY = useScrollPosition();
 *
 * Features:
 * - Passive event listener for better performance
 * - Throttled updates to prevent excessive re-renders
 * - Proper cleanup on unmount
 *
 * @returns {number} Current vertical scroll position in pixels
 */
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Track if component is mounted to prevent state updates after unmount
    let mounted = true;
    let ticking = false;

    const updateScrollPosition = () => {
      if (mounted) {
        setScrollY(window.scrollY);
      }
      ticking = false;
    };

    const handleScroll = () => {
      // Use requestAnimationFrame for smooth, throttled updates
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    // Set initial scroll position
    setScrollY(window.scrollY);

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      mounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};

export default useScrollPosition;
