import { defineEventHandler, getQuery } from 'h3'
import { listProjects } from '../../utils/localDatabase'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const area = typeof query.area === 'string' ? query.area : undefined
  const mostRelevant =
    query.mostRelevant === 'true' ||
    query.mostRelevant === '1' ||
    query.mostRelevant === true

  const projects = await listProjects({ area, mostRelevant })
  return projects.sort((left, right) => left.name.localeCompare(right.name))
})
