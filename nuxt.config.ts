import process from 'node:process'

const isDev = process.env.NODE_ENV === 'development'

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
    // NOTE: Only work on client-side
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: process.env.API_ENDPOINT || 'https://jsonplaceholder.typicode.com',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // }
  },
  runtimeConfig: {
    apiProxyUrl: process.env.API_ENDPOINT,
    public: {
      apiBaseUrl: process.env.API_ENDPOINT
    }
  },

  nitro: {
    // NOTE: Only work on client-side
    // devProxy: {
    //   '/api': {
    //     target: process.env.API_ENDPOINT || 'https://jsonplaceholder.typicode.com',
    //     changeOrigin: true
    //   }
    // }
  },

  routeRules: {
    '/': { prerender: true, ...(isDev ? {} : { cache: { swr: true, maxAge: 120 } }) }
    // NOTE: Work on both client-side and server-side
    // '/api/**': {
    //   proxy: `${process.env.API_ENDPOINT}/**`
    // }
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
