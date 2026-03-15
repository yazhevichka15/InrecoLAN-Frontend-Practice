import type { FC } from 'react'
import { Trash2 } from 'lucide-react'

import { Button } from '@shared/ui/Button'
import { ProductCounter } from '@shared/ui/ProductCounter'

import { useShoppingCart } from '../context/ShoppingCartContext'

interface IShoppingCartItem {
  id: string
  imgSrc: string
  name: string
  price: number
  quantity: number
  checked: boolean
}

export const ShoppingCartItem: FC<IShoppingCartItem> = ({
  id,
  imgSrc,
  name,
  price,
  quantity,
  checked,
}) => {
  const { toggleSelectProduct, deleteProductFromCart } = useShoppingCart()

  return (
    <div>
      <div className='w-full h-120px flex justify-between'>
        <div className='flex items-center gap-base'>
          <input type='checkbox' onChange={() => toggleSelectProduct(id)} checked={checked} />

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
          {/* Счетчик корректно отображается, но неправильно работает, надо доработать */}
          <ProductCounter inCart={false} />
          <h3>{price * quantity}₽</h3>
          <Button
            Icon={Trash2}
            theme='red'
            className='w-30px h-30px'
            onClick={() => deleteProductFromCart(id)}
          />
        </div>
      </div>

      <hr className='mt-20px opacity-25' />
    </div>
  )
}
