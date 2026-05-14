export interface IProduct {
  id: string
  image: string
  title: string
  price: number
  status: 'in-cart' | 'not-in-cart' | 'out-of-stock'
  badge: string
  oldPrice: number | null
}
