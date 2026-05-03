import type { UnknownAction } from '@reduxjs/toolkit'
import type { ThunkDispatch } from 'redux-thunk'

export interface AuthUser {
  userId: string
  email: string
  userRole: number
}

export interface AuthState {
  isAuth: boolean
  accessToken: string | null
  refreshToken: string | null
  user: AuthUser | null
  loading: boolean
  error: string | null
}

export interface StateSchema {
  auth: AuthState
}

export type AuthDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>
