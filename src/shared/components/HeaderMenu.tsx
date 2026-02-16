import HeaderMenuItem from './HeaderMenuItem'

interface HeaderMenuProps {
  items: string[]
}

function HeaderMenu({ items }: HeaderMenuProps) {
  return (
    <ul className='col-span-3 grid grid-cols-subgrid gap-[40px] flex items-center'>
      {items.map((el) => (
        <HeaderMenuItem key={el} title={el} />
      ))}
    </ul>
  )
}
export default HeaderMenu
