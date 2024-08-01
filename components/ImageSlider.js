

import { useState } from 'react';
 

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    const totalSlides = images.length;
    let newSlide = currentSlide + direction;

    if (newSlide >= totalSlides) {
      newSlide = 0;
    } else if (newSlide < 0) {
      newSlide = totalSlides - 1;
    }

    setCurrentSlide(newSlide);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={() => changeSlide(-1)}>
        Previous
      </button>
      <button className={styles.next} onClick={() => changeSlide(1)}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
