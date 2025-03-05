import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://www.fitnessclothingmanufacturer.com/wp-content/uploads/2024/05/fitness-banner.png",
    "https://lendza.com/images/helpers/images/fitness%20clothing%202.jpg",
    "https://www.monstaclothing.com/cdn/shop/articles/fitness-clothing.jpg?v=1672644609&width=1100"
  ]; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="nav left" onClick={prevSlide}>&lt;</button>

      <div className="carousel-content">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      </div>

      <button className="nav right" onClick={nextSlide}>&gt;</button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
