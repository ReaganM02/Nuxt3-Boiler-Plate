// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', ['@pinia/nuxt', {
    autoImports: [
      'acceptHMRUpdate',
      'defineStore',
      ['defineStore', 'definePiniaStore']
    ]
  }]],
  imports: {
    dirs: ['stores']
  },
  nitro: {
    plugins: ['~/server/plugins/mongodb.ts']
  },
  runtimeConfig: {
    MONGO_URL: process.env.MONGO_URL,
    public: {
      // Add public config here..
    }
  }
  // In case pinia is not working when the app is running. Uncomment to codes below.
  /* alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
  } */
})
