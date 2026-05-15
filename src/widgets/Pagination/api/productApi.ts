import { type IProductResponse } from '../model/types'

const BASE_URL = 'http://localhost:9200'

export interface IProductPageResult {
  products: IProductResponse[]
  isLastPage: boolean
}

export async function fetchProductPage(page: number): Promise<IProductPageResult> {
  const response = await fetch(`${BASE_URL}/api/Catalog/Product?page=${page}`)
  if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`)
  const products: IProductResponse[] = await response.json()

  const nextResponse = await fetch(`${BASE_URL}/api/Catalog/Product?page=${page + 1}`)
  const nextProducts = await nextResponse.json()
  const isLastPage = nextProducts.length === 0

  return { products, isLastPage }
}
