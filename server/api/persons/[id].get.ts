import { createError, defineEventHandler, getRouterParam } from 'h3'
import { getPersonById } from '../../utils/localDatabase'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid person id' })
  }

  const person = await getPersonById(id)

  if (!person) {
    throw createError({ statusCode: 404, statusMessage: 'Person not found' })
  }

  return person
})
