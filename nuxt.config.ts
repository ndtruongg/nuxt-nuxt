// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.ENV_MODE === 'development' },
  modules: ['@unocss/nuxt', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/html-validator'],
  experimental: {
    viewTransition: true
  },
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
  },
  i18n: {
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'vi',
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'vi'
    },
    locales: [
      {
        code: 'vi',
        name: 'Vietnamese',
        file: 'vi.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ]
  },
  htmlValidator: {
    usePrettier: false,
    logLevel: 'error',
    failOnError: false,
    /** A list of routes to ignore (that is, not check validity for). */
    ignore: [/\.(xml|rss|json)$/],
    options: {
      extends: ['html-validate:document', 'html-validate:recommended', 'html-validate:standard'],
      rules: {}
    }
  }
})
