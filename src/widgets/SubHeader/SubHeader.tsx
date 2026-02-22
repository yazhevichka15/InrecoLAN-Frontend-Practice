import type { FC } from 'react'

import { TitleBlock } from '@shared/ui/TitleBlock'
import { SmallDescriptionBlock } from '@shared/ui/SmallDescriptionBlock'

interface ISubHeaderProps {
  mainTitle: string
  subTitle: string
  productCount?: number
  description: string
}

export const SubHeader: FC<ISubHeaderProps> = ({
  mainTitle,
  subTitle,
  productCount,
  description,
}) => {
  return (
    <div className='w-full h-150px p-(--basic-container-x)'>
      <div className='h-full flex items-center justify-between'>
        <div className='flex items-center'>
          <TitleBlock
            mainTitle={mainTitle}
            mainTitleOffset='-translate-y-5px'
            handwriteTitle={subTitle}
            handwriteTitleOffset='-translate-x-100px translate-y-30px'
          />

          {productCount && productCount > 0 && (
            <p className='text-light-brown'>{productCount} товаров</p>
          )}
        </div>

        <SmallDescriptionBlock text={description} />
      </div>

      <hr />
    </div>
  )
}
