import { useMemo } from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import './ScrollingGoldenAccent.css';

/**
 * ScrollingGoldenAccent - Elegant scroll-interactive golden accent background
 *
 * Features:
 * - Dual-direction parallax: top-to-bottom AND bottom-to-top
 * - Subtle, sophisticated golden geometric elements
 * - Parallax scroll effect with different speeds for depth
 * - GPU-accelerated transforms for smooth performance
 * - Creates convergence effect in the middle of the page
 * - Maintains luxury French restaurant aesthetic
 *
 * Design approach:
 * - TOP LAYER: Moves down with scroll (from HeroSection through MenuSection)
 * - BOTTOM LAYER: Moves up with scroll (from ContactSection/ReservationForm upward)
 * - Diagonal golden lines at various angles
 * - Soft radial gradient accents
 * - Geometric shapes with low opacity
 * - Blur effects for softness
 */
const ScrollingGoldenAccent = () => {
  const scrollY = useScrollPosition();

  // Calculate parallax transforms with REDUCED factors to keep elements visible
  // Gentler movement ensures accents stay in view across all sections
  const transforms = useMemo(() => {
    // Reduced parallax factors (0.1-0.2 instead of 0.3-0.5)
    const verySlowParallax = scrollY * 0.08;
    const slowParallax = scrollY * 0.12;
    const mediumParallax = scrollY * 0.15;

    return {
      // TOP LAYER - moves down gently
      topDiagonal1: `translateY(${verySlowParallax}px) rotate(-15deg)`,
      topDiagonal2: `translateY(${slowParallax}px) rotate(25deg)`,
      topRadial1: `translateY(${mediumParallax}px) scale(${1 + scrollY * 0.00005})`,
      topRadial2: `translateY(${verySlowParallax}px) scale(${1 + scrollY * 0.00003})`,
      topGeometric: `translateY(${slowParallax}px) rotate(${scrollY * 0.01}deg)`,

      // BOTTOM LAYER - moves up gently (reverse)
      bottomDiagonal1: `translateY(${-verySlowParallax}px) rotate(15deg)`,
      bottomDiagonal2: `translateY(${-slowParallax}px) rotate(-25deg)`,
      bottomRadial1: `translateY(${-mediumParallax}px) scale(${1 + scrollY * 0.00005})`,
      bottomRadial2: `translateY(${-verySlowParallax}px) scale(${1 + scrollY * 0.00003})`,
      bottomGeometric: `translateY(${-slowParallax}px) rotate(${-scrollY * 0.01}deg)`,

      // MIDDLE LAYER - minimal movement to stay visible in mid-sections
      middleDiagonal: `translateY(${scrollY * 0.05}px) rotate(-10deg)`,
      middleRadial: `scale(${1 + scrollY * 0.00002})`,
    };
  }, [scrollY]);

  return (
    <div className="scrolling-golden-accent" aria-hidden="true">
      {/* TOP LAYER - Moves DOWN with scroll (upper sections) */}
      <div className="accent-layer top-layer">
        <div
          className="accent-element diagonal-line diagonal-line-1"
          style={{ transform: transforms.topDiagonal1 }}
        />
        <div
          className="accent-element diagonal-line diagonal-line-2"
          style={{ transform: transforms.topDiagonal2 }}
        />
        <div
          className="accent-element radial-gradient radial-gradient-1"
          style={{ transform: transforms.topRadial1 }}
        />
        <div
          className="accent-element geometric-pattern geometric-pattern-top"
          style={{ transform: transforms.topGeometric }}
        />
      </div>

      {/* MIDDLE LAYER - Minimal movement for consistent visibility in Gallery/Menu */}
      <div className="accent-layer middle-layer">
        <div
          className="accent-element diagonal-line diagonal-line-middle"
          style={{ transform: transforms.middleDiagonal }}
        />
        <div
          className="accent-element radial-gradient radial-gradient-middle-left"
          style={{ transform: transforms.middleRadial }}
        />
        <div
          className="accent-element radial-gradient radial-gradient-middle-right"
          style={{ transform: transforms.middleRadial }}
        />
      </div>

      {/* BOTTOM LAYER - Moves UP with scroll (lower sections - Contact/Reservation) */}
      <div className="accent-layer bottom-layer">
        <div
          className="accent-element diagonal-line diagonal-line-3"
          style={{ transform: transforms.bottomDiagonal1 }}
        />
        <div
          className="accent-element diagonal-line diagonal-line-4"
          style={{ transform: transforms.bottomDiagonal2 }}
        />
        <div
          className="accent-element radial-gradient radial-gradient-2"
          style={{ transform: transforms.bottomRadial1 }}
        />
        <div
          className="accent-element radial-gradient radial-gradient-bottom-extra"
          style={{ transform: transforms.bottomRadial2 }}
        />
        <div
          className="accent-element geometric-pattern geometric-pattern-bottom"
          style={{ transform: transforms.bottomGeometric }}
        />
      </div>
    </div>
  );
};

export default ScrollingGoldenAccent;
