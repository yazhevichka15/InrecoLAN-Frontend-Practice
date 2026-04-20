interface IRefreshTokenCredentials {
  refreshToken: string
  accessToken: string
}

export async function refreshTokenRequest(
  credentials: IRefreshTokenCredentials,
  accessToken: string
) {
  const res = await fetch(`/api/Users/Auth/RefreshToken`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(credentials),
  })

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    throw new Error(data?.message || 'Refresh token request failed')
  }

  return data
}

async function updateAuthTokens() {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if (!accessToken || !refreshToken) {
    throw new Error('Tokens not founded!')
  }

  const res = await refreshTokenRequest(
    {
      accessToken,
      refreshToken,
    },
    accessToken
  )

  localStorage.setItem('accessToken', res.accessToken)
  localStorage.setItem('refreshToken', res.refreshToken)

  return res.accessToken
}

export const client = {
  async get(endpoint: string, token?: string, options?: RequestInit) {
    const request = (accessToken?: string) =>
      fetch(`/api${endpoint}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          ...options?.headers,
        },
        ...options,
      })

    let response = await request(token)

    if (response.status === 401) {
      const updatedToken = await updateAuthTokens()
      response = await request(updatedToken)
    }

    const res = await response.json().catch(() => null)

    if (!response.ok) {
      const error: any = new Error(res?.message || 'Request error')
      error.details = res?.details
      error.status = response.status
      throw error
    }

    return res
  },

  async post(endpoint: string, body: any, token?: string, options?: RequestInit) {
    const request = (accessToken?: string) =>
      fetch(`/api${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          accept: 'text/plain',
          'Content-Type': 'application/json',
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          ...options?.headers,
        },
        ...options,
      })

    let response = await request(token)

    if (response.status === 401) {
      const updatedToken = await updateAuthTokens()
      response = await request(updatedToken)
    }

    const res = await response.json().catch(() => null)

    if (!response.ok) {
      const error: any = new Error(res?.message || 'Request error')
      error.details = res?.details
      error.status = response.status
      throw error
    }

    return res
  },

  async put(endpoint: string, body: any, token?: string, options?: RequestInit) {
    const request = (accessToken?: string) =>
      fetch(`/api${endpoint}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          ...options?.headers,
        },
        ...options,
      })

    let response = await request(token)

    if (response.status === 401) {
      const updatedToken = await updateAuthTokens()
      response = await request(updatedToken)
    }

    const res = await response.json().catch(() => null)

    if (!response.ok) {
      const error: any = new Error(res?.message || 'Request error')
      error.details = res?.details
      error.status = response.status
      throw error
    }

    return res
  },

  async delete(endpoint: string, token?: string, options?: RequestInit) {
    const request = (accessToken?: string) =>
      fetch(`/api${endpoint}`, {
        method: 'DELETE',
        headers: {
          accept: '*/*',
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
          ...options?.headers,
        },
        ...options,
      })

    let response = await request(token)

    if (response.status === 401) {
      const updatedToken = await updateAuthTokens()
      response = await request(updatedToken)
    }

    if (response.status === 204) return null

    const res = await response.json().catch(() => null)

    if (!response.ok) {
      const error: any = new Error(res?.message || 'Request error')
      error.details = res?.details
      error.status = response.status
      throw error
    }

    return res
  },
}
