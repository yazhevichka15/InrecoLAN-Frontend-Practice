import type { FC } from 'react'
import { HeaderMenuItem } from '../HeaderMenuItem'

interface IHeaderMenuProps {
  items: string[]
}

export const HeaderMenu: FC<IHeaderMenuProps> = ({ items }) => (
  <ul className='col-span-3 grid grid-cols-subgrid gap-[40px] flex items-center'>
    {items.map((el) => (
      <HeaderMenuItem key={el} title={el} />
    ))}
  </ul>
)
