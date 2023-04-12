import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    {src: require('./img/me.jpg')},
    {src: require('./img/lilMe.jpg')},
    {src: require('./img/me2.jpg')},
    {src: require('./img/me4.jpg')},
    {src: require('./img/me5.jpg')},
    {src: require('./img/me6.jpg')},
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
