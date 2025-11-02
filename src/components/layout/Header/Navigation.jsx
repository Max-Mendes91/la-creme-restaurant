import { useState } from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ className = '' }) => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'menu', label: 'Menu', href: '#menu' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'reservations', label: 'Reservations', href: '#reservations' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleClick = (e, id, href) => {
    e.preventDefault();
    setActiveLink(id);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e, id, href) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e, id, href);
    }
  };

  return (
    <nav className={className} aria-label="Main navigation">
      <ul className="flex items-center space-x-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.id, link.href)}
              onKeyDown={(e) => handleKeyDown(e, link.id, link.href)}
              className={`
                text-base font-medium transition-all duration-300 relative
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold
                focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black rounded-sm px-2 py-1
                ${
                  activeLink === link.id
                    ? 'text-primary-gold'
                    : 'text-accent-white hover:text-primary-gold'
                }
              `}
              aria-current={activeLink === link.id ? 'page' : undefined}
            >
              {link.label}
              {/* Active indicator */}
              <span
                className={`
                  absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold
                  transition-transform duration-300 origin-left
                  ${activeLink === link.id ? 'scale-x-100' : 'scale-x-0'}
                `}
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
