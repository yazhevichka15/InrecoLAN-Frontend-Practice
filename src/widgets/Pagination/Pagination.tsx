import { Button } from '@shared/ui/Button'
import { type FC, useState } from 'react'

interface IPaginationProps {
  page: number
  totalPage: number
}

const SIZE = 7

export const Pagination: FC<IPaginationProps> = ({ page, totalPage }) => {
  const [state, setState] = useState(() => {
    const start =
      totalPage <= SIZE ? 1 : Math.min(Math.max(1, page - SIZE + 1), totalPage - SIZE + 1)
    return { currentPage: page, start }
  })

  const { currentPage, start } = state

  const setPage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPage) return
    setState((prev) => {
      let newStart = prev.start
      if (totalPage <= SIZE) {
        newStart = 1
      } else {
        if (newPage < newStart) {
          newStart = newPage
        } else if (newPage > newStart + SIZE - 1) {
          newStart = newPage - SIZE + 1
        }
        newStart = Math.max(1, Math.min(newStart, totalPage - SIZE + 1))
      }
      return { currentPage: newPage, start: newStart }
    })
  }

  const handleNextClick = () => {
    if (currentPage >= totalPage) return
    setState((prev) => ({
      currentPage: prev.currentPage + 1,
      start:
        prev.currentPage + 1 > prev.start + SIZE - 1
          ? Math.min(prev.start + 1, totalPage - SIZE + 1)
          : prev.start,
    }))
  }

  const handlePrevClick = () => {
    if (currentPage <= 1) return
    setState((prev) => ({
      currentPage: prev.currentPage - 1,
      start: prev.currentPage - 1 < prev.start ? Math.max(1, prev.start - 1) : prev.start,
    }))
  }

  if (totalPage < 2) return null

  const pages = Array.from({ length: Math.min(SIZE, totalPage - start + 1) }, (_, i) => start + i)

  const showPrev = totalPage > SIZE && currentPage > 1
  const showNext = totalPage > SIZE && currentPage < totalPage

  return (
    <div className='flex items-center gap-10px'>
      {showPrev && (
        <Button
          theme='light'
          type='button'
          title='Назад'
          className='p-2'
          onClick={handlePrevClick}
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
              onClick={() => setPage(pageNumber)}
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
          onClick={handleNextClick}
        />
      )}
    </div>
  )
}
