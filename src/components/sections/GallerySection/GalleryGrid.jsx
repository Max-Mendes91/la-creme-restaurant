import { useState } from 'react';
import PropTypes from 'prop-types';
import GalleryImage from './GalleryImage';

/**
 * GalleryGrid Component
 * Responsive layout for gallery images
 * Mobile: Horizontal scrollable carousel with snap points and pagination dots
 * Desktop: Grid layout with auto-fit columns
 */
const GalleryGrid = ({ images, onImageClick }) => {
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  // Track scroll position for pagination dots
  const handleMobileScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollLeft / (width * 0.85));
    setCurrentMobileIndex(index);
  };

  return (
    <>
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden">
        <div
          className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          onScroll={handleMobileScroll}
        >
          <div className="flex gap-4 px-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="shrink-0 w-[85vw] sm:w-[70vw] snap-center"
              >
                <GalleryImage
                  image={image}
                  index={index}
                  onClick={() => onImageClick(image)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentMobileIndex
                  ? 'bg-primary-gold w-6'
                  : 'bg-accent-white/30 w-2'
              }`}
              aria-label={`Image ${index + 1} of ${images.length}`}
              role="progressbar"
              aria-valuenow={index === currentMobileIndex ? 100 : 0}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => onImageClick(images[0])}
            className="btn btn-secondary"
          >
            View All Gallery ({images.length} Photos)
          </button>
        </div>
      </div>

      {/* Desktop: Grid (current) */}
      <div className="hidden md:grid grid-auto-fit gap-6">
        {images.map((image, index) => (
          <GalleryImage
            key={image.id}
            image={image}
            index={index}
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
    </>
  );
};

GalleryGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default GalleryGrid;
