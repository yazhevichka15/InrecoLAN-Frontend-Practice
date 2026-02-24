import type { FC } from 'react'

interface IHeaderMenuItemProps {
  title: string
}

export const HeaderMenuItem: FC<IHeaderMenuItemProps> = ({ title }) => (
  <li className='cursor-pointer col-span-1'>{title}</li>
)
