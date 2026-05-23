import type { StepDefinition, StepKey } from '../core/types'
import { questions } from './questions'

export const stepDefinitions: StepDefinition[] = [
  {
    key: 'EI',
    label: '词对题',
    subtitle: '精力获取',
    dimensionLabel: 'E / I',
  },
  {
    key: 'SN',
    label: '判断题',
    subtitle: '认知模式',
    dimensionLabel: 'S / N',
  },
  {
    key: 'TF',
    label: '描述题',
    subtitle: '决策模式',
    dimensionLabel: 'T / F',
  },
  {
    key: 'JP',
    label: '终测题',
    subtitle: '生活模式',
    dimensionLabel: 'J / P',
  },
]

export const stepOrder: StepKey[] = stepDefinitions.map((step) => step.key)

export const questionsByStep = {
  EI: questions.filter((question) => question.step === 'EI').sort((a, b) => a.id - b.id),
  SN: questions.filter((question) => question.step === 'SN').sort((a, b) => a.id - b.id),
  TF: questions.filter((question) => question.step === 'TF').sort((a, b) => a.id - b.id),
  JP: questions.filter((question) => question.step === 'JP').sort((a, b) => a.id - b.id),
}

export const flatQuestionOrder = stepOrder.flatMap((step) => questionsByStep[step].map((question) => question.id))
