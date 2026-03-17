import ReviewsSlider from "@shared/ui/ReviewsSlider";

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-[#F8F6F4]">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="mb-12 flex items-center gap-3">
          <h2 className="text-sm tracking-widest text-[#3A2E2A]">
            ОТЗЫВЫ
          </h2>
        </div>

        <div className="mb-20">
          <ReviewsSlider />
        </div>

        <div className="flex justify-between items-end">
          <div className="text-[#3A2E2A]">
            <p className="text-2xl">Посетили наш магазин?</p>
            <p className="text-2xl">Оставьте свой отзыв</p>
            <p className="text-2xl">на Яндекс картах</p>
          </div>

          <a
            href="#"
            className="flex items-center gap-6 text-[#8C6F63] group"
          >
            <span className="text-sm">Яндекс Карты</span>
            <span className="w-16 h-px bg-[#8C6F63] group-hover:bg-[#3A2E2A]" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;