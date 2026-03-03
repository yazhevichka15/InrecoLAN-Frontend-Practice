import type { FC } from 'react'
import type { LucideIcon } from 'lucide-react'

interface IHeaderRightMenuItemProps {
  Icon: LucideIcon
  title: string
  func?: () => void
}

export const HeaderRightMenuItem: FC<IHeaderRightMenuItemProps> = ({ Icon, title, func }) => (
  <button onClick={func}>
    <div className='flex items-center gap-10px cursor-pointer'>
      <Icon size={16} color='#2B0C1A' strokeWidth={1} />
      {title}
    </div>
  </button>
)
