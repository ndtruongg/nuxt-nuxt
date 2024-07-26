// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.ENV_MODE === 'development' },
  modules: ['@unocss/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/index.scss";'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_ENDPOINT
    }
  }
})
