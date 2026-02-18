interface IHeaderRightMenuItemProps {
  Icon: any
  title: string
  func?: () => void
}
function HeaderRightMenuItem({ Icon, title, func }: IHeaderRightMenuItemProps) {
  return (
    <button onClick={func}>
      <div className='flex items-center gap-[10px] text-[400] text-[14px] text-[#2b0c1a] cursor-pointer'>
        <Icon size={16} color='#2B0C1A' strokeWidth={1} />
        {title}
      </div>
    </button>
  )
}
export default HeaderRightMenuItem
