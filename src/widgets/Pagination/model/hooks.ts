import { useState, useEffect, useCallback } from 'react'
import { fetchProductPage } from '../api/productApi'
import { type IProductResponse } from './types'

export function useProductPagination() {
  const [products, setProducts] = useState<IProductResponse[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [knownMaxPage, setKnownMaxPage] = useState(1)

  const loadPage = useCallback(async (page: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await fetchProductPage(page)
      setProducts(result.products)
      setIsLastPage(result.isLastPage)

      setKnownMaxPage((prev) => Math.max(prev, page))
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    loadPage(currentPage)
  }, [currentPage, loadPage])

  const goToPage = useCallback((page: number) => {
    if (page < 1) return
    setCurrentPage(page)
  }, [])

  return {
    products,
    currentPage,
    knownMaxPage,
    isLastPage,
    isLoading,
    error,
    goToPage,
    totalPagesHint: isLastPage ? knownMaxPage : knownMaxPage + 1,
  }
}
