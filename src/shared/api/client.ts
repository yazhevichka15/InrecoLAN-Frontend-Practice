export const client = {
  // еще должны быть обертки для методов put, delete

  async get(endpoint: string, token?: string, options?: RequestInit) {
    const response = await fetch(`/api${endpoint}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options?.headers,
      },
      ...options,
    })

    const res = await response.json().catch(() => null)

    if (!response.ok) {
      const error: any = new Error(res?.message || 'Request error')
      error.details = res?.details
      error.status = response.status
      throw error
    }

    return res
  },

  async post(endpoint: string, body: any, options?: RequestInit) {
    const response = await fetch(`/api${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json',

        ...options?.headers,
      },
      ...options,
    })

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
