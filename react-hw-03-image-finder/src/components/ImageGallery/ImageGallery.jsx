import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, imageClickHendler }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => {
        return (
          <ImageGalleryItem
            imageClickHendler={imageClickHendler}
            key={image.id}
            imgData={image}
            index={index}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
