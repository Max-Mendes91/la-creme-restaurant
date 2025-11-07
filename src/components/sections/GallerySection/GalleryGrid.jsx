import PropTypes from 'prop-types';
import GalleryImage from './GalleryImage';

/**
 * GalleryGrid Component
 * Responsive grid layout for gallery images
 * Uses grid-auto-fit utility for auto-responsive columns
 */
const GalleryGrid = ({ images, onImageClick }) => {
  return (
    <div className="grid-auto-fit gap-6">
      {images.map((image, index) => (
        <GalleryImage
          key={image.id}
          image={image}
          index={index}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
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
