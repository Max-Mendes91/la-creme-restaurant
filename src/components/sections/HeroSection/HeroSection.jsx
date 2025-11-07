import { useState, useEffect } from 'react';
import useScrollPosition from '@/hooks/useScrollPosition';

const HeroSection = () => {
  const scrollY = useScrollPosition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable parallax on mobile to prevent gaps
  const parallaxOffset = isMobile ? 0 : scrollY * 0.5;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div
          style={{
            transform: `translateY(${parallaxOffset}px)`,
            willChange: isMobile ? 'auto' : 'transform',
            height: isMobile ? '100%' : 'auto',
            minHeight: isMobile ? '100vh' : 'auto'
          }}
        >
          <img
            src="/images/hero/hero-bg-800w.webp"
            srcSet="/images/hero/hero-bg-400w.webp 400w, /images/hero/hero-bg-800w.webp 800w, /images/hero/hero-bg-1200w.webp 1200w"
            sizes="100vw"
            alt="La Crème Restaurant"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full min-h-screen object-cover"
          />
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="overlay-gradient z-10" />

      {/* Content Layer */}
      <div className="relative z-20 container-custom py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-serif text-primary-gold text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-zoom-in" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)' }}>
            LA CRÈME
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-accent-white mb-8 max-w-2xl mx-auto animate-zoom-in animate-delay-200" style={{ textShadow: '0 3px 8px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 0.7)' }}>
            An Architecture of Taste. Reservations Secured.
          </p>

          {/* CTA Button */}
          <a href="#reservation" className="btn btn-primary btn-lg animate-zoom-in animate-delay-400">
            SECURE YOUR RESERVATION
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
