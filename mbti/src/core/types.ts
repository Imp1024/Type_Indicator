export type StepKey = 'EI' | 'SN' | 'TF' | 'JP'
export type Dimension = StepKey
export type Pole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'
export type AnswerValue = 'A' | 'a' | 'mid' | 'b' | 'B'
export type StrengthLabel = '轻微倾向' | '中等倾向' | '强烈倾向'
export type MbtiType =
  | 'INTJ'
  | 'INTP'
  | 'ENTJ'
  | 'ENTP'
  | 'INFJ'
  | 'INFP'
  | 'ENFJ'
  | 'ENFP'
  | 'ISTJ'
  | 'ISFJ'
  | 'ESTJ'
  | 'ESFJ'
  | 'ISTP'
  | 'ISFP'
  | 'ESTP'
  | 'ESFP'

export interface Question {
  id: number
  prompt: string
  a: string
  b: string
  dimension: Dimension
  weight: number
  step: StepKey
  leftPole: Pole
  rightPole: Pole
}

export interface StepDefinition {
  key: StepKey
  label: string
  subtitle: string
  dimensionLabel: string
}

export interface DimensionScore {
  dimension: Dimension
  leftPole: Pole
  rightPole: Pole
  leftScore: number
  rightScore: number
  winner: Pole
  loser: Pole
  diff: number
  strength: StrengthLabel
  closeGapNote: string | null
}

export interface TypeProfile {
  type: MbtiType
  name: string
  aliases: string[]
  groupCode: 'NT' | 'NF' | 'SJ' | 'SP'
  groupName: string
  coreTraits: string
  description: string
  weaknesses: string
}

export interface TestResult {
  type: MbtiType
  dimensions: DimensionScore[]
}

export interface PersistedState {
  answers: Partial<Record<number, AnswerValue>>
  currentQuestionId: number
  result: TestResult | null
}
