// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
    css: ['~/assets/style.css'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'en',
            },
        },
    }
})
