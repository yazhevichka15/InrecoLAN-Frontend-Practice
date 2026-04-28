export interface IProduct {
  image: string
  title: string
  price: string
  status: 'in-cart' | 'not-in-cart' | 'out-of-stock'
  badge: string
  oldPrice: string
}
