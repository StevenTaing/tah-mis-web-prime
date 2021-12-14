export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TAH Management Information System',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['primeflex/primeflex.css', '~/assets/styles/layout.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/division.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'primevue/nuxt',
    '@nuxtjs/auth-next',
  ],

  axios: { baseURL: 'http://localhost:3333/api' },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/profile', method: 'get' },
        },
        redirect: {
          home: '/',
        },
        watchLoggedIn: true,
      },
    },
  },

  primevue: {
    theme: 'saga-blue',
    ripple: true,
    components: [
      'InputText',
      'Password',
      'Button',
      'DataTable',
      'Dialog',
      'Toast',
      'Sidebar',
      'OverlayPanel',
      'Menu',
    ],
    directives: ['Tooltip', 'Badge', 'ripple'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['primevue'],
  },
};
