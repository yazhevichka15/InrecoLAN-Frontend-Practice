import { useState, type FC } from 'react'
import { Button } from '../Button'

interface IProductCounterProps {
  inCart?: boolean
  onChange?: (count: number) => void
}

export const ProductCounter: FC<IProductCounterProps> = ({ inCart, onChange }) => {
  const [count, setCount] = useState(1)

  const updateCount = (newCount: number) => {
    setCount(newCount)
    if (onChange) {
      onChange(newCount)
    }
  }

  const handleMinus = () => {
    const newCount = count === 0 ? 0 : count - 1
    updateCount(newCount)
  }

  const handlePlus = () => {
    const newCount = count + 1
    updateCount(newCount)
  }

  return (
    <div className='text-light-brown flex items-center gap-10px'>
      {inCart && 'В корзине'}
      <Button title='-' theme='light' className='size-6.75' onClick={handleMinus} type='button' />
      {count} шт.
      <Button title='+' theme='light' className='size-6.75' onClick={handlePlus} type='button' />
    </div>
  )
}
