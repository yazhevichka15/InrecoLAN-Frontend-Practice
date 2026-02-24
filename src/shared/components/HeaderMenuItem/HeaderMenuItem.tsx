import type { FC } from 'react'

interface IHeaderMenuItemProps {
  title: string
}

export const HeaderMenuItem: FC<IHeaderMenuItemProps> = ({ title }) => (
  <li className='text-[400] text-[14px] text-[#2b0c1a] cursor-pointer col-span-1'>{title}</li>
)
