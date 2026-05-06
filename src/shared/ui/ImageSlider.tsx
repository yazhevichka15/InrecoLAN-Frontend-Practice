import React, { useState, useEffect } from "react";

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
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="grid w-full h-full">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`row-start-1 col-start-1 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
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
    </div>
  );
};

export default ImageSlider;