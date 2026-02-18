import Aura from '@primeuix/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  debug: true,
  modules:
    [
      '@primevue/nuxt-module',
      '@nuxthub/core',
      '@nuxt/eslint',
      '@nuxtjs/i18n'
    ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  runtimeConfig: {

  },
  hub: {
    db: 'postgresql',
    cache: {
      driver: 'redis',
      url: 'redis://localhost:6379',
      ttl: 60
    }
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  i18n: {
    locales: [
      { code: 'br', language: 'pt-BR' }
    ],
    defaultLocale: 'br',
  }
})