import type { FC } from 'react'
import { Button } from '@shared/ui/Button'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface ICategoryProductItem {
  title: string
  price: string
  inStore: number
  inStock: number
  image: string
}

export const CategoryProductItem: FC<ICategoryProductItem> = ({
  title,
  price,
  inStore,
  inStock,
  image,
}) => {
  let navigate = useNavigate()
  return (
    <div className='flex flex-col gap-20px'>
      <div className='flex justify-between items-center gap-base'>
        <div className='flex gap-base flex-1 items-center'>
          <img src={image} alt={title} className='w-29.25 h-29.25' />
          <div className='flex flex-col gap-20px'>
            <h3>{title}</h3>
            <h3 className='text-light-brown'>{price}₽</h3>
          </div>
        </div>
        <div className='flex-1 flex justify-between items-center'>
          <div className='flex flex-col gap-20px'>
            <div>В магазине: {inStore}шт.</div>
            <div>На складе: {inStock}шт.</div>
          </div>
          <Button
            theme='light'
            title='Редактировать'
            type='button'
            className='h-10 w-44'
            onClick={() => navigate('/account/products/:product')}
          />
          <Button type='button' theme='light' className='w-10 h-10' Icon={Trash2} />
        </div>
      </div>
      <hr />
    </div>
  )
}
