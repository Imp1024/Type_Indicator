import { resultProfiles } from '../data/resultProfiles'
import type { MbtiType, TestResult, TypeProfile } from './types'

export interface BuiltResult {
  result: TestResult
  profile: TypeProfile
}

export function buildResult(result: TestResult): BuiltResult {
  return {
    result,
    profile: resultProfiles[result.type as MbtiType],
  }
}
