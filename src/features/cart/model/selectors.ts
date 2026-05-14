import type { StateSchema } from './types'

export const selectCart = (state: StateSchema) => state.cart

export const selectCartItems = (state: StateSchema) => state.cart.items

export const selectCartLoading = (state: StateSchema) => state.cart.loading

export const selectCartError = (state: StateSchema) => state.cart.error

export const selectCartTotalCount = (state: StateSchema) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export const selectCartTotalPrice = (state: StateSchema) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

export const selectSelectedIds = (state: StateSchema) => state.cart.selectedIds

export const selectSelectedCartItems = (state: StateSchema) => {
  const items = state.cart.items
  const selectedIds = state.cart.selectedIds

  return items.filter((item) => selectedIds.includes(item.productId))
}

export const selectIsAllSelected = (state: StateSchema) =>
  state.cart.items.length > 0 && state.cart.selectedIds.length === state.cart.items.length
