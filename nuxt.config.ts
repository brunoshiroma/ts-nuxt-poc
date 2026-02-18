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
    '@nuxt/eslint'
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
      url: 'redis://localhost:6379'
    }
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  }
})