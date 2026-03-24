import {
  areasCsv,
  contactCsv,
  personsCsv,
  projectAreasCsv,
  projectsCsv,
} from '../generated/localDatabaseData'
import { access, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export type AreaRecord = {
  id: number
  name: string
  info: string
  image: string
}

export type PersonRecord = {
  id: number
  name: string
  role: string
  cv: string
  image: string
}

export type ProjectRecord = {
  id: number
  name: string
  info: string
  image: string
  isMR: boolean
  person_id: number
  link: string
  company_desc: string
  desc_content: string
  desc_data: string[]
}

type ProjectAreaRecord = {
  id: number
  project_id: number
  area_id: number
}

type ContactRecord = {
  id: number
  created_at: string
  name: string
  email: string
  message: string
}

type DatabaseState = {
  areas: AreaRecord[]
  persons: PersonRecord[]
  projects: ProjectRecord[]
  projectAreas: ProjectAreaRecord[]
}

type ProjectSummary = {
  id: number
  name: string
  image: string
  areas: Pick<AreaRecord, 'id' | 'name'>[]
}

type ProjectDetail = ProjectRecord & {
  person: Pick<PersonRecord, 'id' | 'name'>
  areas: Pick<AreaRecord, 'id' | 'name'>[]
}

type PersonDetail = PersonRecord & {
  projects: Pick<ProjectRecord, 'id' | 'name'>[]
}

const tablesRoot = resolve(process.cwd(), 'database', 'tables')
const tempContactsPath = '/tmp/contact_us.csv'

function parseCsv(content: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let value = ''
  let inQuotes = false

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index]
    const next = content[index + 1]

    if (inQuotes) {
      if (char === '"') {
        if (next === '"') {
          value += '"'
          index += 1
        } else {
          inQuotes = false
        }
      } else {
        value += char
      }
      continue
    }

    if (char === '"') {
      inQuotes = true
      continue
    }

    if (char === ',') {
      row.push(value)
      value = ''
      continue
    }

    if (char === '\r') {
      continue
    }

    if (char === '\n') {
      row.push(value)
      value = ''
      if (row.some(cell => cell.length > 0)) {
        rows.push(row)
      }
      row = []
      continue
    }

    value += char
  }

  if (value.length > 0 || row.length > 0) {
    row.push(value)
    if (row.some(cell => cell.length > 0)) {
      rows.push(row)
    }
  }

  return rows
}

function parseCsvObjects(content: string): Record<string, string>[] {
  const rows = parseCsv(content)
  const headers = rows.shift()

  if (!headers) {
    return []
  }

  return rows.map((row) =>
    headers.reduce<Record<string, string>>((record, header, index) => {
      record[header] = row[index] ?? ''
      return record
    }, {}),
  )
}

