import type { ScenarioJourney } from './productContent'
import type { AdvisorInput, AdvisorResult } from './lib/advisor'

export type GaragePlanSnapshot = {
  scenario: ScenarioJourney | null
  input: AdvisorInput | null
  result: AdvisorResult | null
}

export const emptyGaragePlan: GaragePlanSnapshot = {
  scenario: null,
  input: null,
  result: null,
}
