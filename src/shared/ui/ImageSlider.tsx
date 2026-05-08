import React, { useState, useEffect } from 'react';

interface ISlide {
  image: string;
}

const SliderData: ISlide[] = [
  { image: "public/assets/Placeholder1.webp" },
  { image: "public/assets/Placeholder2.webp" },
  { image: "public/assets/Placeholder3.webp" },
  { image: "public/assets/Placeholder4.webp"},
];

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = SliderData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide === length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {
        SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
            </div>
          )
        })
      }
    </div>
  );
};

export default ImageSlider;
