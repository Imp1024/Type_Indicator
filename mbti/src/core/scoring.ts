import { questions } from '../data/questions'
import type { AnswerValue, Dimension, DimensionScore, MbtiType, Pole, StrengthLabel, TestResult } from './types'

const answerWeights: Record<AnswerValue, number> = {
  A: 2,
  a: 1,
  mid: 0,
  b: -1,
  B: -2,
}

const tieBreaker: Record<Dimension, Pole> = {
  EI: 'I',
  SN: 'N',
  TF: 'F',
  JP: 'P',
}

function getStrengthLabel(diff: number): StrengthLabel {
  if (diff <= 20) return '轻微倾向'
  if (diff <= 40) return '中等倾向'
  return '强烈倾向'
}

function getCloseGapNote(diff: number): string | null {
  if (diff <= 5) {
    return '该维度分差较小，说明你的这一组偏好更均衡，可根据情境灵活切换。'
  }
  return null
}

function getLoser(leftPole: Pole, rightPole: Pole, winner: Pole): Pole {
  return winner === leftPole ? rightPole : leftPole
}

export function calculateResult(answers: Partial<Record<number, AnswerValue>>): TestResult | null {
  const answeredCount = Object.keys(answers).length
  if (answeredCount !== questions.length) return null

  const totals: Record<Dimension, { leftPole: Pole; rightPole: Pole; leftScore: number; rightScore: number }> = {
    EI: { leftPole: 'E', rightPole: 'I', leftScore: 0, rightScore: 0 },
    SN: { leftPole: 'S', rightPole: 'N', leftScore: 0, rightScore: 0 },
    TF: { leftPole: 'T', rightPole: 'F', leftScore: 0, rightScore: 0 },
    JP: { leftPole: 'J', rightPole: 'P', leftScore: 0, rightScore: 0 },
  }

  for (const question of questions) {
    const answer = answers[question.id]
    if (!answer) return null

    const degree = answerWeights[answer]
    const weighted = Math.abs(degree) * question.weight
    const bucket = totals[question.dimension]

    if (degree > 0) bucket.leftScore += weighted
    if (degree < 0) bucket.rightScore += weighted
  }

  const dimensions: DimensionScore[] = (Object.entries(totals) as Array<
    [Dimension, { leftPole: Pole; rightPole: Pole; leftScore: number; rightScore: number }]
  >).map(([dimension, bucket]) => {
    const rawDiff = bucket.leftScore - bucket.rightScore
    const diff = Number(Math.abs(rawDiff).toFixed(2))

    const winner =
      rawDiff > 0 ? bucket.leftPole : rawDiff < 0 ? bucket.rightPole : tieBreaker[dimension]

    return {
      dimension,
      leftPole: bucket.leftPole,
      rightPole: bucket.rightPole,
      leftScore: Number(bucket.leftScore.toFixed(2)),
      rightScore: Number(bucket.rightScore.toFixed(2)),
      winner,
      loser: getLoser(bucket.leftPole, bucket.rightPole, winner),
      diff,
      strength: getStrengthLabel(diff),
      closeGapNote: getCloseGapNote(diff),
    }
  })

  const type = dimensions.map((dimension) => dimension.winner).join('') as MbtiType

  return {
    type,
    dimensions,
  }
}
