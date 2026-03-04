// Заглушка
// import { useParams } from "react-router"; - для динамического отображения
// import { useSearchParams } from 'react-router-dom'; - для запроса с отображением фильтров, сортировок, поиска

import { FiltersSidebar } from '@widgets/FiltersSidebar'
import { SubHeader } from '@widgets/SubHeader'
import { Header } from '@widgets/Header'
import { ProductCard } from '@shared/ui/ProductCard'
import { SortSelect } from '@shared/ui/SortSelect/SortSelect'

const selectItems = [
  { value: '-', title: 'Без сортировки' },
  { value: 'cheap', title: 'Сначала дешёвые' },
  { value: 'expensive', title: 'Сначала дорогие' },
]

const chandeliersItems = [
  {
    image: '/public/assets/products/chandelier-1.webp',
    title: 'Люстра ARM337-07-R кремовый с золотом',
    price: '32990',
    status: 'not-in-cart' as const,
    badge: '',
  },
  {
    image: '/public/assets/products/chandelier-2.webp',
    title: 'Люстра ARM013-08-W белый антик',
    price: '51990',
    status: 'not-in-cart' as const,
    badge: 'Новинка',
  },
  {
    image: '/public/assets/products/chandelier-3.webp',
    title: 'Люстра 07512-3.33 матовое золото',
    price: '6230',
    status: 'not-in-cart' as const,
    badge: '-30%',
  },
  {
    image: '/public/assets/products/chandelier-4.webp',
    title: 'Люстра 07874-80,33 золото',
    price: '6230',
    status: 'out-of-stock' as const,
    badge: '',
  },
]

export const CategoryPage = () => {
  return (
    <>
      {/* <h1>Каталог - выбранная категория товаров</h1> */}

      <Header />

      <SubHeader
        mainTitle='Каталог'
        subTitle='люстры'
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
        productCount={27862}
      />
      <div className='grid grid-cols-12 gap-base m-(--basic-container-x)'>
        <FiltersSidebar />
        <div className='col-span-9 grid grid-cols-subgrid my-50px'>
          <SortSelect options={selectItems} />

          <div className='col-span-9 grid grid-cols-subgrid flex flex-col gap-base my-50px'>
            {chandeliersItems.map((card) => (
              <ProductCard
                key={card.title}
                image={card.image}
                title={card.title}
                price={card.price}
                status={card.status}
                badge={card.badge}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
