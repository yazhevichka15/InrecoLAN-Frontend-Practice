import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

import { Button } from '@shared/ui/Button'
import { calculateTotalPrice } from '../utils/calculateTotalPrice'

export const ShoppingCartSummarySection = () => {
  const navigate = useNavigate()

  const { cartProducts } = useShoppingCart()
  const totalPrice = calculateTotalPrice(cartProducts)

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-30px'>
        <h2>Итого:</h2>
        <h2 className='text-light-brown'>{totalPrice}₽</h2>
      </div>

      {/* Редирект на страницу с оформлением заказа, надо будет передать выбранные товары */}
      <Button
        title='Оформить заказ'
        theme='dark'
        className='w-740px h-80px text-xl'
        onClick={() => navigate('/create-order')}
      />
    </div>
  )
}
