import { useState } from 'react';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';
import { GALLERY_IMAGES } from '@/constants/gallery';

/**
 * GallerySection Component
 * Displays a responsive image gallery with modal lightbox
 * Week 2: Structure only, no animations
 */
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section bg-accent-gray">
      <div className="container-custom">
        <h2 className="section-title">Our Gallery</h2>
        <div className="divider" />

        <GalleryGrid
          images={GALLERY_IMAGES}
          onImageClick={openModal}
        />

        {isModalOpen && (
          <GalleryModal
            image={selectedImage}
            onClose={closeModal}
            images={GALLERY_IMAGES}
          />
        )}
      </div>
    </section>
  );
};

export default GallerySection;
