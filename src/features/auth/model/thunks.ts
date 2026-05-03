import { createAsyncThunk } from '@reduxjs/toolkit'

import type { StateSchema } from './types'
import { login, type ILoginCredentials } from '../api/login'
import { register, type IRegisterCredentials } from '../api/register'
import { logout } from '../api/logout'

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
      const state = getState() as StateSchema
      const token = state.auth.accessToken

      if (!token) {
        return rejectWithValue('No access token')
      }

      return await logout(token)
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
