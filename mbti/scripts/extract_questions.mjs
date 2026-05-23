import fs from 'node:fs'

const SRC = new URL('../MBTI官方Form M完整版（93题）题库+计分手册.md', import.meta.url)

/**
 * Parse a weight line like:
 * 1:1.12,5:1.18,...
 */
function parseWeights(line) {
  const out = new Map()
  for (const part of line.split(',')) {
    const m = part.trim().match(/^(\d+):(\d+(?:\.\d+)?)$/)
    if (!m) continue
    out.set(Number(m[1]), Number(m[2]))
  }
  return out
}

function mustGet(map, id) {
  const v = map.get(id)
  if (v == null) throw new Error(`Missing weight for Q${id}`)
  return v
}

function dimensionForId(id) {
  const mod = id % 4
  if (mod === 1) return 'EI'
  if (mod === 2) return 'SN'
  if (mod === 3) return 'TF'
  return 'JP'
}

const md = fs.readFileSync(SRC, 'utf8')
const lines = md.split(/\r?\n/)

// Find the 4 weight lines (single-line tables).
let eiLine = null
let snLine = null
let tfLine = null
let jpLine = null
for (let i = 0; i < lines.length; i++) {
  const l = lines[i].trim()
  if (l.startsWith('### E/I')) eiLine = lines[i + 1]?.trim() ?? null
  if (l.startsWith('### S/N')) snLine = lines[i + 1]?.trim() ?? null
  if (l.startsWith('### T/F')) tfLine = lines[i + 1]?.trim() ?? null
  if (l.startsWith('### J/P')) jpLine = lines[i + 1]?.trim() ?? null
}
if (!eiLine || !snLine || !tfLine || !jpLine) {
  throw new Error('Failed to locate weight lines in markdown')
}

const weightsEI = parseWeights(eiLine)
const weightsSN = parseWeights(snLine)
const weightsTF = parseWeights(tfLine)
const weightsJP = parseWeights(jpLine)

const weightsAll = new Map()
for (const [k, v] of weightsEI) weightsAll.set(k, { w: v, dim: 'EI' })
for (const [k, v] of weightsSN) weightsAll.set(k, { w: v, dim: 'SN' })
for (const [k, v] of weightsTF) weightsAll.set(k, { w: v, dim: 'TF' })
for (const [k, v] of weightsJP) weightsAll.set(k, { w: v, dim: 'JP' })

// Parse questions section
const startIdx = lines.findIndex((l) => l.trim().startsWith('## 二、93题完整题目'))
if (startIdx < 0) throw new Error('Questions section not found')

const qRegex = /^(\d+)\.\s*(.+)$/

const questions = []
for (let i = startIdx + 1; i < lines.length; i++) {
  const m = lines[i].trim().match(qRegex)
  if (!m) continue
  const id = Number(m[1])
  const prompt = m[2].trim()

  // Next line should contain A...B...
  const abLine = (lines[i + 1] ?? '').trim()
  const aMatch = abLine.match(/A\.(.+?)\s{2,}a\./)
  const bMatch = abLine.match(/\sB\.(.+)$/)
  if (!aMatch || !bMatch) {
    throw new Error(`Failed to parse A/B line for Q${id}: ${abLine}`)
  }
  const left = aMatch[1].trim()
  const right = bMatch[1].trim()

  const dim = dimensionForId(id)
  const wInfo = weightsAll.get(id)
  if (!wInfo) throw new Error(`Missing weight entry for Q${id}`)
  if (wInfo.dim !== dim) {
    throw new Error(`Dimension mismatch for Q${id}: expected ${dim} from id%4, but weight table says ${wInfo.dim}`)
  }

  questions.push({
    id,
    prompt,
    a: left,
    b: right,
    dimension: dim,
    weight: mustGet(
      dim === 'EI' ? weightsEI : dim === 'SN' ? weightsSN : dim === 'TF' ? weightsTF : weightsJP,
      id,
    ),
  })

  if (id === 93) break
}

if (questions.length !== 93) {
  throw new Error(`Expected 93 questions, got ${questions.length}`)
}

const out = {
  meta: {
    generatedAt: new Date().toISOString(),
    source: 'MBTI官方Form M完整版（93题）题库+计分手册.md',
  },
  questions,
}

process.stdout.write(JSON.stringify(out, null, 2))
