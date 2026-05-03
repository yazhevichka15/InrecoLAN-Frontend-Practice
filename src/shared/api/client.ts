import { refreshAuthToken } from './auth/refreshTokens'

// Интерфейс для GET-, POST-, PUT-, DELETE-запросов с автообновлением токенов
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

    if (response.status === 401 && token) {
      const updatedToken = await refreshAuthToken()
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

    if (response.status === 401 && token) {
      const updatedToken = await refreshAuthToken()
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

    if (response.status === 401 && token) {
      const updatedToken = await refreshAuthToken()
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

    if (response.status === 401 && token) {
      const updatedToken = await refreshAuthToken()
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
