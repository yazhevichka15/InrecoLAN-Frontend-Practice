import { useState, type FC } from 'react'
import { Heart } from 'lucide-react'
import { useSelector } from 'react-redux'

import { ProductCounter } from '../ProductCounter'
import { CardBadge } from '../CardBadge'

import { cn } from '@shared/lib/utils/cn'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch'

import { addToCart, increaseQuantity, decreaseQuantity, selectCartItems } from '@features/cart'

interface IProductCardProps {
  productId: string
  image: string
  title: string
  price: number
  inFavorites?: boolean
  badge?: string
  oldPrice?: number
  isOutOfStock?: boolean
}

export const ProductCard: FC<IProductCardProps> = ({
  productId,
  image,
  title,
  price,
  inFavorites,
  badge,
  oldPrice,
  isOutOfStock,
}) => {
  const dispatch = useAppDispatch()

  const [favorites, setFavorites] = useState(inFavorites)

  const cartItems = useSelector(selectCartItems)

  const cartItem = cartItems.find((item) => item.productId === productId)

  const isInCart = Boolean(cartItem)

  const quantity = cartItem?.quantity || 0

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId,
        title,
        price,
        imageUrl: image,
        quantity: 1,
      })
    )
  }

  const handleIncrease = () => {
    dispatch(increaseQuantity(productId))
  }

  const handleDecrease = () => {
    dispatch(decreaseQuantity(productId))
  }

  return (
    <div className='col-span-3 flex flex-col justify-between h-550px relative'>
      {badge && <CardBadge title={badge} />}

      <button
        className='absolute top-20px right-20px cursor-pointer z-1'
        onClick={() => setFavorites(!favorites)}
      >
        <Heart
          size={24}
          fill={favorites ? '#2B0C1A' : 'none'}
          color={favorites ? 'none' : '#2B0C1A'}
          strokeWidth={1.5}
        />
      </button>

      <img
        src={image}
        alt={title}
        className={cn('w-full h-430px', isOutOfStock && 'filter grayscale opacity-50')}
      />

      <h3>{title}</h3>

      {isOutOfStock ? (
        <h3 className='text-gray'>Нет в наличии</h3>
      ) : (
        <div className='flex justify-between items-center'>
          <div className='flex gap-20px items-center'>
            <h3 className='text-light-brown'>{price}₽</h3>

            {oldPrice && <h3 className='text-gray line-through'>{oldPrice}₽</h3>}
          </div>

          {!isInCart ? (
            <button
              className='text-light-brown cursor-pointer flex items-center gap-10px'
              onClick={handleAddToCart}
            >
              В корзину
              <hr className='hr-small' />
            </button>
          ) : (
            <ProductCounter
              inCart
              count={quantity}
              onMinus={handleDecrease}
              onPlus={handleIncrease}
            />
          )}
        </div>
      )}
    </div>
  )
}
