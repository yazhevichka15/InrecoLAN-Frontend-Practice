import { client } from '@shared/api'

export interface ILoginCredentials {
  email: string
  password: string
}

export async function login(credentials: ILoginCredentials) {
  const res = await client.post('/Users/Auth/LogIn', credentials)
  return res.data
}
