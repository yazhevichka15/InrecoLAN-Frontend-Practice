import type { FC } from 'react'

interface IBadgeProps {
  count: number
}

export const Badge: FC<IBadgeProps> = ({ count }) => (
  <span className='bg-[var(--color-beige)] px-[6px] py-0 rounded-[50px] absolute left-[100%] top-[-5px] -z-1'>
    {count}
  </span>
)
