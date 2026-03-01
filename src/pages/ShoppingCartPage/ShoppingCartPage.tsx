import { Link } from 'react-router-dom'

import { SubHeader } from '@widgets/SubHeader'
import { ShoppingCartItem } from './ShoppingCartItem'

export const ShoppingCartPage = () => {
  // Для теста, должен быть запрос на сервер
  const cartProducts = [
    {
      id: '2345',
      imgSrc: 'string',
      name: 'Люстра ARM337-07-R кремовый с золотом',
      price: 32990,
      quantity: 2,
    },
    {
      id: '2345',
      imgSrc: 'string',
      name: 'Люстра ARM337-07-R кремовый с золотом',
      price: 32990,
      quantity: 2,
    },
  ]

  const totalPrice = calculateTotalPrice(cartProducts)

  return (
    <>
      <SubHeader
        mainTitle='Корзина'
        subTitle='Ждёт покупок'
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день'
      />

      {cartProducts.length === 0 && (
        <main className='p-(--basic-container) flex flex-col justify-center items-center gap-base'>
          <h3>В корзине пока пусто!</h3>
          <Link to='/catalog' className='flex'>
            <p className='uppercase text-light-brown'>В каталог</p>
            {/* <ArrowButton /> - кнопка в виде стрелки */}
          </Link>
        </main>
      )}

      {cartProducts.length > 0 && (
        <main className='p-(--basic-container) flex flex-col gap-base'>
          {cartProducts.map((product) => (
            <ShoppingCartItem key={product.id} {...product} />
          ))}

          <div className='flex items-center justify-between'>
            <div className='flex gap-30px'>
              <h2>Итого:</h2>
              <h2 className='text-light-brown'>{totalPrice}₽</h2>
            </div>
            {/* Кнопка "оформить заказ", реализовано у Иры */}
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
