import type { FC } from 'react'
import { cn } from '@shared/utils/cn'

import type { LucideIcon } from 'lucide-react'

interface IButtonProps {
  title?: string
  theme: 'dark' | 'light'
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
      },
      className
    )}
  >
    {Icon ? <Icon size={24} color='#A48077' strokeWidth={1} /> : title}
  </button>
)
