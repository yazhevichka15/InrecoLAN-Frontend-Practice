import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: {
    slug: string;
    title: string;
    image: string;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
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

      <div className="h-3 absolute bottom-5 left-4 text-white font-semibold text-lg">
        {category.title}
      </div>

      <div className="absolute bottom-0.5 right-4 text-white text-lg">
        →
      </div>
    </Link>
  );
};

export default CategoryCard;