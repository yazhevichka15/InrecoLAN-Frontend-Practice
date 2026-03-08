import type { FC } from 'react'
import { type TArrowButtonTheme, getArrowButtonTheme } from '../utils/getArrowButtonTheme'

interface IArrowButtonProps {
  title: string
  theme: TArrowButtonTheme
  onClick: () => void
}

export const ArrowButton: FC<IArrowButtonProps> = ({ title, theme, onClick }) => {
  const { color, textStyle } = getArrowButtonTheme(theme)

  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-between items-center ${textStyle} text-[${color}] cursor-pointer select-none `}
    >
      <h3>{title}</h3>

      <svg width='120' height='14'>
        <path
          d='
            M 1 7
            L 115 7
            M 110 2
            L 115 7
            M 110 12
            L 115 7
          '
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </button>
  )
}
