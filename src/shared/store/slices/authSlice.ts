import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { type ILoginCredentials, login } from '@shared/api/endpoints/login'
import { logout } from '@shared/api/endpoints/logout'
import { type IRegisterCredentials, register } from '@shared/api/endpoints/register'

interface AuthState {
  isAuth: boolean
  accessToken: string | null
  refreshToken: string | null
  user: {
    userId: string
    email: string
    userRole: number
  } | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  isAuth: false,
  accessToken: null,
  refreshToken: null,
  user: null,
  loading: false,
  error: null,
}

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials: ILoginCredentials, { rejectWithValue }) => {
    try {
      return await login(credentials)
    } catch (err: any) {
      return rejectWithValue(err.details || err.message)
    }
  }
)

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state: any = getState()
      const accessToken = state.auth.accessToken

      return await logout(accessToken)
    } catch (err: any) {
      return rejectWithValue(err.message)
    }
  }
)

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials: IRegisterCredentials, { rejectWithValue }) => {
    try {
      return await register(credentials)
    } catch (err: any) {
      return rejectWithValue(err.details || err.message)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Обработка входа в систему
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

      // Обработка регистрации
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

      // Обработка выхода из системы
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
