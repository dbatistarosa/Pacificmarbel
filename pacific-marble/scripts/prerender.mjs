import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distDir = resolve(root, 'dist')
const serverEntry = resolve(distDir, 'server', 'entry-server.js')

const { render } = await import(pathToFileURL(serverEntry))

let template = readFileSync(resolve(distDir, 'index.html'), 'utf-8')
const appHtml = render()
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
writeFileSync(resolve(distDir, 'index.html'), html)

console.log('Pre-rendering complete.')
