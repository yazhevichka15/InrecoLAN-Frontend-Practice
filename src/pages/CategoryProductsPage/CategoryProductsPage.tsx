import { useParams } from 'react-router-dom'
import { CategoryProductItem } from '@widgets/CategoryProductItem'

const categories = [
  { id: 'chandeliers', name: 'Люстры' },
  { id: 'lamps', name: 'Светильники' },
  { id: 'sconces', name: 'Бра' },
  { id: 'spotlights', name: 'Точечные светильники' },
  { id: 'backlights', name: 'Подсветки' },
  { id: 'table-lamps', name: 'Настольные лампы' },
  { id: 'floor-lamps', name: 'Торшеры' },
  { id: 'track-systems', name: 'Трековые системы' },
  { id: 'night-lamps', name: 'Ночники' },
  { id: 'outdoor-lamps', name: 'Уличные светильники' },
  { id: 'accessories', name: 'Комплектующие' },
]

export function CategoryProductsPage() {
  const params = useParams()
  const currentCategory = categories.find((cat) => cat.id == params.category)

  return (
    <div className='pt-50px pb-100px'>
      <h2 className='mb-30px'>{currentCategory?.name}</h2>
      <div className='flex flex-col gap-base'>
        <CategoryProductItem
          title='Люстра ARM337-07-R кремовый с золотом'
          price='32990'
          inStock={23}
          inStore={2}
          image='/assets/products/chandelier-1.webp'
        />
        <CategoryProductItem
          title='Люстра ARM337-07-R кремовый с золотом'
          price='32990'
          inStock={23}
          inStore={2}
          image='/assets/products/chandelier-1.webp'
        />
      </div>
    </div>
  )
}
