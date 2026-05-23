import './style.css'
import { questions, questionMap } from './data/questions'
import { flatQuestionOrder, questionsByStep, stepDefinitions } from './data/stepConfig'
import { buildResult } from './core/resultBuilder'
import { calculateResult } from './core/scoring'
import { loadState, resetState, saveCurrentQuestion, saveResult, updateStoredAnswer } from './core/storage'
import type { AnswerValue, PersistedState, StepKey } from './core/types'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

const appRoot = app

const answerOptions: Array<{ value: AnswerValue; label: string }> = [
  { value: 'A', label: '非常像A' },
  { value: 'a', label: '比较像A' },
  { value: 'mid', label: '居中' },
  { value: 'b', label: '比较像B' },
  { value: 'B', label: '非常像B' },
]

let state: PersistedState = normalizeState(loadState())

function normalizeState(rawState: PersistedState): PersistedState {
  const validQuestionId = questionMap.has(rawState.currentQuestionId) ? rawState.currentQuestionId : flatQuestionOrder[0]
  return {
    answers: rawState.answers ?? {},
    currentQuestionId: validQuestionId,
    result: rawState.result,
  }
}

function getCurrentQuestionIndex(): number {
  const index = flatQuestionOrder.indexOf(state.currentQuestionId)
  return index >= 0 ? index : 0
}

function getCurrentQuestion() {
  return questionMap.get(flatQuestionOrder[getCurrentQuestionIndex()]) ?? questions[0]
}

function getCurrentStepKey(questionId: number): StepKey {
  return questionMap.get(questionId)?.step ?? 'EI'
}

function getStepProgress(stepKey: StepKey) {
  const stepQuestions = questionsByStep[stepKey]
  const answered = stepQuestions.filter((question) => state.answers[question.id]).length
  return { answered, total: stepQuestions.length }
}

function getTotalAnswered() {
  return questions.filter((question) => state.answers[question.id]).length
}

function goToQuestionByIndex(index: number) {
  const nextId = flatQuestionOrder[index]
  if (!nextId) return
  state.currentQuestionId = nextId
  saveCurrentQuestion(nextId)
  render()
}

function handleAnswer(answer: AnswerValue) {
  const currentQuestion = getCurrentQuestion()
  state.answers[currentQuestion.id] = answer
  updateStoredAnswer(currentQuestion.id, answer, currentQuestion.id, state.result)

  const result = calculateResult(state.answers)
  if (result) {
    state.result = result
    saveResult(result)
    renderResult()
    return
  }

  const currentIndex = getCurrentQuestionIndex()
  const nextIndex = Math.min(currentIndex + 1, flatQuestionOrder.length - 1)
  state.currentQuestionId = flatQuestionOrder[nextIndex]
  saveCurrentQuestion(state.currentQuestionId)
  render()
}

function renderProgress(currentStep: StepKey, totalAnswered: number) {
  const currentStepIndex = stepDefinitions.findIndex((step) => step.key === currentStep)
  const currentStepInfo = stepDefinitions[currentStepIndex] ?? stepDefinitions[0]
  const currentStepProgress = getStepProgress(currentStep)

  return `
    <section class="hero">
      <div class="hero__inner hero__inner--compact">
        <div class="topbar">
          <div class="topbar__main">
            <div class="topbar__title">MBTI性格测试</div>
            <div class="topbar__sub">${currentStepInfo.label} · 第 ${currentStepIndex + 1} 步</div>
          </div>
          <div class="topbar__stats">${currentStepProgress.answered}/${currentStepProgress.total}</div>
        </div>
        <div class="stepper stepper--compact">
          ${stepDefinitions
            .map((step, index) => {
              const isActive = step.key === currentStep
              return `
                <div class="stepper__item ${isActive ? 'stepper__item--active' : ''}">
                  <div class="stepper__circle">${index + 1}</div>
                </div>
              `
            })
            .join('')}
        </div>
        <div class="progress progress--compact">
          <div class="progress__bar">
            <div class="progress__value" style="width: ${(totalAnswered / questions.length) * 100}%"></div>
          </div>
          <div class="progress__meta">${totalAnswered}/${questions.length}</div>
        </div>
      </div>
    </section>
  `
}

