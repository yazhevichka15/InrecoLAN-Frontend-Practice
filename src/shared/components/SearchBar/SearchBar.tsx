import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className='flex items-center gap-[10px] w-[165px] h-[34px] border-b-1 border-b-[#2b0c1a]'>
      <Search size={16} color='#2B0C1A' strokeWidth={1} />
      <input
        type='text'
        placeholder='Поиск'
        className='w-full outline-0 placeholder: text-[14px] placeholder: font-[400] placeholder: text-[#2b0c1a]'
      />
    </div>
  )
}