function escapeCsvValue(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`
  }

  return value
}

function serializeCsv(rows: Record<string, string>[], headers: string[]): string {
  const lines = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => escapeCsvValue(row[header] ?? '')).join(',')),
  ]

  return `${lines.join('\n')}\n`
}

function parseBoolean(value: string): boolean {
  return ['t', 'true', '1', 'yes'].includes(value.trim().toLowerCase())
}

function parsePostgresArray(value: string): string[] {
  const trimmed = value.trim()

  if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) {
    return []
  }

  const items: string[] = []
  let current = ''
  let inQuotes = false

  for (let index = 1; index < trimmed.length - 1; index += 1) {
    const char = trimmed[index]
    const next = trimmed[index + 1]

    if (inQuotes) {
      if (char === '\\' && next) {
        current += next
        index += 1
      } else if (char === '"') {
        inQuotes = false
      } else {
        current += char
      }
      continue
    }

    if (char === '"') {
      inQuotes = true
      continue
    }

    if (char === ',') {
      items.push(current)
      current = ''
      continue
    }

    current += char
  }

  items.push(current)
  return items.map(item => item.trim())
}

function toAreaRecord(record: Record<string, string>): AreaRecord {
  return {
    id: Number(record.id),
    name: record.name,
    info: record.info,
    image: record.image,
  }
}

function toPersonRecord(record: Record<string, string>): PersonRecord {
  return {
    id: Number(record.id),
    name: record.name,
    role: record.role,
    cv: record.cv,
    image: record.image,
  }
}

function toProjectRecord(record: Record<string, string>): ProjectRecord {
  return {
    id: Number(record.id),
    name: record.name,
    info: record.info,
    image: record.image,
    isMR: parseBoolean(record.isMR),
    person_id: Number(record.person_id),
    link: record.link,
    company_desc: record.company_desc,
    desc_content: record.desc_content,
    desc_data: parsePostgresArray(record.desc_data),
  }
}

function toProjectAreaRecord(record: Record<string, string>): ProjectAreaRecord {
  return {
    id: Number(record.id),
    project_id: Number(record.project_id),
    area_id: Number(record.area_id),
  }
}

function toContactRecord(record: Record<string, string>): ContactRecord {
  return {
    id: Number(record.id),
    created_at: record.created_at,
    name: record.name,
    email: record.email,
    message: record.message,
  }
}

async function readDatabase(): Promise<DatabaseState> {
  return {
    areas: parseCsvObjects(areasCsv).map(toAreaRecord),
    persons: parseCsvObjects(personsCsv).map(toPersonRecord),
    projects: parseCsvObjects(projectsCsv).map(toProjectRecord),
    projectAreas: parseCsvObjects(projectAreasCsv).map(toProjectAreaRecord),
  }
}

function getProjectAreas(
  projectId: number,
  areasById: Map<number, AreaRecord>,
  projectAreas: ProjectAreaRecord[],
): Pick<AreaRecord, 'id' | 'name'>[] {
  return projectAreas
    .filter(projectArea => projectArea.project_id === projectId)
    .map((projectArea) => areasById.get(projectArea.area_id))
    .filter((area): area is AreaRecord => Boolean(area))
    .map(area => ({ id: area.id, name: area.name }))
}

export async function listAreas(): Promise<AreaRecord[]> {
  const { areas } = await readDatabase()
  return [...areas]
}

export async function getAreaById(id: number): Promise<AreaRecord | null> {
  const { areas } = await readDatabase()
  return areas.find(area => area.id === id) ?? null
}

export async function listPersons(): Promise<PersonRecord[]> {
  const { persons } = await readDatabase()
  return [...persons]
}

export async function getPersonById(id: number): Promise<PersonDetail | null> {
  const { persons, projects } = await readDatabase()
  const person = persons.find(entry => entry.id === id)

  if (!person) {
    return null
  }

  return {
    ...person,
    projects: projects
      .filter(project => project.person_id === id)
      .map(project => ({ id: project.id, name: project.name })),
  }
}

export async function listProjects(options: { area?: string; mostRelevant?: boolean } = {}): Promise<ProjectSummary[]> {
  const { areas, projects, projectAreas } = await readDatabase()
  const areasById = new Map(areas.map(area => [area.id, area]))
  const normalizedArea = options.area?.trim().toLowerCase()

  return projects
    .filter((project) => {
      if (options.mostRelevant && !project.isMR) {
        return false
      }

      if (!normalizedArea) {
        return true
      }

      return getProjectAreas(project.id, areasById, projectAreas).some(
        area => area.name.toLowerCase() === normalizedArea,
      )
    })
    .map((project) => ({
      id: project.id,
      name: project.name,
      image: project.image,
      areas: getProjectAreas(project.id, areasById, projectAreas),
    }))
}

export async function getProjectById(id: number): Promise<ProjectDetail | null> {
  const { areas, persons, projects, projectAreas } = await readDatabase()
  const project = projects.find(entry => entry.id === id)

  if (!project) {
    return null
  }

  const person = persons.find(entry => entry.id === project.person_id)
  const areasById = new Map(areas.map(area => [area.id, area]))

  if (!person) {
    throw new Error(`Missing person ${project.person_id} for project ${id}`)
  }

  return {
    ...project,
    person: {
      id: person.id,
      name: person.name,
    },
    areas: getProjectAreas(project.id, areasById, projectAreas),
  }
}

async function resolveWritableContactsPath(): Promise<string> {
  const projectContactsPath = resolve(tablesRoot, 'contact_us.csv')

  if (!process.env.VERCEL) {
    return projectContactsPath
  }

  try {
    await access(tempContactsPath)
  } catch {
    await writeFile(tempContactsPath, contactCsv, 'utf8')
  }

  return tempContactsPath
}

export async function createContactMessage(input: {
  name: string
  email: string
  message: string
}): Promise<ContactRecord> {
  const tablePath = await resolveWritableContactsPath()
  const tableContent = await readFile(tablePath, 'utf8')
  const existingRecords = parseCsvObjects(tableContent).map(toContactRecord)
  const nextId = existingRecords.reduce((maxId, record) => Math.max(maxId, record.id), 0) + 1

  const newRecord: ContactRecord = {
    id: nextId,
    created_at: new Date().toISOString(),
    name: input.name.trim(),
    email: input.email.trim(),
    message: input.message.trim(),
  }

  const serialized = serializeCsv(
    [...existingRecords, newRecord].map((record) => ({
      id: String(record.id),
      created_at: record.created_at,
      name: record.name,
      email: record.email,
      message: record.message,
    })),
    ['id', 'created_at', 'name', 'email', 'message'],
  )

  await writeFile(tablePath, serialized, 'utf8')

  return newRecord
}
