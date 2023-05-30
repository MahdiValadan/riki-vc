export default defineNuxtRouteMiddleware((to, from) => {
    const router = useRouter()
    if (!router.hasRoute(to.name)) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page Not Found'
        })
    }
})
