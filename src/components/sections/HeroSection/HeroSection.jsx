import useScrollPosition from '@/hooks/useScrollPosition';

const HeroSection = () => {
  const scrollY = useScrollPosition();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div style={{ transform: `translateY(${scrollY * 0.5}px)`, willChange: 'transform' }}>
          <img
            src="/images/hero/hero-bg-800w.webp"
            srcSet="/images/hero/hero-bg-400w.webp 400w, /images/hero/hero-bg-800w.webp 800w, /images/hero/hero-bg-1200w.webp 1200w"
            sizes="100vw"
            alt="La Crème Restaurant"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="overlay-gradient z-10" />

      {/* Content Layer */}
      <div className="relative z-20 container-custom py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-serif text-primary-gold text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in">
            LA CRÈME
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-accent-white/80 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-200">
            An Architecture of Taste. Reservations Secured.
          </p>

          {/* CTA Button */}
          <a href="#reservation" className="btn btn-primary btn-lg animate-fade-in animate-delay-400">
            SECURE YOUR RESERVATION
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
