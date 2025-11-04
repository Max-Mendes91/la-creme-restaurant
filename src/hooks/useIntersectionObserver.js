import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element is visible in the viewport
 *
 * Usage:
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
 *
 * <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
 *   Content
 * </div>
 *
 * Features:
 * - Configurable threshold and rootMargin
 * - Option to trigger only once (default)
 * - Proper cleanup of observer
 * - Returns both ref and visibility state
 *
 * @param {Object} options - Intersection Observer options
 * @param {number|number[]} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root element
 * @param {boolean} options.triggerOnce - Whether to trigger only once (default: true)
 * @param {Element} options.root - Root element for intersection (default: viewport)
 * @returns {[React.RefObject, boolean]} Array with ref and isVisible state
 */
const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  root = null,
} = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Early return if element doesn't exist or Intersection Observer is not supported
    if (!element || !('IntersectionObserver' in window)) {
      return;
    }

    // Callback function for intersection changes
    const handleIntersection = (entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setIsVisible(true);

        // If triggerOnce is true, unobserve after first intersection
        if (triggerOnce && observerRef.current) {
          observerRef.current.unobserve(element);
        }
      } else if (!triggerOnce) {
        // If not trigger once, allow element to become invisible again
        setIsVisible(false);
      }
    };

    // Create Intersection Observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
      root,
    });

    // Start observing
    observerRef.current.observe(element);

    // Cleanup function
    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, root]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;
