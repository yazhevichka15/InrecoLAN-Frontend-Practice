import { Link } from 'react-router-dom';
import ImageSlider from 'shared/ui/ImageSlider';


export const HeroSection: React.FC = () => {
  return (
    <section
  
      className="flex justify-between relative h-[80vh] items-end p-12"
    >
 
      <div className="absolute inset-0 z-[-1]">
        <ImageSlider />
      </div>

      <div className="relative">
        <h1 className="text-6xl text-white">
          Идеальный свет <br /> для вашего дома
        </h1>
        <p className="mt-4 max-w-sm text-base text-white">
          Поможем подобрать люстру под ваш <br /> интерьер, чтобы в доме было
          светло, <br /> уютно и комфортно каждый день.
        </p>
      </div>

      <Link to="/catalog" className="flex relative items-center gap-4 text-white">
        <span>Перейти в каталог</span>
        <img
          src="/assets/Arrow.webp"
          alt="Перейти в каталог"
          className="w-16"
        />
      </Link>
    </section>
  );
};
