import { createError, defineEventHandler, getRouterParam, sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
  const pathParam = getRouterParam(event, 'path') ?? ''
  const segments = pathParam
    .split('/')
    .map(segment => segment.trim())
    .filter(Boolean)

  if (segments.length === 0) {
    throw createError({ statusCode: 404, statusMessage: 'File not found' })
  }

  if (segments[0] !== 'images' || segments[1] !== 'projects') {
    throw createError({ statusCode: 400, statusMessage: 'Invalid file path' })
  }

  return sendRedirect(event, `/${segments.join('/')}`, 302)
})
