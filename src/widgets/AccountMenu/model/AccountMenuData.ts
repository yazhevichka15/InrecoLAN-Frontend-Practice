import type { IAccountMenuSection } from './IAccountMenuSection'

// Возможно, пути еще поменяются
export const AccountMenuData: IAccountMenuSection[] = [
  {
    title: 'Личная информация',
    items: [
      { id: 1, title: 'Профиль', to: '/account/settings', roles: [1, 2, 3] },
      { id: 2, title: 'Заказы', to: '/account/orders', roles: [1] },
      { id: 3, title: 'Отзывы', to: '/account/reviews', roles: [1] },
    ],
  },
  {
    title: 'Управление',
    items: [
      { id: 4, title: 'Товары', to: '/account/products', roles: [2, 3] },
      { id: 5, title: 'Заказы', to: '/account/orders', roles: [2, 3] },
      { id: 6, title: 'Статистика', to: '/account/analytics', roles: [2, 3] },
    ],
  },
  {
    title: 'Пользователи',
    items: [
      { id: 7, title: 'Покупатели', to: '/account/users', roles: [3] },
      { id: 8, title: 'Сотрудники', to: '/account/users', roles: [3] },
    ],
  },
]
