import { useState, type FC } from 'react'
import { ProductCounter } from '../ProductCounter'

interface IProductCardProps {
  title: string
  price: string
  status: 'in-cart' | 'not-in-cart' | 'out-of-stock'
}

export const ProductCard: FC<IProductCardProps> = ({ title, price, status }) => {
  const [cardStatus, setCardStatus] = useState(status)

  return (
    <div className='col-span-3 flex flex-col justify-between h-550px'>
      <img src='' alt='' className='w-full h-430px' />
      <h3>{title}</h3>
      {cardStatus === 'out-of-stock' ? (
        <h3 className='text-gray'>Нет в наличии</h3>
      ) : (
        <div className='flex justify-between items-center'>
          <h3 className='text-light-brown'>{price}₽</h3>
          {cardStatus === 'not-in-cart' && (
            <button
              className='text-light-brown cursor-pointer flex items-center gap-10px'
              onClick={() => setCardStatus('in-cart')}
            >
              В корзину
              <hr className='hr-small' />
            </button>
          )}
          {cardStatus === 'in-cart' && (
            <ProductCounter
              inCart={true}
              onChange={(count) => {
                count === 0 && setCardStatus('not-in-cart')
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}
