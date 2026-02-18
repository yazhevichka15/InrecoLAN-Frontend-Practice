import { categories } from "../../entities/category/model/categories";

export const GridCatalog = () => {
  return (
    <main className="container mx-auto p-6">
      <div className="grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={`/assets/categories/${category.image}`}
              alt={category.title}
              className="w-full aspect-square object-cover"

            />

            <span className="absolute bottom-4 left-4 text-white text-sm">
              {category.title.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GridCatalog;
