import { Link } from "react-router-dom";
import type { FC } from "react";

interface ICategoryCardProps {
  category: {
    slug: string;
    title: string;
    image: string;
  };
}

const CategoryCard: FC<ICategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/catalog/${category.slug}`}
      className="relative block overflow-hidden"
    >
      <img
        src={`/assets/categories/${category.image}`}
        alt={category.title}
        className="w-full h-96 object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full px-2 py-2 text-white flex items-center justify-between">
        <span className="text-lg">
          {category.title}
        </span>

        <img
          src="/assets/Arrow.webp"
          alt="arrow"
          className="w-30 h-4"
        />
      </div>
    </Link>
  );
};

export default CategoryCard;