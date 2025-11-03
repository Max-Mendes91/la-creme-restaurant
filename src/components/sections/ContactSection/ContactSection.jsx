import ContactInfo from './ContactInfo';
import LocationMap from './LocationMap';

const ContactSection = () => {
  return (
    <section className="section bg-accent-gray">
      <div className="container-custom">
        <h2 className="section-title">Visit Us</h2>
        <div className="divider" />

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left: Contact Info */}
          <ContactInfo />

          {/* Right: Map */}
          <LocationMap />
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <p className="text-accent-white text-lg mb-6">
            Ready to experience La Crème?
          </p>
          <a href="#reservation" className="btn btn-primary btn-lg">
            Make a Reservation
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 text-center border-t border-primary-gold/20 pt-12">
          <h3 className="text-2xl font-serif text-primary-gold mb-6">
            Follow Us
          </h3>

          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com/lacreme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-white hover:text-primary-gold transition-colors text-lg"
              aria-label="Follow us on Instagram"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com/lacreme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-white hover:text-primary-gold transition-colors text-lg"
              aria-label="Follow us on Facebook"
            >
              Facebook
            </a>

            <a
              href="https://twitter.com/lacreme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-white hover:text-primary-gold transition-colors text-lg"
              aria-label="Follow us on Twitter"
            >
              Twitter
            </a>
          </div>

          <p className="text-accent-white/60 text-sm mt-8">
            #LaCrèmeExperience
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
