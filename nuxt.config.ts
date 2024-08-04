export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_URL,
      version: process.env.npm_package_version,
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "For Cute Anu",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "nuxt-viewport",
    "@nuxtjs/device",
  ],

  css: ["@/assets/css/main.scss", "nprogress/nprogress.css"],

  googleFonts: {
    preload: true,
    families: {
      Nunito: true,
      download: true,
      inject: true,
    },
    display: "swap",
  },

  colorMode: {
    classSuffix: "",
  },

  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },

  devtools: { enabled: true },
  compatibilityDate: "2024-07-24",
});
