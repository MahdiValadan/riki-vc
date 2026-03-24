import { createError, defineEventHandler, readBody } from 'h3'
import { createContactMessage } from '../utils/localDatabase'

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    email?: string
    message?: string
  }>(event)

  const name = body?.name?.trim() ?? ''
  const email = body?.email?.trim() ?? ''
  const message = body?.message?.trim() ?? ''

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Name, email and message are required' })
  }

  const record = await createContactMessage({ name, email, message })
  return { ok: true, record }
})
