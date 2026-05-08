import type { FC } from 'react'

interface IOrderItemProps {
  imgSrc: string
  name: string
  price: number
  quantity: number
}

export const OrderItem: FC<IOrderItemProps> = ({ imgSrc, name, price, quantity }) => {
  return (
    <div className='w-full h-140px flex flex-col gap-20px'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-base'>
          <img
            src={imgSrc}
            alt={name}
            className='w-120px h-120px object-cover border border-gray rounded-xs'
          />

          <div className='flex flex-col gap-20px'>
            <h3>{name}</h3>
            <h3 className='text-light-brown'>{price}₽</h3>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-20px'>
          <h3 className='lowercase'>{quantity} шт.</h3>
          <h3>{quantity * price}₽</h3>
        </div>
      </div>

      <hr className='opacity-25' />
    </div>
  )
}
