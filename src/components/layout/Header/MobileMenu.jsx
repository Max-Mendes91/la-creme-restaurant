import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

const MobileMenu = ({ isOpen, onClose }) => {
  const [activeLink, setActiveLink] = useState('home');
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'menu', label: 'Menu', href: '#menu' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'reservations', label: 'Reservations', href: '#reservations' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Focus management
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isOpen]);

  // Trap focus within mobile menu when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        const focusableElements = menuRef.current?.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (e, id, href) => {
    e.preventDefault();
    setActiveLink(id);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    onClose();
  };

  const handleReserveClick = () => {
    const target = document.querySelector('#reservations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`
          fixed top-0 right-0 bottom-0 w-full max-w-sm bg-primary-black z-50 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          border-l border-accent-gray-light
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-accent-gray-light">
            <span className="text-2xl font-serif font-bold text-primary-gold">
              La Crème
            </span>
            <button
              onClick={onClose}
              className="p-2 text-accent-white hover:text-primary-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold rounded-sm"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <a
                    ref={index === 0 ? firstLinkRef : null}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id, link.href)}
                    className={`
                      block px-4 py-3 rounded-sm text-lg font-medium transition-all duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold
                      ${
                        activeLink === link.id
                          ? 'text-primary-gold bg-accent-gray'
                          : 'text-accent-white hover:text-primary-gold hover:bg-accent-gray'
                      }
                    `}
                    aria-current={activeLink === link.id ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-accent-gray-light">
            <Button
              variant="primary"
              size="lg"
              onClick={handleReserveClick}
              className="w-full"
            >
              Reserve Table
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
