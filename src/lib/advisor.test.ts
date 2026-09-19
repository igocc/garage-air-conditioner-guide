import { describe, expect, it } from 'vitest'
import { buildAdvisorResult, defaultAdvisorInput, estimateLoadRange } from './advisor'

describe('garage advisor', () => {
  it('raises the starting load band for a harsher envelope', () => {
    const efficient = estimateLoadRange({
      ...defaultAdvisorInput,
      insulation: 'good',
      sunExposure: 'shaded',
      doorUse: 'rare',
    })
    const harsh = estimateLoadRange({
      ...defaultAdvisorInput,
      insulation: 'poor',
      sunExposure: 'strong',
      doorUse: 'frequent',
    })

    expect(harsh[0]).toBeGreaterThan(efficient[0])
    expect(harsh[1]).toBeGreaterThan(efficient[1])
  })

  it('does not recommend compressor AC without a heat-rejection path', () => {
    const result = buildAdvisorResult({ ...defaultAdvisorInput, opening: 'none' })
    expect(result.primarySystem).toBe('solve-venting-first')
  })

  it('keeps dry-climate evaporative cooling conditional', () => {
    const result = buildAdvisorResult({
      ...defaultAdvisorInput,
      climate: 'hot-dry',
      opening: 'none',
      operation: 'occasional',
    })
    expect(result.primarySystem).toBe('evaporative')
    expect(result.alternateSystem).toBe('solve-venting-first')
  })

  it('adds source-control warnings for workshop pollutants', () => {
    const result = buildAdvisorResult({
      ...defaultAdvisorInput,
      use: 'workshop',
      pollutants: ['wood-dust', 'paint-solvent'],
    })
    expect(result.warnings.join(' ')).toContain('source control')
    expect(result.warnings.join(' ')).toContain('Wood dust')
  })
})
