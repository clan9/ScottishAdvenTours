import React, { useState } from "react";
import PropTypes from "prop-types";
import { Gallery, GalleryImage } from "react-gesture-gallery";

//props passed in -> tourCode
const Slideshow = ({ tourCode }) => {
  const images = [
    `/img/${tourCode}1.jpg`,
    `/img/${tourCode}2.jpg`,
    `/img/${tourCode}3.jpg`
  ];

  const [index, setIndex] = useState(0);

  return (
    <div
      className="gallery__container"
      style={{
        position: "relative",
        height: "100%",
        width: "100%"
      }}
    >
      <Gallery
        style={{
          backgroundColor: "#2f4f4fcc",
          borderRadius: "3px"
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
        enableIndicators={true}
      >
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image}
            style={{
              width: "100%",
              height: "100%",
              padding: "0.5em",
              borderRadius: "6px"
            }}
          />
        ))}
      </Gallery>
    </div>
  );
};

Slideshow.propTypes = {
  tourCode: PropTypes.string
};

export default Slideshow;

//Automate slideshow:
/**
 * 
 * 
  useEffect(() => {
    const timer = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [index, images.length]);
 */

// Before latest changes to try and get indicators contained

/**
  * 
  * <Gallery
        style={{
          width: "90%",
          height: "100%",
          margin: "0 auto",
          backgroundColor: "rgba(0,0,0,0.6)",
          marginBottom: "3em"
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
        enableIndicators={false}
      >
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image}
            style={{
              width: "90%",
              height: "100%",
              margin: "0 auto",
              padding: "0.5em",
              borderRadius: "6px"
            }}
          />
        ))}
      </Gallery>
  */