function renderQuestionCard() {
  const question = getCurrentQuestion()
  const selected = state.answers[question.id]
  const currentIndex = getCurrentQuestionIndex()
  const currentStep = getCurrentStepKey(question.id)
  const stepInfo = stepDefinitions.find((step) => step.key === currentStep) ?? stepDefinitions[0]
  const previousDisabled = currentIndex === 0

  return `
    ${renderProgress(currentStep, getTotalAnswered())}
    <main class="page">
      <section class="card question-card">
        <div class="question-card__meta">
          <span class="pill">原题号 ${question.id}</span>
          <span class="pill">${stepInfo.dimensionLabel}</span>
          <span class="pill">权重 ${question.weight.toFixed(2)}</span>
        </div>
        <h2 class="question-card__title">${question.prompt}</h2>
        <div class="options-grid">
          <div class="option option--a">
            <div class="option__tag">A</div>
            <div class="option__text">${question.a}</div>
          </div>
          <div class="option option--b">
            <div class="option__tag">B</div>
            <div class="option__text">${question.b}</div>
          </div>
        </div>
        <div class="answer-grid">
          ${answerOptions
            .map(
              (option) => `
                <button class="answer-btn ${selected === option.value ? 'answer-btn--selected' : ''}" data-answer="${option.value}">
                  ${option.label}
                </button>
              `,
            )
            .join('')}
        </div>
        <div class="question-card__actions">
          <button class="secondary-btn" data-action="prev" ${previousDisabled ? 'disabled' : ''}>上一题</button>
          <button class="ghost-btn" data-action="restart">重新开始</button>
        </div>
      </section>

      <section class="footer-card">
        <h3>完成测试后，您将获得</h3>
        <div class="footer-card__columns">
          <ul>
            <li>获取您的4字母类型测试结果</li>
            <li>知悉您的偏好优势和类型描述</li>
            <li>了解您的沟通风格和学习习惯</li>
          </ul>
          <ul>
            <li>发现适合您性格类型的职业</li>
            <li>评估您与恋人的长期相处情况</li>
            <li>查看与您为同一性格的名人</li>
          </ul>
        </div>
      </section>
    </main>
  `
}

function renderResult() {
  if (!state.result) {
    render()
    return
  }

  const built = buildResult(state.result)
  appRoot.innerHTML = `
    ${renderProgress(getCurrentStepKey(flatQuestionOrder[flatQuestionOrder.length - 1]), questions.length)}
    <main class="page">
      <section class="card result-hero">
        <p class="result-hero__eyebrow">测试完成</p>
        <h2 class="result-hero__type">${built.profile.type}</h2>
        <h3 class="result-hero__name">${built.profile.name}</h3>
        <p class="result-hero__group">${built.profile.groupName}</p>
        <div class="result-hero__aliases">${built.profile.aliases.join(' / ')}</div>
      </section>

      <section class="card result-summary">
        <h3>四维偏好摘要</h3>
        <div class="summary-grid">
          ${built.result.dimensions
            .map(
              (dimension) => `
                <div class="summary-item">
                  <div class="summary-item__title">${dimension.leftPole} / ${dimension.rightPole}</div>
                  <div class="summary-item__value">${dimension.winner}</div>
                  <div class="summary-item__desc">${dimension.strength}</div>
                  ${dimension.closeGapNote ? `<div class="summary-item__note">${dimension.closeGapNote}</div>` : ''}
                </div>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="card result-detail">
        <h3>类型说明</h3>
        <div class="detail-row">
          <span class="detail-row__label">核心特质</span>
          <span>${built.profile.coreTraits}</span>
        </div>
        <div class="detail-block">
          <h4>详细说明</h4>
          <p>${built.profile.description}</p>
        </div>
        <div class="detail-block">
          <h4>短板提醒</h4>
          <p>${built.profile.weaknesses}</p>
        </div>
      </section>

      <section class="result-actions">
        <button class="secondary-btn" data-action="restart">重新测试</button>
      </section>
    </main>
  `

  bindActions()
}

function render() {
  appRoot.innerHTML = renderQuestionCard()
  bindActions()
}

function bindActions() {
  appRoot.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.answer as AnswerValue
      handleAnswer(value)
    })
  })

  appRoot.querySelector<HTMLButtonElement>('[data-action="prev"]')?.addEventListener('click', () => {
    const currentIndex = getCurrentQuestionIndex()
    if (currentIndex > 0) goToQuestionByIndex(currentIndex - 1)
  })

  appRoot.querySelectorAll<HTMLButtonElement>('[data-action="restart"]').forEach((button) => {
    button.addEventListener('click', () => {
      state = resetState()
      state.currentQuestionId = flatQuestionOrder[0]
      render()
    })
  })
}

if (state.result) {
  renderResult()
} else {
  render()
}
