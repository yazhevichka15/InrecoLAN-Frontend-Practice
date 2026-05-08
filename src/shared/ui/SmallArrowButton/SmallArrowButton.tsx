import type { FC } from 'react'
import { cn } from '@shared/utils/cn'

interface ISmallArrowButtonProps {
  arrowDirection: 'left' | 'right'
  onClick: () => void
}

export const SmallArrowButton: FC<ISmallArrowButtonProps> = ({ arrowDirection, onClick }) => {
  const arrowClass = cn('cursor-pointer select-none', {
    'rotate-180': arrowDirection === 'left',
  })

  return (
    <button className={arrowClass} onClick={onClick}>
      <svg width='50' height='10'>
        <path
          d='
            M 1 5
            L 49 5
            M 45 1
            L 49 5
            M 45 9
            L 49 5
          '
          stroke='var(--color-light-brown)'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </button>
  )
}
