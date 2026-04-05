import type { IAccountMenuSection } from './IAccountMenuSection'

// Возможно, пути еще поменяются
export const AccountMenuData: IAccountMenuSection[] = [
  {
    title: 'Личная информация',
    items: [
      { id: 1, title: 'Профиль', to: '/account/settings', roles: ['admin', 'employee', 'client'] },
      { id: 2, title: 'Заказы', to: '/account/orders', roles: ['client'] },
      { id: 3, title: 'Отзывы', to: '/account/reviews', roles: ['client'] },
    ],
  },
  {
    title: 'Управление',
    items: [
      { id: 4, title: 'Товары', to: '/account/products', roles: ['employee', 'admin'] },
      { id: 5, title: 'Заказы', to: '/account/orders', roles: ['employee', 'admin'] },
      { id: 6, title: 'Статистика', to: '/account/analytics', roles: ['employee', 'admin'] },
    ],
  },
  {
    title: 'Пользователи',
    items: [
      { id: 7, title: 'Покупатели', to: '/account/users', roles: ['admin'] },
      { id: 8, title: 'Сотрудники', to: '/account/users', roles: ['admin'] },
    ],
  },
]
