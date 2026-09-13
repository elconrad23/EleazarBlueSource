// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  fonts: {
    throwOnError: false
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },

  image: {
    provider: 'static',
    presets: {
      default: {
        modifiers: {
          format: 'webp',
          fit: 'cover'
        }
      },
      small: {
        modifiers: {
          width: 300,
          height: 300,
          format: 'webp',
          fit: 'cover'
        }
      },
      medium: {
        modifiers: {
          width: 600,
          height: 400,
          format: 'webp',
          fit: 'cover'
        }
      }
    }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    zeroRuntime: true
  }
})
