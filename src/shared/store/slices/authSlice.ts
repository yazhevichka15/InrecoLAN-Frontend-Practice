import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { type ILoginCredentials, login } from '@shared/api/endpoints/login'

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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false
      state.accessToken = null
      state.refreshToken = null
      state.user = null
    },
  },

  extraReducers: (builder) => {
    builder
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
      })
  },
})

export const { logout } = authSlice.actions
