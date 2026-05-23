import type { AnswerValue, PersistedState, TestResult } from './types'

const STORAGE_KEY = 'mbti-form-m-state'

const defaultState: PersistedState = {
  answers: {},
  currentQuestionId: 1,
  result: null,
}

export function loadState(): PersistedState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    const parsed = JSON.parse(raw) as PersistedState
    return {
      answers: parsed.answers ?? {},
      currentQuestionId: parsed.currentQuestionId ?? 1,
      result: parsed.result ?? null,
    }
  } catch {
    return defaultState
  }
}

export function saveState(state: PersistedState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function updateStoredAnswer(questionId: number, answer: AnswerValue, currentQuestionId: number, result: TestResult | null): PersistedState {
  const nextState = loadState()
  nextState.answers[questionId] = answer
  nextState.currentQuestionId = currentQuestionId
  nextState.result = result
  saveState(nextState)
  return nextState
}

export function saveCurrentQuestion(questionId: number): PersistedState {
  const nextState = loadState()
  nextState.currentQuestionId = questionId
  saveState(nextState)
  return nextState
}

export function saveResult(result: TestResult): PersistedState {
  const nextState = loadState()
  nextState.result = result
  saveState(nextState)
  return nextState
}

export function resetState(): PersistedState {
  window.localStorage.removeItem(STORAGE_KEY)
  return { ...defaultState }
}
