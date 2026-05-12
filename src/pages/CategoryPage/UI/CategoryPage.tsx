import { FiltersSidebar } from '@widgets/FiltersSidebar'
import { SubHeader } from '@widgets/SubHeader'
import { ProductCard } from '@shared/ui/ProductCard'
import { SortSelect } from '@shared/ui/SortSelect/SortSelect'
import { getProducts } from '../api/getProducts'
import { useNavigate, useParams } from 'react-router-dom'

import { useProductPagination, Pagination } from '@widgets/Pagination'

const selectItems = [
  { value: '-', title: 'Без сортировки' },
  { value: 'cheap', title: 'Сначала дешёвые' },
  { value: 'expensive', title: 'Сначала дорогие' },
]

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

const chandeliersItems = getProducts()

export const CategoryPage = () => {
  const { currentPage, knownMaxPage, isLastPage, goToPage } = useProductPagination()

  const { category } = useParams()
  const navigate = useNavigate()

  const currentCategory = categories.find((cat) => cat.id === category)

  const handleCategoryChange = (russianName: string) => {
    const found = categories.find((cat) => cat.name === russianName)
    if (found) {
      navigate(`/catalog/${found.id}`)
    }
  }

  return (
    <>
      <SubHeader
        mainTitle='Каталог'
        subTitle={currentCategory ? currentCategory.name.toLowerCase() : 'люстры'}
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
        productCount={chandeliersItems.length}
      />
      <div className='grid grid-cols-12 gap-base m-(--basic-container-x)'>
        <FiltersSidebar
          currentCategory={currentCategory?.name || 'Люстры'}
          onCategoryChange={handleCategoryChange}
        />
        <div className='col-span-9 grid grid-cols-subgrid my-50px'>
          <SortSelect options={selectItems} />

          <div className='col-span-9 grid grid-cols-subgrid gap-base my-50px'>
            {chandeliersItems.map((card) => (
              <ProductCard
                key={card.title}
                image={card.image}
                title={card.title}
                price={card.price}
                status={card.status}
                badge={card.badge}
                oldPrice={card.oldPrice}
              />
            ))}
          </div>

          <div className='col-span-9 flex justify-center'>
            <Pagination
              currentPage={currentPage}
              knownMaxPage={knownMaxPage}
              isLastPage={isLastPage}
              onPageChange={goToPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}
