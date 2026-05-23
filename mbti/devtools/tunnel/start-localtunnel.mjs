import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const port = process.env.TUNNEL_PORT || process.argv[2] || '5173'
const subdomain = process.env.LT_SUBDOMAIN

const args = ['--port', String(port)]

if (subdomain) {
  args.push('--subdomain', subdomain)
}

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const localtunnelBin = path.resolve(currentDir, '../../node_modules/localtunnel/bin/lt.js')

const child = spawn(process.execPath, [localtunnelBin, ...args], {
  stdio: 'inherit',
  shell: false,
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }

  process.exit(code ?? 0)
})

child.on('error', (error) => {
  console.error('Failed to start localtunnel:', error)
  process.exit(1)
})
