const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero/hero-bg.webp" type="image/webp" />
          <img
            src="/images/hero/hero-bg.jpg"
            alt="La Crème Restaurant"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Overlay Gradient */}
      <div className="overlay-gradient z-10" />

      {/* Content Layer */}
      <div className="relative z-20 container-custom py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-serif text-primary-gold text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            LA CRÈME
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-accent-white/80 mb-8 max-w-2xl mx-auto">
            An Architecture of Taste. Reservations Secured.
          </p>

          {/* CTA Button */}
          <a href="#reservation" className="btn btn-primary btn-lg">
            SECURE YOUR RESERVATION
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
