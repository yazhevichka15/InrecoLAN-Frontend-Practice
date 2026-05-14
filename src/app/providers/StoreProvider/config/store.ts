import { configureStore, combineSlices } from '@reduxjs/toolkit'

import { authSlice } from '@features/auth'
import { cartSlice } from '@features/cart'

const accessToken = localStorage.getItem('accessToken')
const refreshToken = localStorage.getItem('refreshToken')

const preloadedState = {
  auth: {
    isAuth: !!accessToken,
    accessToken,
    refreshToken,

    // Нужно делать запрос на получение пользователя по токену
    user: null,

    loading: false,
    error: null,
  },
}

const rootReducer = combineSlices(authSlice, cartSlice)

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
})

store.subscribe(() => {
  console.log('STORE:', store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
