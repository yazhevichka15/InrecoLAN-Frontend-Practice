import { configureStore, combineSlices } from '@reduxjs/toolkit'
import { authSlice } from '@features/auth'

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

const rootReducer = combineSlices(authSlice)

export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
