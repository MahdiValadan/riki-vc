import { defineEventHandler } from 'h3'
import { listPersons } from '../../utils/localDatabase'

export default defineEventHandler(async () => {
  const persons = await listPersons()
  return persons.sort((left, right) => left.id - right.id)
})
