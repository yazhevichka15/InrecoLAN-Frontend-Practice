import type { FC } from 'react'
import type { LucideIcon } from 'lucide-react'

interface IHeaderRightMenuItemProps {
  Icon: LucideIcon
  title: string
  onClick?: () => void
}

export const HeaderRightMenuItem: FC<IHeaderRightMenuItemProps> = ({ Icon, title, onClick }) => (
  <button onClick={onClick}>
    <div className='flex items-center gap-10px cursor-pointer'>
      <Icon size={16} color='#2B0C1A' strokeWidth={1} />
      {title}
    </div>
  </button>
)
