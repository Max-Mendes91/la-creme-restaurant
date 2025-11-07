import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * GalleryModal Component
 * Full-screen modal lightbox with keyboard navigation
 * Features: ESC to close, arrow keys for navigation, click outside to close
 */
const GalleryModal = ({ image, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(
    images.findIndex((img) => img.id === image.id)
  );

  const currentImage = images[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-black/95">
      {/* Backdrop - Click to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close modal"
        role="button"
        tabIndex={0}
      />

      {/* Modal Content */}
      <div className="relative z-10 max-w-5xl w-full px-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-accent-white hover:text-primary-gold transition-colors text-4xl z-20"
          aria-label="Close gallery"
        >
          ×
        </button>

        {/* Image */}
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-auto max-h-[80vh] object-contain rounded-sm"
        />

        {/* Image Info */}
        <div className="text-center mt-4">
          <p className="text-accent-white text-lg">{currentImage.alt}</p>
          <p className="text-primary-gold text-sm mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-white hover:text-primary-gold text-5xl transition-colors"
          aria-label="Previous image"
        >
          ‹
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-white hover:text-primary-gold text-5xl transition-colors"
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
};

GalleryModal.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GalleryModal;
