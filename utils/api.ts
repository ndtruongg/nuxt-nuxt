import Cookies from 'js-cookie'

export default function <T>(url: string, options: any = {}) {
  const accessToken = Cookies.get('ACCESS_TOKEN') || ''
  const config = useRuntimeConfig()
  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  return api<T>(url, options)
}
