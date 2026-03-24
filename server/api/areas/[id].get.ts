import { createError, defineEventHandler, getRouterParam } from 'h3'
import { getAreaById } from '../../utils/localDatabase'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid area id' })
  }

  const area = await getAreaById(id)

  if (!area) {
    throw createError({ statusCode: 404, statusMessage: 'Area not found' })
  }

  return area
})
