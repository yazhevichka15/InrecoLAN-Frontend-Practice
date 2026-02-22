import type { FC } from 'react'

interface ISmallDescriptionBlock {
  text: string
}

export const SmallDescriptionBlock: FC<ISmallDescriptionBlock> = ({ text }) => {
  return (
    <div className='flex items-center'>
      <hr className='hr-small mr-40px -translate-y-15px' />
      <p className='w-260px h-70px text-pretty'>{text}</p>
    </div>
  )
}
