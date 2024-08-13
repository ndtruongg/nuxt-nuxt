import Cookies from 'js-cookie'

export default async function <T>(url: string, options: any = {}) {
  const accessToken = Cookies.get('ACCESS_TOKEN') || ''
  const config = useRuntimeConfig()

  const headers = {
    ...options.headers,
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
  }

  const api = $fetch.create({
    baseURL: options.baseURL || config.public.apiBaseUrl,
    headers,
    ...options
  })

  return api<T>(url, options)
    .then((response) => response)
    .catch((error) => {
      throw error
    })
}
