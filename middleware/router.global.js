export default defineNuxtRouteMiddleware((to, from) => {
    const router = useRouter()
    let routes = router.options.routes
    const dynamicRoutes = ['/areas/', '/projects/', '/persons/']
    const validPaths = []
    routes.forEach(route => {
        validPaths.push(route.path)
    });
    if (!validPaths.includes(to.path) && !dynamicRoutes.some(el => to.path.includes(el))) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page Not Found'
        })
    }
})
