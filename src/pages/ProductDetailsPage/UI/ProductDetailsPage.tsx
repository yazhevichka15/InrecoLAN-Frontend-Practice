import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../model/products";
import ReviewsSlider from "@shared/ui/ReviewsSlider";

export const ProductDetailsPage = () => {
  const { category, product } = useParams<{
    category: string;
    product: string;
  }>();

  const currentProduct = products.find(
    (item) =>
      item.slug === product && item.category === category
  );

  const [activeImage, setActiveImage] = useState(0);

  if (!currentProduct) {
    return <div className="p-10">Товар не найден</div>;
  }

  return (
    <div className="w-full max-w-[1600px] mx-auto px-10 py-10">
      <div className="grid grid-cols-[1.2fr_1fr] gap-20 items-stretch">
        
        <div className="flex flex-col">
          <div className="w-full h-[650px] flex items-center justify-center mb-4 border">
            <img
              src={currentProduct.images[activeImage]}
              alt={currentProduct.title}
              className="max-h-full object-contain"
            />
          </div>

          <div className="flex gap-4">
            {currentProduct.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setActiveImage(index)}
                className={`w-28 h-20 object-cover cursor-pointer border ${
                  activeImage === index ? "border-2" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col h-[650px]">
          <div>
            <h1 className="text-3xl mb-4">
              {currentProduct.title}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 border text-sm">
                {currentProduct.brand}
              </span>

              <span className="text-sm">
                Код товара: {currentProduct.slug}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-2xl">
                {currentProduct.price.toLocaleString()} ₽
              </div>

              {currentProduct.oldPrice && (
                <div className="line-through">
                  {currentProduct.oldPrice.toLocaleString()} ₽
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <button className="border px-8 py-3 bg-black text-white cursor-pointer">
                В корзину
              </button>

              <div className="text-sm border px-4 py-2">
                В наличии: {currentProduct.stock} шт.
              </div>
            </div>

            <p className="mb-6">
              {currentProduct.description}
            </p>
          </div>

          <div className="flex flex-col flex-1 justify-between">
            <div>
              <h2 className="text-xl mb-4">
                Отзывы
              </h2>

              <div className="flex flex-col gap-4">
                {currentProduct.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <span>{review.author}</span>
                      <span>{"★".repeat(review.rating)}</span>
                    </div>

                    <div className="text-sm mb-2">
                      {review.date}
                    </div>

                    <div>{review.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <button className="border px-6 py-3 mt-4 cursor-pointer">
              Добавить отзыв
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-xl mb-6">
          Конструктивные характеристики
        </h2>

        <div className="border-t divide-y">
          {Object.entries(currentProduct.specs).map(
            ([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-3"
              >
                <span>{key}</span>
                <span>{value}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl mb-6">
          Эксплуатационные характеристики
        </h2>

        <div className="border-t divide-y">
          {Object.entries(currentProduct.usageSpecs).map(
            ([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-3"
              >
                <span>{key}</span>
                <span>{value}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};