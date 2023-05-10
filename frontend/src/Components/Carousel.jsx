import React, { useState, useEffect } from 'react';
import orange from '../Assets/orange.png'
import straw from '../Assets/straw.png'
import cone from '../Assets/cone.png'
import donut from '../Assets/donut.png'
import garlic from '../Assets/garlic.png'
import egg from '../Assets/egg.png'
import lemon from '../Assets/lemon.png'
import butter from '../Assets/butter.png'

const images = [
orange,
straw,
cone,
donut,
garlic,
egg,
lemon,
butter,

];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel-container carousel mx-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={index === activeIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default Carousel;
