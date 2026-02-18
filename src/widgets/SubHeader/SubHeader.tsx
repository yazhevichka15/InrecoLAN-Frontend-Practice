interface ISubHeaderProps {
  mainTitle: string
  subTitle: string
  productCount?: number
  description: string
}

export function SubHeader({ mainTitle, subTitle, productCount, description }: ISubHeaderProps) {
  return (
    <div className='w-full h-38 px-10'>
      <div className='h-full flex items-center'>
        <div>
          <h1 className='grid grid-flow-col items-start'>
            <span className='-translate-y-1.25 z-0 uppercase'>{mainTitle}</span>
            <span className='-translate-x-24 translate-y-6.25 z-10 lowercase'>{subTitle}</span>
          </h1>
        </div>

        {productCount && productCount > 0 ? (
          <div>
            <p className='text-(--light-brown-color)'>{productCount} товаров</p>
          </div>
        ) : null}

        <div className='ml-auto h-full flex items-center'>
          <hr className='w-30 h-px mr-10 -translate-y-3.75 border-(--light-brown-color) opacity-40' />
          <p className='w-65 h-17 text-pretty'>{description}</p>
        </div>
      </div>

      <hr className='border-(--light-brown-color) opacity-40' />
    </div>
  )
}
