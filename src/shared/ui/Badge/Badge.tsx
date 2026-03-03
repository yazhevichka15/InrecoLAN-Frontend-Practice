import type { FC } from 'react'

interface IBadgeProps {
  count: number
}

export const Badge: FC<IBadgeProps> = ({ count }) => (
  <span className='bg-beige px-5px py-0 rounded-full absolute left-full -top-5px -z-1'>
    {count}
  </span>
)
