import { createError, defineEventHandler, getRouterParam } from 'h3'
import { getProjectById } from '../../utils/localDatabase'

export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid project id' })
  }

  const project = await getProjectById(id)

  if (!project) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
  }

  return project
})
