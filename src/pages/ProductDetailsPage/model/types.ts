export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;

  price: number;
  oldPrice?: number;

  description: string;
  images: string[];

  category: string;
  stock: number;

  specs: Record<string, string>;
  usageSpecs: Record<string, string>;

  reviews: {
    id: string;
    author: string;
    text: string;
    rating: number;
    date: string;
  }[];
}