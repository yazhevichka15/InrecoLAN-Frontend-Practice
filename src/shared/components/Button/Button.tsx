import type { FC } from 'react'
import { cn } from '@shared/utils/cn'

interface IButtonProps {
  title: string
  theme: 'dark' | 'light'
  className?: string
}

export const Button: FC<IButtonProps> = ({ title, theme = 'dark', className }) => (
  <button
    className={cn(
      'rounded-[2px] cursor-pointer',
      {
        'bg-[var(--color-dark-brown)] text-white': theme === 'dark',
        'border border-[var(--color-light-brown)] text-[var(--color-light-brown)]':
          theme === 'light',
      },
      className
    )}
  >
    {title}
  </button>
)
