import { Divide } from 'lucide-react'
import type { FC } from 'react'
import { Button } from '../Button'

interface IProductCardProps {
  title: string
  price: string
  inCart: boolean
}

export const ProductCard: FC<IProductCardProps> = ({ title, price, inCart }) => (
  <div className='col-span-3 flex flex-col justify-between gap-[var(--spacing-30px)] h-[550px]'>
    <img src='' alt='' className='w-full h-[430px]' />
    <h3>{title}</h3>
    <div className='flex justify-between items-center'>
      <h3 className='text-[var(--color-light-brown)]'>{price}₽</h3>
      {!inCart && (
        <button className='text-[var(--color-light-brown)] cursor-pointer flex items-center gap-[var(--spacing-10px)]'>
          В корзину
          <hr className='hr-small' />
        </button>
      )}
      {inCart && (
        <div className='text-[var(--color-light-brown)] flex items-center gap-[var(--spacing-10px)]'>
          В корзине
          <Button title='-' theme='light' className='size-[27px]' />1 шт.
          <Button title='+' theme='light' className='size-[27px]' />
        </div>
      )}
    </div>
  </div>
)
