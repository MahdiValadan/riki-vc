import { copyFile, mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const sourceDir = resolve(process.cwd(), 'database', 'storage', 'images', 'projects')
const targetDir = resolve(process.cwd(), 'public', 'images', 'projects')
const generatedDir = resolve(process.cwd(), 'server', 'generated')
const generatedFile = resolve(generatedDir, 'localDatabaseData.ts')

await mkdir(targetDir, { recursive: true })
await mkdir(generatedDir, { recursive: true })

const entries = await readdir(sourceDir, { withFileTypes: true })

for (const entry of entries) {
  if (!entry.isFile()) {
    continue
  }

  await copyFile(resolve(sourceDir, entry.name), resolve(targetDir, entry.name))
}

const [areasCsv, contactCsv, personsCsv, projectAreasCsv, projectsCsv] = await Promise.all([
  readFile(resolve(process.cwd(), 'database', 'tables', 'areas.csv'), 'utf8'),
  readFile(resolve(process.cwd(), 'database', 'tables', 'contact_us.csv'), 'utf8'),
  readFile(resolve(process.cwd(), 'database', 'tables', 'person.csv'), 'utf8'),
  readFile(resolve(process.cwd(), 'database', 'tables', 'project_area.csv'), 'utf8'),
  readFile(resolve(process.cwd(), 'database', 'tables', 'projects.csv'), 'utf8'),
])

const generatedContent = `export const areasCsv = ${JSON.stringify(areasCsv)}\n` +
  `export const contactCsv = ${JSON.stringify(contactCsv)}\n` +
  `export const personsCsv = ${JSON.stringify(personsCsv)}\n` +
  `export const projectAreasCsv = ${JSON.stringify(projectAreasCsv)}\n` +
  `export const projectsCsv = ${JSON.stringify(projectsCsv)}\n`

await writeFile(generatedFile, generatedContent, 'utf8')
