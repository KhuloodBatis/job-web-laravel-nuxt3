// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false},

  devServer :{
    host: 'api.test'
  },

  plugins:[
     '@/plugins/main.js'
  ],
  modules: [
    "nuxt-auth-sanctum",
    "@nuxtjs/apollo",
  ],

  apollo: {
    clients: {
      default: {
        httpLinkOptions: {
          credentials:'include'
        },

        httpEndpoint: 'http://api.test/graphql'
      }
    },
  },

  sanctum:{
    baseUrl: 'http://api.test',

    redirect: {
      onLogin: '/dashboard',
      onAuthOnly: '/auth/login',
      onGuestOnly: '/dashboard'
      
    }

  },

  css: ['~/assets/css/app.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})