import ReviewsSlider from "@shared/ui/ReviewsSlider";

const ReviewsSection = () => {
  return (
    <section className="py-20">
      <div className="w-full px-6 pl-14">

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">
            Отзывы
          </h2>
        </div>

        <div className="mb-20">
          <ReviewsSlider />
        </div>

        <div className="flex justify-between items-end">
          <div className="text-[#3A2E2A]">
            <p className="text-2xl text-footer-list">Посетили наш магазин?</p>
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