import { spawn } from 'node:child_process'

const port = process.env.TUNNEL_PORT || process.argv[2] || '5173'
const targetUrl = `http://127.0.0.1:${String(port)}`

const child = spawn('cloudflared', ['tunnel', '--url', targetUrl], {
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
  console.error('Failed to start cloudflared:', error)
  console.error('Please install cloudflared first and ensure it is available in PATH.')
  process.exit(1)
})
