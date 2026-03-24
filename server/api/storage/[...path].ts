import { createError, defineEventHandler, getRouterParam, setHeader } from 'h3'
import { readFile } from 'node:fs/promises'
import { getMimeType, getStorageFilePath } from '../../utils/localDatabase'

export default defineEventHandler(async (event) => {
  const pathParam = getRouterParam(event, 'path') ?? ''
  const segments = pathParam
    .split('/')
    .map(segment => segment.trim())
    .filter(Boolean)

  if (segments.length === 0) {
    throw createError({ statusCode: 404, statusMessage: 'File not found' })
  }

  let filePath = ''

  try {
    filePath = getStorageFilePath(...segments)
  } catch {
    throw createError({ statusCode: 400, statusMessage: 'Invalid file path' })
  }

  try {
    const file = await readFile(filePath)
    setHeader(event, 'content-type', getMimeType(filePath))
    return file
  } catch {
    throw createError({ statusCode: 404, statusMessage: 'File not found' })
  }
})
