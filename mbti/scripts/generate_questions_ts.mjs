import fs from 'node:fs'

const src = new URL('./questions.json', import.meta.url)
const dst = new URL('../src/data/questions.ts', import.meta.url)

const raw = JSON.parse(fs.readFileSync(src, 'utf8'))
const questions = raw.questions.map((q) => {
  const step = q.dimension
  const leftPole = q.dimension === 'EI' ? 'E' : q.dimension === 'SN' ? 'S' : q.dimension === 'TF' ? 'T' : 'J'
  const rightPole = q.dimension === 'EI' ? 'I' : q.dimension === 'SN' ? 'N' : q.dimension === 'TF' ? 'F' : 'P'
  return { ...q, step, leftPole, rightPole }
})

const json = JSON.stringify(questions, null, 2)

// Produce JS/TS object literal (not JSON) to satisfy strict TS types
const objectLiteral = json.replace(/"(id|prompt|a|b|dimension|weight|step|leftPole|rightPole)":/g, '$1:')

const content = `import type { Question } from '../core/types'\n\nexport const questions: Question[] = ${objectLiteral}\n\nexport const questionMap = new Map(questions.map((question) => [question.id, question]))\n`
fs.writeFileSync(dst, content)
