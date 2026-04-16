import { configureStore, combineSlices } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'

const accessToken = localStorage.getItem('accessToken')
const refreshToken = localStorage.getItem('refreshToken')

const preloadedState = {
  auth: {
    isAuth: !!accessToken,
    accessToken,
    refreshToken,
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
