import type { FC } from 'react'

interface ITitleBlock {
  mainTitle: string
  mainTitleOffset?: string
  handwriteTitle: string
  handwriteTitleOffset?: string
}

export const TitleBlock: FC<ITitleBlock> = ({
  mainTitle,
  mainTitleOffset = '',
  handwriteTitle,
  handwriteTitleOffset = '',
}) => {
  return (
    <h1 className='grid grid-flow-col items-start'>
      <span className={`z-0 ${mainTitleOffset}`}>{mainTitle}</span>
      <span className={`handwrite z-1 ${handwriteTitleOffset}`}>{handwriteTitle}</span>
    </h1>
  )
}
