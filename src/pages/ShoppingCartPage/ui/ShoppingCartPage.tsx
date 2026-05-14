import { useSelector } from 'react-redux'

import { SubHeader } from '@widgets/SubHeader'
import { selectCartItems } from '@features/cart'

import { ShoppingCartItem } from './ShoppingCartItem'
import { ShoppingCartButtonsSection } from './ShoppingCartButtonsSection'
import { ShoppingCartSummarySection } from './ShoppingCartSummarySection'
import { EmptyShoppingCartSection } from './EmptyShoppingCartSection'

export const ShoppingCartPage = () => {
  const cartProducts = useSelector(selectCartItems)

  const cartIsEmpty = cartProducts.length === 0

  return (
    <>
      <SubHeader
        mainTitle='Корзина'
        subTitle='Ждёт покупок'
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день'
      />

      {cartIsEmpty && <EmptyShoppingCartSection />}

      {!cartIsEmpty && (
        <div className='p-(--basic-container) flex flex-col gap-base'>
          <ShoppingCartButtonsSection />

          <fieldset className='flex flex-col gap-base'>
            {cartProducts.map((product) => (
              <ShoppingCartItem
                key={product.productId}
                id={product.productId}
                imgSrc={product.imageUrl}
                name={product.title}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </fieldset>

          <ShoppingCartSummarySection />
        </div>
      )}
    </>
  )
}
