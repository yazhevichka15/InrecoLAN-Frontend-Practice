import type { FC } from 'react'

interface IErrorLayoutProps {
  errorCode: number
  title: string
  message: string
  image: string
}

export const ErrorLayout: FC<IErrorLayoutProps> = ({ errorCode, title, message, image }) => {
  return (
    <div className=' gap-base grid grid-cols-2 py-50px'>
      <img src={image} alt={title} className='w-161 h-165.75' />
      <div className='flex items-center'>
        <div className='flex flex-col gap-30px items-center'>
          <span className='error-code'>{errorCode}</span>
          <h1>{title}</h1>
          <p className='text-center inline-block max-w-95'>{message}</p>
        </div>
      </div>
    </div>
  )
}
