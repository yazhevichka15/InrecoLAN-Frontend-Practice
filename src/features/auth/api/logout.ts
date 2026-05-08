import { client } from '@shared/api'

export async function logout(accessToken: string) {
  return client.get('/Users/Auth/LogOut', accessToken)
}
