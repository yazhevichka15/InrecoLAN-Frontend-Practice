import React, { useState } from "react";

interface IReview {
  name: string;
  text: string;
  date: string;
  rating: number;
}

const reviewsData: IReview[] = [
  {
    name: "Андрей",
    text: "Недавно сделал покупку в интернет-магазине и остался очень доволен. Доставили быстро и прямо до дома.",
    date: "01.03.2025",
    rating: 4,
  },
  {
    name: "Дмитрий",
    text: "Очень понравился выбор и качество товаров. Обязательно закажу ещё.",
    date: "15.02.2025",
    rating: 5,
  },
  {
    name: "Илья",
    text: "Хороший магазин, но доставка немного задержалась.",
    date: "10.02.2025",
    rating: 3,
  },
  {
    name: "Олег",
    text: "Классный сервис, всё пришло вовремя.",
    date: "05.02.2025",
    rating: 5,
  },
];

const ReviewsSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const visibleSlides = 2;

  const next = () => {
    if (index < reviewsData.length - visibleSlides) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(100 / visibleSlides) * index}%)`,
          }}
        >
          {reviewsData.map((review, i) => (
            <div key={i} className="w-1/2 pr-6 shrink-0">
              <div className="h-full border border-[#D6D0CC] bg-white p-8 flex flex-col justify-between">
                
                <div className="flex justify-between mb-4">
                  <span className="text-[#3A2E2A]">
                    {review.name}
                  </span>

                  <div className="text-[#3A2E2A] text-sm">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                </div>

                <p className="text-sm text-[#6F6A66] mb-6">
                  {review.text}
                </p>

                <span className="text-xs text-[#A8A29E]">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-12 right-0 flex gap-8">
        <button
          onClick={prev}
          className="text-[#8C6F63] hover:text-[#3A2E2A]"
        >
          ←
        </button>
        <button
          onClick={next}
          className="text-[#8C6F63] hover:text-[#3A2E2A]"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ReviewsSlider;