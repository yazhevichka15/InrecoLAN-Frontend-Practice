import { client } from '@shared/api'

export async function logout(token?: string) {
  return client.get('/Users/Auth/LogOut', token)
}
