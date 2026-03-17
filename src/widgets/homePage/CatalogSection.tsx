import { Link } from "react-router-dom";
import { categories } from "@pages/CategoryPage/model/categories";

const CatalogSection = () => {
  const displayedCategories = categories.slice(0, 5);

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8 px-4 sm:px-8">
        Каталог
      </h2>

      <div className="grid grid-cols-3 gap-6 px-4 sm:px-8">
        {displayedCategories.map((category) => (
          <Link
            key={category.slug}
            to={`/catalog/${category.slug}`}
            className="relative h-80 overflow-hidden rounded-lg"
          >
            <img
              src={`/assets/categories/${category.image}`}
              alt={category.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-end text-white bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-sm font-semibold">
                {category.title}
              </span>
              <span>→</span>
            </div>
          </Link>
        ))}

        <Link
          to="/catalog"
          className="flex items-center justify-center h-80 rounded-lg bg-gray-100 p-4 text-center hover:bg-gray-200"
        >
          <span className="font-semibold text-gray-700">
            Посмотреть весь каталог →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CatalogSection;