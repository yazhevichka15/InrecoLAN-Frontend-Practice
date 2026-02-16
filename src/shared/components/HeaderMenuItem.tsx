interface HeaderMenuItemProps {
  title: string
}

function HeaderMenuItem({ title }: HeaderMenuItemProps) {
  return (
    <li className='text-[400] text-[14px] text-[#2b0c1a] cursor-pointer col-span-1'>{title}</li>
  )
}
export default HeaderMenuItem
