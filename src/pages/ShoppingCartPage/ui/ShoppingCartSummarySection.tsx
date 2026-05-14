import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { selectCartTotalPrice } from '@features/cart'
import { Button } from '@shared/ui/Button'

export const ShoppingCartSummarySection = () => {
  const navigate = useNavigate()
  const totalPrice = useSelector(selectCartTotalPrice)

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-30px'>
        <h2>Итого:</h2>
        <h2 className='text-light-brown'>{totalPrice}₽</h2>
      </div>

      <Button
        type='button'
        title='Оформить заказ'
        theme='dark'
        className='w-740px h-80px text-xl'
        onClick={() => navigate('/create-order')}
      />
    </div>
  )
}
