import { useState, type FC } from 'react'
import { ProductCounter } from '../ProductCounter'
import { Heart } from 'lucide-react'

interface IProductCardProps {
  image: string
  title: string
  price: string
  inFavorites?: boolean
  status: 'in-cart' | 'not-in-cart' | 'out-of-stock'
}

export const ProductCard: FC<IProductCardProps> = ({
  image,
  title,
  price,
  inFavorites,
  status,
}) => {
  const [cardStatus, setCardStatus] = useState(status)
  const [favorites, setFavorites] = useState(inFavorites)

  return (
    <div className='col-span-3 flex flex-col justify-between h-550px relative'>
      <button
        className='absolute top-20px right-20px cursor-pointer'
        onClick={() => setFavorites(!favorites)}
      >
        <Heart
          size={24}
          fill={favorites ? '#2B0C1A' : 'none'}
          color={favorites ? 'none' : '#2B0C1A'}
          strokeWidth={1.5}
        />
      </button>
      <img src={image} alt={title} className='w-full h-430px' />
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
