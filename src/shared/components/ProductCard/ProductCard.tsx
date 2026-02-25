import { useState, type FC } from 'react'
import { Button } from '../Button'

interface IProductCardProps {
  title: string
  price: string
  status: 'in-cart' | 'not-in-cart' | 'out-of-stock'
}

export const ProductCard: FC<IProductCardProps> = ({ title, price, status }) => {
  const [count, setCount] = useState(1)

  return (
    <div className='col-span-3 flex flex-col justify-between gap-30px h-550px'>
      <img src='' alt='' className='w-full h-430px' />
      <h3>{title}</h3>
      {status === 'out-of-stock' ? (
        <h3 className='text-gray'>Нет в наличии</h3>
      ) : (
        <div className='flex justify-between items-center'>
          <h3 className='text-light-brown'>{price}₽</h3>
          {status === 'not-in-cart' && (
            <button className='text-light-brown cursor-pointer flex items-center gap-10px'>
              В корзину
              <hr className='hr-small' />
            </button>
          )}
          {status === 'in-cart' && (
            <div className='text-light-brown flex items-center gap-10px'>
              В корзине
              <Button
                title='-'
                theme='light'
                className='size-6.75'
                onClick={() => setCount((count) => (count < 1 ? count - 1 : 1))}
              />
              {count} шт.
              <Button
                title='+'
                theme='light'
                className='size-6.75'
                onClick={() => setCount((count) => count + 1)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
