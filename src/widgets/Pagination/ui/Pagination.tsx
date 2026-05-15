import { Button } from '@shared/ui/Button'
import { type FC, useState, useMemo } from 'react'

interface IPaginationProps {
  currentPage: number
  knownMaxPage: number
  isLastPage: boolean
  onPageChange: (page: number) => void
  onDiscoverMore?: () => void
}

const SIZE = 7

export const Pagination: FC<IPaginationProps> = ({
  currentPage,
  knownMaxPage,
  isLastPage,
  onPageChange,
}) => {
  const [windowStart, setWindowStart] = useState(1)

  const pages = useMemo(() => {
    const totalKnown = isLastPage ? knownMaxPage : knownMaxPage
    if (totalKnown <= SIZE) {
      return Array.from({ length: totalKnown }, (_, i) => i + 1)
    }

    let start = windowStart

    if (currentPage < start) {
      start = currentPage
    } else if (currentPage > start + SIZE - 1) {
      start = currentPage - SIZE + 1
    }
    start = Math.max(1, Math.min(start, totalKnown - SIZE + 1))

    if (start !== windowStart) setWindowStart(start)

    const end = Math.min(start + SIZE - 1, totalKnown)
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }, [currentPage, knownMaxPage, isLastPage, windowStart])

  const showPrev = knownMaxPage > SIZE && currentPage > 1
  const showNext = !isLastPage || currentPage < knownMaxPage

  return (
    <div className='flex items-center gap-10px'>
      {showPrev && (
        <Button
          theme='light'
          type='button'
          title='Назад'
          className='p-2'
          onClick={() => onPageChange(currentPage - 1)}
        />
      )}
      <ul className='flex gap-10px list-none'>
        {pages.map((pageNumber) => (
          <li key={pageNumber}>
            <Button
              theme={currentPage === pageNumber ? 'dark' : 'light'}
              type='button'
              title={`${pageNumber}`}
              className='size-10'
              onClick={() => onPageChange(pageNumber)}
            />
          </li>
        ))}
      </ul>
      {showNext && (
        <Button
          theme='light'
          type='button'
          title='Вперёд'
          className='p-2'
          onClick={() => onPageChange(currentPage + 1)}
        />
      )}
    </div>
  )
}
