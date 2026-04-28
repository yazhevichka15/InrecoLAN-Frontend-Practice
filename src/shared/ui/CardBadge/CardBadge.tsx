import type { FC } from 'react'

interface ICardBadgeProps {
  title: string
}

export const CardBadge: FC<ICardBadgeProps> = ({ title }) => (
  <span className='bg-beige px-10px py-5px rounded-xs absolute top-20px left-20px z-1 uppercase'>
    {title}
  </span>
)
