// Slider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img width="1309px"src="images/1.jpg" alt="Image 1" />
      </div>
      <div>
        <img width="1309px"src="images/2.png" alt="Image 2" />
      </div>
      <div>
        <img width="1309px" src="images/3.png" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
