import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { loadCartFromStorageThunk } from './thunks'
import type { CartItem, CartState } from './types'

const initialState: CartState = {
  items: [],
  selectedIds: [],
  loading: false,
  error: null,
}

const saveCartToStorage = (items: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(items))
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.productId === action.payload.productId)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        })

        state.selectedIds.push(action.payload.productId)
      }

      saveCartToStorage(state.items)
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.productId !== action.payload)

      saveCartToStorage(state.items)
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.productId === action.payload)

      if (item) {
        item.quantity += 1
      }

      saveCartToStorage(state.items)
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.productId === action.payload)

      if (!item) return

      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        state.items = state.items.filter((i) => i.productId !== action.payload)
      }

      saveCartToStorage(state.items)
    },

    clearCart: (state) => {
      state.items = []
      state.selectedIds = []

      saveCartToStorage(state.items)
    },

    toggleSelectProduct: (state, action: PayloadAction<string>) => {
      const id = action.payload

      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((itemId) => itemId !== id)
      } else {
        state.selectedIds.push(id)
      }
    },

    selectAllProducts: (state) => {
      state.selectedIds = state.items.map((item) => item.productId)
    },

    clearSelection: (state) => {
      state.selectedIds = []
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadCartFromStorageThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(loadCartFromStorageThunk.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload

        state.selectedIds = action.payload.map((item) => item.productId)
      })

      .addCase(loadCartFromStorageThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  toggleSelectProduct,
  selectAllProducts,
  clearSelection,
} = cartSlice.actions
