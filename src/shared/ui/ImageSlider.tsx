import React, { useState, useEffect } from 'react';

interface ISlide {
  image: string;
}

const sliderData: ISlide[] = [
  { image: "/assets/Placeholder1.webp" },
  { image: "/assets/Placeholder2.webp" },
  { image: "/assets/Placeholder3.webp" },
  { image: "/assets/Placeholder4.webp" },
];

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;