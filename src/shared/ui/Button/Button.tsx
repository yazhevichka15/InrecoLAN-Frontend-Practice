import type { FC } from 'react'
import { cn } from '@shared/utils/cn'

import type { LucideIcon } from 'lucide-react'

interface IButtonProps {
  title?: string
  theme: 'dark' | 'light' | 'red'
  className?: string
  Icon?: LucideIcon
  onClick?: () => void
}

export const Button: FC<IButtonProps> = ({ title, theme, className, Icon, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      'rounded-xs cursor-pointer flex items-center justify-center',
      {
        'bg-dark-brown text-white': theme === 'dark',
        'border border-light-brown text-light-brown': theme === 'light',
        'border border-red text-red': theme === 'red',
      },
      className
    )}
  >
    {Icon ? <Icon size={16} strokeWidth={1} /> : title}
  </button>
)
