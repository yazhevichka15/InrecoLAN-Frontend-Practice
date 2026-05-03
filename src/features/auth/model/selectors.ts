import type { StateSchema } from './types'

export const selectAuth = (state: StateSchema) => state.auth
export const selectIsAuth = (state: StateSchema) => state.auth.isAuth
export const selectAuthUser = (state: StateSchema) => state.auth.user
export const selectAuthLoading = (state: StateSchema) => state.auth.loading
export const selectAuthError = (state: StateSchema) => state.auth.error
