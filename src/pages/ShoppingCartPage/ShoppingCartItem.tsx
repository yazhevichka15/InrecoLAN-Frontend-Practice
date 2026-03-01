import type { FC } from 'react'

interface IShoppingCartItem {
  imgSrc: string
  name: string
  price: number
  quantity: number
}

export const ShoppingCartItem: FC<IShoppingCartItem> = ({ imgSrc, name, price, quantity }) => {
  return (
    <div>
      <div className='w-full h-120px flex justify-between'>
        <div className='flex items-center gap-base'>
          <img src={imgSrc} alt={name} className='w-120px h-120px object-cover' />
          <div className='flex flex-col gap-20px'>
            <h3>{name}</h3>
            <h3 className='text-light-brown'>{price}₽</h3>
          </div>
        </div>

        {/* Важен именно отступ в 230px или ширина микроконтейнера? */}
        <div className='w-185 flex items-center justify-between'>
          {/* Кнопки "+" и "-", реализовано у Иры */}
          <h3 className='lowercase'>{quantity} шт.</h3>
          {/* Кнопка "удалить", реализовано у Иры */}
        </div>
      </div>
      <hr className='mt-20px' />
    </div>
  )
}
