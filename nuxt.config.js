// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  buildModules: [
    // ...
    '@nuxtjs/tailwindcss'
  ],
  modules: ['@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  plugins: ['~/plugins/fontawesome.js']
})
