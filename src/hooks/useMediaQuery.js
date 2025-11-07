import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive breakpoint detection
 *
 * Usage:
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 *
 * // Predefined breakpoints
 * const isMobile = useMediaQuery(BREAKPOINTS.mobile);
 * const isTablet = useMediaQuery(BREAKPOINTS.tablet);
 *
 * Features:
 * - Works with any valid CSS media query
 * - Proper cleanup of event listeners
 * - SSR-safe (returns false on server)
 * - Efficient event listener management
 *
 * @param {string} query - CSS media query string
 * @returns {boolean} Whether the media query matches
 */
const useMediaQuery = (query) => {
  // Initialize with false to avoid hydration mismatches in SSR
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    // Create media query list
    const mediaQueryList = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Handler for media query changes
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Modern browsers support addEventListener
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange);

      // Cleanup
      return () => {
        mediaQueryList.removeEventListener('change', handleChange);
      };
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(handleChange);

      // Cleanup
      return () => {
        mediaQueryList.removeListener(handleChange);
      };
    }
  }, [query]);

  return matches;
};

/**
 * Predefined breakpoints matching Tailwind CSS defaults
 * Use these constants for consistency across the application
 */
export const BREAKPOINTS = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

export default useMediaQuery;
