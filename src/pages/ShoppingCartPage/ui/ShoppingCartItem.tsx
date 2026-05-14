import type { FC } from 'react'
import { Trash2 } from 'lucide-react'
import { useSelector } from 'react-redux'

import { Button } from '@shared/ui/Button'
import { ProductCounter } from '@shared/ui/ProductCounter'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch'

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  toggleSelectProduct,
  selectSelectedIds,
} from '@features/cart'

interface IShoppingCartItemProps {
  id: string
  imgSrc: string
  name: string
  price: number
  quantity: number
}

export const ShoppingCartItem: FC<IShoppingCartItemProps> = ({
  id,
  imgSrc,
  name,
  price,
  quantity,
}) => {
  const dispatch = useAppDispatch()

  const selectedIds = useSelector(selectSelectedIds)

  const checked = selectedIds.includes(id)

  const handleToggleSelect = () => {
    dispatch(toggleSelectProduct(id))
  }

  const handleMinus = () => {
    dispatch(decreaseQuantity(id))
  }

  const handlePlus = () => {
    dispatch(increaseQuantity(id))
  }

  const handleDelete = () => {
    dispatch(removeFromCart(id))
  }

  return (
    <div>
      <div className='w-full h-120px flex justify-between'>
        <div className='flex items-center gap-base'>
          <input type='checkbox' checked={checked} onChange={handleToggleSelect} />

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

        <div className='w-740px flex justify-between items-center'>
          <ProductCounter count={quantity} onMinus={handleMinus} onPlus={handlePlus} />

          <h3>{price * quantity}₽</h3>

          <Button
            Icon={Trash2}
            theme='dark'
            className='w-30px h-30px'
            onClick={handleDelete}
            type='button'
          />
        </div>
      </div>

      <hr className='mt-20px opacity-25' />
    </div>
  )
}
