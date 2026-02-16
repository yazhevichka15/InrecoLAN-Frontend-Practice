import type { LucideIcon } from 'lucide-react'

type Props = {
  Icon: LucideIcon
  title: string
}
function HeaderRightMenuItem({ Icon, title }: Props) {
  return (
    <div className='flex items-center gap-[10px] text-[400] text-[14px] text-[#2b0c1a] cursor-pointer'>
      <Icon size={16} color='#2B0C1A' strokeWidth={1} />
      {title}
    </div>
  )
}
export default HeaderRightMenuItem
