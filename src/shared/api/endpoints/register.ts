import { client } from '@shared/api'
import type { EUserRole } from '@entities/user'

export interface IRegisterCredentials {
  email: string
  name: string
  surname: string
  password: string
  birthday?: string
  userRole: EUserRole
}

export async function register(credentials: IRegisterCredentials) {
  const res = await client.post('/Users/Auth/SignUp', credentials)
  return res.data
}
