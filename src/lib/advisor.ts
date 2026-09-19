export type GarageUse = 'gym' | 'office' | 'workshop' | 'storage'
export type Climate = 'hot-dry' | 'hot-humid' | 'mixed-cold'
export type Insulation = 'good' | 'partial' | 'poor'
export type SunExposure = 'shaded' | 'mixed' | 'strong'
export type DoorUse = 'rare' | 'sometimes' | 'frequent'
export type Opening = 'wall' | 'window' | 'none'
export type Power = '120v' | '240v' | 'unknown'
export type Operation = 'occasional' | 'daily' | 'protect'
export type Pollutant = 'vehicle' | 'wood-dust' | 'welding' | 'paint-solvent'

export type AdvisorInput = {
  use: GarageUse
  climate: Climate
  area: number
  ceilingHeight: number
  insulation: Insulation
  sunExposure: SunExposure
  doorUse: DoorUse
  opening: Opening
  power: Power
  operation: Operation
  pollutants: Pollutant[]
}

export type SystemId =
  | 'mini-split'
  | 'portable'
  | 'window'
  | 'evaporative'
  | 'solve-venting-first'

export type AdvisorResult = {
  primarySystem: SystemId
  alternateSystem: SystemId | null
  loadRange: [number, number]
  loadLabel: string
  reasons: string[]
  warnings: string[]
  checklist: string[]
}

const factors = {
  insulation: { good: 0.95, partial: 1.15, poor: 1.35 },
  climate: { 'hot-dry': 1.08, 'hot-humid': 1.15, 'mixed-cold': 1 },
  sunExposure: { shaded: 0.95, mixed: 1, strong: 1.12 },
  doorUse: { rare: 1, sometimes: 1.08, frequent: 1.2 },
} as const

const roundToThousand = (value: number) => Math.max(6_000, Math.round(value / 1_000) * 1_000)

export function estimateLoadRange(input: AdvisorInput): [number, number] {
  const volumeFactor = Math.max(0.875, input.ceilingHeight / 8)
  const adjusted =
    input.area *
    20 *
    volumeFactor *
    factors.insulation[input.insulation] *
    factors.climate[input.climate] *
    factors.sunExposure[input.sunExposure] *
    factors.doorUse[input.doorUse]

  const lower = roundToThousand(adjusted * 0.85)
  const upper = Math.max(lower + 1_000, roundToThousand(adjusted * 1.15))

  return [lower, upper]
}

function chooseSystems(input: AdvisorInput): [SystemId, SystemId | null] {
  if (input.opening === 'none') {
    if (input.climate === 'hot-dry' && input.operation === 'occasional') {
      return ['evaporative', 'solve-venting-first']
    }
    return ['solve-venting-first', null]
  }

  if (input.operation === 'daily' || input.operation === 'protect') {
    if (input.opening === 'wall') return ['mini-split', 'portable']
    return ['window', 'portable']
  }

  if (input.opening === 'window') return ['portable', 'window']
  return ['mini-split', 'portable']
}

export function buildAdvisorResult(input: AdvisorInput): AdvisorResult {
  const loadRange = estimateLoadRange(input)
  const [primarySystem, alternateSystem] = chooseSystems(input)
  const reasons: string[] = []
  const warnings: string[] = []
  const checklist: string[] = []

  if (input.operation === 'daily') reasons.push('Frequent use favors stable, efficient temperature control.')
  if (input.operation === 'protect') reasons.push('Continuous moisture control matters more than fast spot cooling.')
  if (input.operation === 'occasional') reasons.push('Occasional use favors a setup that can recover quickly without unnecessary permanence.')
  if (input.insulation === 'poor') reasons.push('A weak thermal envelope adds substantial load before equipment is considered.')
  if (input.doorUse === 'frequent') reasons.push('Frequent door openings will slow recovery after every air exchange.')
  if (input.climate === 'hot-humid') reasons.push('Humidity removal needs to be evaluated separately from sensible cooling.')
  if (input.climate === 'hot-dry') reasons.push('Dry outdoor air keeps evaporative cooling on the table when ventilation is available.')
  if (input.opening === 'none') reasons.push('Every compressor air conditioner still needs a path to reject heat outdoors.')

  if (input.pollutants.includes('vehicle')) {
    warnings.push('Never idle a fuel-burning vehicle in a garage. An air conditioner and a CO alarm do not make idling safe.')
  }
  if (input.pollutants.includes('paint-solvent')) {
    warnings.push('Paint, fuel, and solvent vapors require source control and suitable ventilation. Recirculating AC is not a substitute.')
  }
  if (input.pollutants.includes('welding')) {
    warnings.push('Welding fumes need local exhaust or another process-specific control selected for the work.')
  }
  if (input.pollutants.includes('wood-dust')) {
    warnings.push('Wood dust calls for collection at the tool and more frequent coil, blower, filter, and drain inspection.')
  }

  checklist.push('Measure the garage door, ceiling, windows, and intended equipment locations.')
  checklist.push('Seal major air leaks and plan roof or door insulation before final sizing.')
  checklist.push('Verify the selected model rating basis, application limits, and installation manual.')
  checklist.push('Confirm voltage, circuit capacity, disconnects, and permit requirements with a qualified electrician or installer.')
  checklist.push('Plan a gravity drain or condensate pump route that cannot damage the building or create an ice hazard.')

  if (input.climate === 'hot-humid' || input.operation === 'protect') {
    checklist.push('Track relative humidity with a hygrometer and assess whether a dedicated dehumidifier is needed.')
  }
  if (input.power === 'unknown') checklist.push('Locate the electrical panel and verify available service before shopping by BTU.')
  if (input.power === '120v' && primarySystem === 'mini-split') {
    warnings.push('Do not assume a small mini-split is 120 V. Check the nameplate, MCA, MOCP, and manual for the exact model.')
  }
  if (primarySystem === 'portable') {
    checklist.push('Compare DOE/SACC capacity, hose length, window panel fit, condensate behavior, and single-hose versus dual-hose design.')
  }
  if (primarySystem === 'mini-split') {
    checklist.push('Confirm line-set length, wall penetration, outdoor-unit support, vacuum and leak testing, and refrigerant-work requirements.')
  }

  return {
    primarySystem,
    alternateSystem,
    loadRange,
    loadLabel: `${loadRange[0].toLocaleString()}-${loadRange[1].toLocaleString()} BTU/h starting band`,
    reasons,
    warnings,
    checklist,
  }
}

export const defaultAdvisorInput: AdvisorInput = {
  use: 'gym',
  climate: 'hot-humid',
  area: 480,
  ceilingHeight: 9,
  insulation: 'partial',
  sunExposure: 'strong',
  doorUse: 'sometimes',
  opening: 'wall',
  power: 'unknown',
  operation: 'daily',
  pollutants: [],
}
