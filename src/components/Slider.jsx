import React, { useState } from "react";
// import "./Slider.css"; 

function Slider() {
  const slides = [
    "/img/slide2.png", 
    "/img/slide1.png",
    "/img/slide3.png", 
    "/img/slide5.png", 
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider__link__btn">
      <div className="slider__container">
          <h1 className="slider__title">Новинки</h1>
        <div className="slider">
          <button className="btn__slide" onClick={prevSlide}>
            &lsaquo;
          </button>
          <div className="slide">
            <img className="slider__img" src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
          </div>
          <button className="btn__slide" onClick={nextSlide}>
            &rsaquo;
          </button>
        </div>
        <a href="/catalog" className="slider__btn__link">Перейти в каталог</a>
      </div>
    </div>
  );
}

export default Slider;
