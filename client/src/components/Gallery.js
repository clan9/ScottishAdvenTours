import React from "react";
import PropTypes from "prop-types";

const Gallery = ({ tourCode }) => {
  return (
    <div className="gallery">
      <img
        className="gallery__image gallery__image--1"
        src={`/img/${tourCode}1.jpg`}
        alt="Tour pic 1"
      />

      <img
        className="gallery__image gallery__image--2"
        src={`/img/${tourCode}2.jpg`}
        alt="Tour pic 2"
      />

      <img
        className="gallery__image gallery__image--3"
        src={`/img/${tourCode}3.jpg`}
        alt="Tour pic 3"
      />
    </div>
  );
};

Gallery.propTypes = {
  tourCode: PropTypes.string
};

export default Gallery;
