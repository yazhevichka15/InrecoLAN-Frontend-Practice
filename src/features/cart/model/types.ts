import type { UnknownAction } from '@reduxjs/toolkit'
import type { ThunkDispatch } from 'redux-thunk'

export interface CartItem {
  productId: string
  title: string
  price: number
  imageUrl: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
  selectedIds: string[]
  loading: boolean
  error: string | null
}

export interface StateSchema {
  cart: CartState
}

export type CartDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>
