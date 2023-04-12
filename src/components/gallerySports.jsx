import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    {src: require('./img/basket.jpg')},
    {src: require('./img/gym.jpg')},
    {src: require('./img/basket1.jpg')},
    {src: require('./img/equipo.jpg')},
    // Agrega más imágenes aquí según sea necesario
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3500);

    return () => {
      clearTimeout(timer);
    }
  }, [currentIndex, images]);

  return (
    <div>
      {images.length > 0 && (
        <div>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
