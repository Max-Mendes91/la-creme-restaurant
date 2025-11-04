import PropTypes from 'prop-types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

/**
 * GalleryImage Component
 * Individual gallery image with hover effects and category overlay
 * Features lazy loading for performance
 */
const GalleryImage = ({ image, onClick, index }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${image.alt}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="aspect-square object-cover w-full transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover Overlay with Category */}
      <div className="absolute inset-0 bg-primary-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-primary-gold font-serif text-xl">
          {image.category}
        </p>
      </div>
    </div>
  );
};

GalleryImage.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default GalleryImage;
