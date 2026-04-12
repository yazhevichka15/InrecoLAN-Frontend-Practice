import { type FC } from 'react'

interface ISortSelectProps {
  options: { value: string; title: string }[]
}

export const SortSelect: FC<ISortSelectProps> = ({ options }) => {
  return (
    <select className='px-50px py-10px w-fit text-light-brown outline-0 border border-light-brown rounded-xs'>
      {options.map((op) => (
        <option key={op.value} value={op.value}>
          {op.title}
        </option>
      ))}
    </select>
  )
}
