import React, { useState } from "react";
import "../styles/Carousel.css"; // Import the external CSS file
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"; // ✅ Correct import

const images = [
  "/mamisincancer1.png",
  "/mamisincancer2.png",
  "/mamisincancer3.png",
  "/mamisincancer4.png",
  "/mamisincancer5.png",
];

export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      {/* Left Arrow */}
      <button className="carousel-arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      {/* Image Slides */}
      <div className="carousel-wrapper">
        {images.map((src, index) => {
          const offset = (index - currentIndex + images.length) % images.length;

          return (
            (offset === 0 || offset === 1 || offset === images.length - 1) && ( // ✅ Only show the center + two side slides
              <div
                key={index}
                className={`carousel-slide ${
                  offset === 0 ? "active" : offset === 1 ? "right" : "left"
                }`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
              </div>
            )
          );
        })}
      </div>

      {/* Right Arrow */}
      <button className="carousel-arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};
