import type { FC } from 'react'

interface IBadgeProps {
  count: number
}

export const Badge: FC<IBadgeProps> = ({ count }) => (
  <span className='bg-[#fef1e7] px-[6px] py-0 rounded-[50px] text-[400] text-[14px] text-[#2b0c1a] absolute left-[97%] top-[-5px] -z-1'>
    {count}
  </span>
)
