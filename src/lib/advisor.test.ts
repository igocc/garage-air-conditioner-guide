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
      opening: 'door-only',
      operation: 'occasional',
    })
    expect(result.primarySystem).toBe('evaporative')
    expect(result.alternateSystem).toBe('solve-venting-first')
    expect(result.recommendedProductIds).toEqual(['E1'])
  })

  it('adds source-control warnings for workshop pollutants', () => {
    const result = buildAdvisorResult({
      ...defaultAdvisorInput,
      use: 'workshop',
      pollutants: ['wood-dust', 'paint-solvent'],
    })
    expect(result.warnings.join(' ')).toContain('source control')
    expect(result.warnings.join(' ')).toContain('Wood dust')
    expect(result.recommendedProductIds).toEqual([])
    expect(result.noProductReason).toContain('No audited GARVEE')
  })

  it('surfaces exact mini-split products from the calculated load band', () => {
    const result = buildAdvisorResult({
      ...defaultAdvisorInput,
      area: 320,
      ceilingHeight: 8,
      insulation: 'good',
      sunExposure: 'shaded',
      doorUse: 'rare',
      power: '240v',
    })
    expect(result.primarySystem).toBe('mini-split')
    expect(result.recommendedProductIds[0]).toBe('M1')
    expect(result.noProductReason).toBeNull()
  })

  it('returns no product when there is no exterior heat-rejection path', () => {
    const result = buildAdvisorResult({ ...defaultAdvisorInput, opening: 'none' })
    expect(result.recommendedProductIds).toEqual([])
    expect(result.noProductReason).toContain('without an approved path')
  })

  it('does not force the largest audited product into an excessive screening load', () => {
    const result = buildAdvisorResult({
      ...defaultAdvisorInput,
      area: 1_200,
      ceilingHeight: 12,
      insulation: 'poor',
      doorUse: 'frequent',
    })
    expect(result.recommendedProductIds).toEqual([])
    expect(result.noProductReason).toContain('multi-zone or larger engineered solution')
  })
})
