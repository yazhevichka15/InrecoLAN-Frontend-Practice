export { authSlice } from './model/slice'
export { loginThunk, logoutThunk, registerThunk } from './model/thunks'
export type { AuthState, AuthUser, StateSchema, AuthDispatch } from './model/types'
export {
  selectAuth,
  selectIsAuth,
  selectAuthUser,
  selectAuthLoading,
  selectAuthError,
} from './model/selectors'
export { type ILoginCredentials, login } from './api/login'
export { type IRegisterCredentials, register } from './api/register'
