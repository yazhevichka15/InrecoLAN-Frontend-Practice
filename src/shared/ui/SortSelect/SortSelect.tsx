import { type FC } from 'react'
import { ChevronDown } from 'lucide-react'

interface ISortSelectProps {
  options: { value: string; title: string }[]
}

export const SortSelect: FC<ISortSelectProps> = ({ options }) => {
  return (
    <div className='relative flex items-center gap-20px border border-light-brown w-fit rounded-xs'>
      <select className='px-50px py-10px w-fit appearance-none text-light-brown outline-0 '>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.title}
          </option>
        ))}
      </select>
      <ChevronDown
        size={24}
        color='#A48077'
        strokeWidth={1.5}
        className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'
      />
    </div>
  )
}
