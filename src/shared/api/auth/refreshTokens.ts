import { storageTokens } from './storageTokens'

interface IRefreshTokenCredentials {
  refreshToken: string
  accessToken: string
}

async function refreshTokenRequest(credentials: IRefreshTokenCredentials) {
  const res = await fetch(`/api/Users/Auth/RefreshToken`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credentials.accessToken}`,
    },
    body: JSON.stringify(credentials),
  })

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new Error(data?.message || 'Session expired')
  }

  return data
}

export async function refreshAuthToken() {
  const accessToken = storageTokens.getAccessToken()
  const refreshToken = storageTokens.getRefreshToken()

  if (!accessToken || !refreshToken) {
    throw new Error('Session expired')
  }

  const res = await refreshTokenRequest({
    accessToken,
    refreshToken,
  })

  storageTokens.setTokens(res.accessToken, res.refreshToken)

  return res.accessToken
}
