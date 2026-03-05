import { Button } from '@shared/ui/Button'
import { ProductCounter } from '@shared/ui/ProductCounter'
import type { FC } from 'react'
import { Trash2 } from 'lucide-react'

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
          <input type='checkbox' defaultChecked />
          <img src={imgSrc} alt={name} className='w-120px h-120px object-cover' />
          <div className='flex flex-col gap-20px'>
            <h3>{name}</h3>
            <h3 className='text-light-brown'>{price}₽</h3>
          </div>
        </div>

        <div className='w-[740px] flex items-center justify-between'>
          <ProductCounter inCart={false} />
          <h3>{price * quantity}₽</h3>
          <Button Icon={Trash2} theme='red' className='w-30px h-30px' />
        </div>
      </div>
      <hr className='mt-20px opacity-[0.25]' />
    </div>
  )
}
