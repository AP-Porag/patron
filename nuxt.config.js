export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Patron',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript",
        body: true,
      },
      {
        src: "/vendor/aos/aos.js",
        body: true,
      },{
        src: "/vendor/bootstrap/js/bootstrap.bundle.min.js",
        body: true,
      },{
        src: "/vendor/glightbox/js/glightbox.min.js",
        body: true,
      },{
        src: "/vendor/isotope-layout/isotope.pkgd.min.js",
        body: true,
      },{
        src: "/vendor/php-email-form/validate.js",
        body: true,
      },{
        src: "/vendor/swiper/swiper-bundle.min.js",
        body: true,
      },{
        src: "/vendor/waypoints/noframework.waypoints.js",
        body: true,
      },
      {
        src: "/js/main.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/vendor/animate.css/animate.min.css',
    '~/assets/vendor/aos/aos.css',
    '~/assets/vendor/bootstrap/css/bootstrap.min.css',
    '~/assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '~/assets/vendor/boxicons/css/boxicons.min.css',
    '~/assets/vendor/glightbox/css/glightbox.min.css',
    '~/assets/vendor/remixicon/remixicon.css',
    '~/assets/vendor/swiper/swiper-bundle.min.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
