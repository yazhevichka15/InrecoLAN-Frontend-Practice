import { Link } from "react-router-dom";
import type { FC } from "react";

interface CategoryCardProps {
  category: {
    slug: string;
    title: string;
    image: string;
  };
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
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

  <div className="absolute flex items-end justify-between p-4 text-white">
    <span className="font-semibold text-lg">
      {category.title}
    </span>
    <span className="text-lg">→</span>
  </div>
</Link>
  );
};

export default CategoryCard;