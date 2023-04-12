import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    {src: require('./img/gamesImg/games1.jpg')},
    {src: require('./img/gamesImg/games2.jpg')},
    {src: require('./img/gamesImg/games3.jpg')},
    {src: require('./img/gamesImg/games4.jpg')},
    {src: require('./img/gamesImg/games5.jpg')},
    {src: require('./img/gamesImg/games6.jpg')},
    {src: require('./img/gamesImg/games7.jpg')},
    {src: require('./img/gamesImg/games8.jpg')},
    {src: require('./img/gamesImg/games9.jpg')},
    {src: require('./img/gamesImg/games10.jpg')},
    {src: require('./img/gamesImg/games11.jpg')},
    {src: require('./img/gamesImg/games12.jpg')},
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

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