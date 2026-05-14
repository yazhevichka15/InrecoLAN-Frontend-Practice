import type { FC } from 'react'

import { Button } from '@shared/ui/Button'

interface IProductCounterProps {
  count: number
  inCart?: boolean
  onMinus: () => void
  onPlus: () => void
}

export const ProductCounter: FC<IProductCounterProps> = ({ count, inCart, onMinus, onPlus }) => {
  return (
    <div className='text-light-brown flex items-center gap-10px'>
      {inCart && 'В корзине'}
      <Button title='-' theme='light' className='size-6.75' onClick={onMinus} type='button' />
      {count} шт.
      <Button title='+' theme='light' className='size-6.75' onClick={onPlus} type='button' />
    </div>
  )
}
