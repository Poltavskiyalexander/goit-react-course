import React, { Component } from 'react';

const ImageGalleryItem = ({ imgData, imageClickHendler, index }) => {
  const clickHandler = () => {
    imageClickHendler(index);
  };
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          onClick={clickHandler}
          src={imgData.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    </>
  );
};
export default ImageGalleryItem;
