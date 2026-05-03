import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registerThunk } from './thunks'
import type { AuthState } from './types'

const initialState: AuthState = {
  isAuth: false,
  accessToken: null,
  refreshToken: null,
  user: null,
  loading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Вход в систему
      .addCase(loginThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false
        state.isAuth = true
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.user = {
          userId: action.payload.userId,
          email: action.payload.email,
          userRole: action.payload.userRole,
        }
        localStorage.setItem('accessToken', action.payload.accessToken)
        localStorage.setItem('refreshToken', action.payload.refreshToken)
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
        state.isAuth = false
        state.accessToken = null
        state.refreshToken = null
        state.user = null
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      })
      // Регистрация
      .addCase(registerThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false
        state.isAuth = true
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
        state.user = {
          userId: action.payload.userId,
          email: action.payload.email,
          userRole: action.payload.userRole,
        }
        localStorage.setItem('accessToken', action.payload.accessToken)
        localStorage.setItem('refreshToken', action.payload.refreshToken)
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // Выход из системы
      .addCase(logoutThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false
        state.isAuth = false
        state.accessToken = null
        state.refreshToken = null
        state.user = null
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.loading = false
        state.isAuth = false
        state.accessToken = null
        state.refreshToken = null
        state.user = null
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      })
  },
})
