// Заглушка
// import { useParams } from "react-router"; - для динамического отображения
// import { useSearchParams } from 'react-router-dom'; - для запроса с отображением фильтров, сортировок, поиска

import { FiltersSidebar } from '@widgets/FiltersSidebar'
import { SubHeader } from '@widgets/SubHeader'
import { Header } from '@widgets/Header'
import { ProductCard } from '@shared/components/ProductCard'

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
      <div className='grid grid-cols-12 gap-[var(--gap-base)] m-[var(--basic-container-x)]'>
        <FiltersSidebar />
        <div className='col-span-9 grid grid-cols-subgrid flex flex-col gap-[var(--gap-base)] my-[var(--spacing-50px)]'>
          <ProductCard title='Люстра ARM337-07-R кремовый с золотом' price='32990' inCart={false} />
          <ProductCard title='Люстра ARM013-08-W белый антик' price='51990' inCart={true} />
          <ProductCard title='Люстра 07512-3.33 матовое золото' price='6230' inCart={false} />
        </div>
      </div>
    </>
  )
}
