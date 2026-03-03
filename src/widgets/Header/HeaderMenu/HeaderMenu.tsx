import type { FC } from 'react'
import { HeaderMenuItem } from '../HeaderMenuItem'

interface IHeaderMenuProps {
  items: { title: string; ref: string }[]
}

export const HeaderMenu: FC<IHeaderMenuProps> = ({ items }) => (
  <ul className='col-span-3 grid grid-cols-subgrid gap-base flex items-center'>
    {items.map((el) => (
      <HeaderMenuItem key={el.title} title={el.title} ref={el.ref} />
    ))}
  </ul>
)
