import { useState, type FC } from 'react'
import { Button } from '@shared/ui/Button'

interface IProductCounterProps {
  inCart?: boolean
  onChange?: (count: number) => void
}

export const ProductCounter: FC<IProductCounterProps> = ({ inCart, onChange }) => {
  const [count, setCount] = useState(1)

  const handleMinus = () => {
    const newCount = count - 1
    setCount(newCount)
    if (onChange) {
      onChange(newCount)
    }
  }

  const handlePlus = () => {
    const newCount = count + 1
    setCount(newCount)
    if (onChange) {
      onChange(newCount)
    }
  }

  return (
    <div className='text-light-brown flex items-center gap-10px'>
      {inCart && 'В корзине'}
      <Button title='-' theme='light' className='size-6.75' onClick={handleMinus} />
      {count} шт.
      <Button title='+' theme='light' className='size-6.75' onClick={handlePlus} />
    </div>
  )
}
