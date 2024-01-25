// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-tiptap-editor', "@nuxtjs/tailwindcss", "nuxt-icon"],
  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
    lowlight: {
      theme: "github-dark", //default theme
    },
  },
})