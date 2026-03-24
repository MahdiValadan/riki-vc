import { defineEventHandler } from 'h3'
import { listAreas } from '../../utils/localDatabase'

export default defineEventHandler(async () => {
  const areas = await listAreas()
  return areas.sort((left, right) => right.name.localeCompare(left.name))
})
