import React from 'react';

const ImageBox = ({ image, descriptions }) => {
  return <img src={image} alt={descriptions} />;
};

export default ImageBox;
