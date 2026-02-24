// Заглушка
// import { useParams } from "react-router"; - для динамического отображения
// import { useSearchParams } from 'react-router-dom'; - для запроса с отображением фильтров, сортировок, поиска

import { FiltersSidebar } from '@widgets/FiltersSidebar'
import { SubHeader } from '@widgets/SubHeader'
import { Header } from '@widgets/Header'

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
      <div className='grid grid-cols-12 gap-[var(--gap-base)]'>
        <FiltersSidebar />
      </div>
    </>
  )
}
