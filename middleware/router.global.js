export default defineNuxtRouteMiddleware((to, from) => {
    const router = useRouter()
    let routes = router.options.routes
    const validPaths = []
    const dynamicRoutes = ['/areas/', '/projects/', '/persons/']
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
