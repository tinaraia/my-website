// Runs after `vite build`. Renders the page to HTML and writes it into
// dist/index.html so crawlers see the full page text without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const templatePath = path.join(root, 'dist/index.html')
const serverEntry = path.join(root, 'dist-ssr/entry-server.js')

const { render } = await import(pathToFileURL(serverEntry).href)
const template = fs.readFileSync(templatePath, 'utf-8')
const placeholder = '<div id="root"></div>'

if (!template.includes(placeholder)) {
  throw new Error(`Prerender failed: ${placeholder} not found in dist/index.html`)
}

fs.writeFileSync(templatePath, template.replace(placeholder, `<div id="root">${render()}</div>`))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('Prerendered dist/index.html')
