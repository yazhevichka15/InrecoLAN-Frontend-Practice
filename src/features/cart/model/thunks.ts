import { createAsyncThunk } from '@reduxjs/toolkit'
import type { CartItem } from './types'

export const loadCartFromStorageThunk = createAsyncThunk(
  'cart/loadCartFromStorage',
  async (_, { rejectWithValue }) => {
    try {
      const cart = localStorage.getItem('cart')

      if (!cart) {
        return []
      }

      return JSON.parse(cart) as CartItem[]
    } catch (err: any) {
      return rejectWithValue(err.message)
    }
  }
)
