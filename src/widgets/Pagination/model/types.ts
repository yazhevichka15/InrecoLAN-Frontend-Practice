export interface IBrandResponse {
  id: number
  title: string | null
  logoImgPath: string | null
}

export interface IProductTypeResponse {
  id: number
  title: string
}

export interface IProductResponse {
  id: string
  article: string | null
  title: string | null
  price: number
  quantity: number
  lampPower: number | null
  lampCount: number | null
  brand: IBrandResponse
  productType: IProductTypeResponse
  mainImgPath: string | null
  addedDate: string
}
