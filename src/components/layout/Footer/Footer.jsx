import PropTypes from 'prop-types';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const restaurantInfo = {
    hours: {
      weekday: 'Mon-Thu: 11:00 AM - 10:00 PM',
      weekend: 'Fri-Sun: 11:00 AM - 11:00 PM',
    },
    contact: {
      phone: '(555) 123-4567',
      email: 'info@lacreme.com',
      address: '123 Gourmet Street, Culinary District, CA 90210',
    },
  };

  const navigationLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Menu', path: '#menu' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Reservations', path: '#reservations' },
    { name: 'Contact', path: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: 'facebook' },
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Yelp', url: '#', icon: 'yelp' },
  ];

  return (
    <footer className="bg-primary-black text-accent-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-primary-gold text-lg font-semibold mb-4">La Crème</h3>
            <p className="text-accent-white/80 text-sm mb-2">
              Experience fine dining at its best
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-accent-white/60 text-sm">{restaurantInfo.hours.weekday}</p>
              <p className="text-accent-white/60 text-sm">{restaurantInfo.hours.weekend}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-primary-gold text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-accent-white/80 text-sm">
                <span className="text-accent-white/60">Phone:</span>{' '}
                <a
                  href={`tel:${restaurantInfo.contact.phone}`}
                  className="hover:text-primary-gold transition-colors duration-200"
                >
                  {restaurantInfo.contact.phone}
                </a>
              </p>
              <p className="text-accent-white/80 text-sm">
                <span className="text-accent-white/60">Email:</span>{' '}
                <a
                  href={`mailto:${restaurantInfo.contact.email}`}
                  className="hover:text-primary-gold transition-colors duration-200"
                >
                  {restaurantInfo.contact.email}
                </a>
              </p>
              <p className="text-accent-white/80 text-sm">
                <span className="text-accent-white/60">Address:</span>{' '}
                {restaurantInfo.contact.address}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-primary-gold text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block text-accent-white/80 text-sm hover:text-primary-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-primary-gold text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-accent-gray-light flex items-center justify-center hover:border-primary-gold hover:bg-primary-gold/10 transition-all duration-200"
                >
                  <span className="text-accent-white/80 hover:text-primary-gold text-sm font-semibold">
                    {social.icon.charAt(0).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-accent-white/60 text-xs mt-6">
              Connect with us on social media for updates, special offers, and behind-the-scenes content.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-gray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent-white/60 text-sm text-center md:text-left">
              &copy; {currentYear} La Crème. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-accent-white/60 text-sm hover:text-primary-gold transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-accent-white/60 text-sm hover:text-primary-gold transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
