import React, { useEffect, useState } from "react";
import "../styles/Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getSlideClass = (index: number) => {
    if (index === currentIndex) return "active";
    if (index === (currentIndex + 1) % images.length) return "right";
    if (index === (currentIndex - 1 + images.length) % images.length)
      return "left";
    return "hidden"; // important: we still render it for animation continuity
  };

  return (
    <div className="carousel-container">
      <div className="carousel-arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </div>

      <div className="carousel-wrapper">
        {images.map((src, index) => (
          <div key={index} className={`carousel-slide ${getSlideClass(index)}`}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      <div className="carousel-arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </div>
    </div>
  );
};
