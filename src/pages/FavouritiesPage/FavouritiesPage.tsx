import { SubHeader } from '@widgets/SubHeader'
import { getProducts } from '@pages/CategoryPage/api/getProducts'
import { ProductCard } from '@shared/ui/ProductCard'

const chandeliersItems = getProducts()

export const FavouritiesPage = () => {
  return (
    <>
      <SubHeader
        mainTitle='Избранные'
        subTitle='товары'
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
        productCount={chandeliersItems.length}
      />
      <div className='gap-base p-(--basic-container) w-full grid grid-cols-12'>
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
    </>
  )
}
