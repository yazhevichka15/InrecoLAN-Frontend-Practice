import { ShoppingCartProvider, useShoppingCart } from '../context/ShoppingCartContext'

import { SubHeader } from '@widgets/SubHeader'
import { EmptyShoppingCartSection } from './EmptyShoppingCartSection'
import { ShoppingCartButtonsSection } from './ShoppingCartButtonsSection'
import { ShoppingCartItem } from './ShoppingCartItem'
import { ShoppingCartSummarySection } from './ShoppingCartSummarySection'
import { getCartProducts } from '../api/getCartProducts'

export const ShoppingCartPage = () => {
  const cartProducts = getCartProducts()

  return (
    <ShoppingCartProvider cartProducts={cartProducts}>
      <ShoppingCartContent />
    </ShoppingCartProvider>
  )
}

const ShoppingCartContent = () => {
  const { cartProducts, cartIsEmpty, selectedProducts } = useShoppingCart()

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
                key={product.id}
                {...product}
                checked={selectedProducts.includes(product.id)}
              />
            ))}
          </fieldset>

          <ShoppingCartSummarySection />
        </div>
      )}
    </>
  )
}
