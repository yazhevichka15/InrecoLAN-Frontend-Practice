import type { IProduct } from '../model/IProduct'

export function getProducts(): IProduct[] {
  return [
    {
      id: 'ch-001',
      image: '/assets/products/chandelier-1.webp',
      title: 'Люстра ARM337-07-R кремовый с золотом',
      price: 32990,
      status: 'not-in-cart',
      badge: '',
      oldPrice: null,
    },
    {
      id: 'ch-002',
      image: '/assets/products/chandelier-2.webp',
      title: 'Люстра ARM013-08-W белый антик',
      price: 51990,
      status: 'not-in-cart',
      badge: 'Новинка',
      oldPrice: null,
    },
    {
      id: 'ch-003',
      image: '/assets/products/chandelier-3.webp',
      title: 'Люстра 07512-3.33 матовое золото',
      price: 6230,
      status: 'not-in-cart',
      badge: '-30%',
      oldPrice: 8900,
    },
    {
      id: 'ch-004',
      image: '/assets/products/chandelier-4.webp',
      title: 'Люстра 07874-80,33 золото',
      price: 6230,
      status: 'out-of-stock',
      badge: '',
      oldPrice: null,
    },
  ]
}
