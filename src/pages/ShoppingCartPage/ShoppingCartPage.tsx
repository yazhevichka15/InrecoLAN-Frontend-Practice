import { Link, useNavigate } from 'react-router-dom'

import { SubHeader } from '@widgets/SubHeader'
import { ShoppingCartItem } from './ShoppingCartItem'
import { Button } from '@shared/ui/Button'
import { ArrowButton } from '@shared/ui/ArrowButton'
import { SmallArrowButton } from '@shared/ui/SmallArrowButton'

export const ShoppingCartPage = () => {
  const navigate = useNavigate()

  // Для теста, должен быть запрос на сервер
  const cartProducts = [
    // {
    //   id: '2345',
    //   imgSrc: 'string',
    //   name: 'Люстра ARM337-07-R кремовый с золотом',
    //   price: 32990,
    //   quantity: 2,
    // },
    // {
    //   id: '2345',
    //   imgSrc: 'string',
    //   name: 'Люстра ARM337-07-R кремовый с золотом',
    //   price: 32990,
    //   quantity: 1,
    // },
  ]

  const isEmpty = cartProducts.length === 0
  const totalPrice = calculateTotalPrice(cartProducts)

  return (
    <>
      <SubHeader
        mainTitle='Корзина'
        subTitle='Ждёт покупок'
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день'
      />

      {isEmpty && (
        <div className='p-(--basic-container-x) flex-1 flex flex-col justify-center items-center gap-base'>
          <h2>В корзине пока пусто</h2>
          <div className='w-280px'>
            <ArrowButton
              title='В каталог'
              theme='lightbrown-big'
              onClick={() => navigate('/catalog')}
            />
          </div>
          <SmallArrowButton arrowDirection='left' />
        </div>
      )}

      {!isEmpty && (
        <main className='p-(--basic-container) flex flex-col gap-base'>
          <div className='flex gap-base'>
            <Button title='Выбрать все' theme='dark' className='w-[400px] h-[40px]' />
            <Button title='Очистить корзину' theme='light' className='w-[400px] h-[40px]' />
          </div>

          {cartProducts.map((product) => (
            <ShoppingCartItem key={product.id} {...product} />
          ))}

          <div className='flex items-center justify-between'>
            <div className='flex gap-30px'>
              <h2>Итого:</h2>
              <h2 className='text-light-brown'>{totalPrice}₽</h2>
            </div>
            <Button
              title='Оформить заказ'
              theme='dark'
              className='w-[740px] h-[80px] text-[20px]'
            />
          </div>
        </main>
      )}
    </>
  )
}

// Кэшировать результат?
// Надо типизировать
const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0)
}
