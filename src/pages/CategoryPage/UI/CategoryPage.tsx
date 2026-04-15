import { categories } from "../model/categories-data";
import CategoryCard from "@pages/CatalogPage/UI/CategoryCard";

const CategoryPage = () => {
  return (
    <section className="container mx-auto px-4 py-16">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;