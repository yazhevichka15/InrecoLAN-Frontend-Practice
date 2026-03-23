import type { FC } from 'react'
import { Link } from 'react-router-dom'
interface IHeaderMenuItemProps {
  title: string
  ref: string
}

export const HeaderMenuItem: FC<IHeaderMenuItemProps> = ({ title, ref }) => (
  <Link to={ref}>
    <li className='cursor-pointer col-span-1'>{title}</li>
  </Link>
)
