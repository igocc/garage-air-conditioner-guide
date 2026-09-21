import type { ProductId } from '../productContent'

export type GarageUse = 'gym' | 'office' | 'workshop' | 'storage'
export type Climate = 'hot-dry' | 'hot-humid' | 'mixed-cold'
export type Insulation = 'good' | 'partial' | 'poor'
export type SunExposure = 'shaded' | 'mixed' | 'strong'
export type DoorUse = 'rare' | 'sometimes' | 'frequent'
export type Opening = 'wall' | 'window' | 'door-only' | 'none'
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
  combustionAppliance: boolean
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
  recommendedProductIds: ProductId[]
  productNote: string
  noProductReason: string | null
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
  if (input.opening === 'none') return ['solve-venting-first', null]

  if (input.opening === 'door-only') {
    if (input.climate === 'hot-dry' && input.operation === 'occasional') return ['evaporative', 'solve-venting-first']
    return ['solve-venting-first', null]
  }

  if (input.operation === 'daily' || input.operation === 'protect') {
    if (input.opening === 'wall') return ['mini-split', 'portable']
    return ['portable', 'window']
  }

  if (input.opening === 'window') return ['portable', 'window']
  return ['mini-split', 'portable']
}

function chooseProducts(input: AdvisorInput, system: SystemId, upperLoad: number) {
  const uncontrolledProcessRisk = input.pollutants.some((item) =>
    item === 'wood-dust' || item === 'welding' || item === 'paint-solvent',
  )

  if (uncontrolledProcessRisk) {
    return {
      ids: [] as ProductId[],
      note: 'Resolve source control, outdoor exhaust, and equipment protection before selecting comfort equipment.',
      noProductReason: 'No audited GARVEE comfort product is a substitute for controlling fine dust, welding fumes, paint, fuel, or solvent vapor.',
    }
  }

  if (input.combustionAppliance && system === 'portable') {
    return {
      ids: [] as ProductId[],
      note: 'Resolve combustion draft and makeup-air safety before selecting room-exhaust equipment.',
      noProductReason: 'A natural-draft gas appliance may conflict with depressurizing exhaust equipment. Have combustion air and worst-case draft checked before choosing a portable AC.',
    }
  }

  if (system === 'solve-venting-first') {
    return {
      ids: [] as ProductId[],
      note: 'The building constraint comes before a product comparison.',
      noProductReason: 'There is no compatible compressor AC in this shortlist without an approved path to reject heat outdoors.',
    }
  }

  if (system === 'evaporative') {
    return {
      ids: ['E1'] as ProductId[],
      note: 'Conditional hot-dry comfort aid only. It is not a BTU-sized compressor air conditioner.',
      noProductReason: null,
    }
  }

  if (system === 'portable' || system === 'window') {
    if (upperLoad <= 9_000) {
      return {
        ids: ['P1', 'P2'] as ProductId[],
        note: 'P1 is the smaller primary path; P2 is the documented DOE-capacity step-up. Both require outdoor exhaust.',
        noProductReason: null,
      }
    }

    if (upperLoad > 12_000) {
      return {
        ids: [] as ProductId[],
        note: 'The screening band exceeds the documented portable capacity in this shortlist.',
        noProductReason: 'No portable GARVEE candidate here is documented to cover this full screening load. Reduce the load, create a permanent system path, or obtain a qualified calculation.',
      }
    }

    return {
      ids: ['P2', 'P3'] as ProductId[],
      note: 'P2 leads because it publishes 10,200 DOE BTU. P3 is a dual-hose heat-pump alternative that needs more specification confirmation.',
      noProductReason: null,
    }
  }

  if (input.climate === 'mixed-cold' && upperLoad <= 10_000 && input.power !== '120v') {
    return {
      ids: ['H1', 'M1'] as ProductId[],
      note: 'H1 is a cold-weather shortlist item, not verified primary heat. M1 is the cooling-first alternative with a stated 19°F heating floor.',
      noProductReason: null,
    }
  }

  if (upperLoad <= 10_000) {
    return {
      ids: ['M1', 'M2'] as ProductId[],
      note: 'Start with M1 for a small calculated load; compare M2 only when the load and electrical plan justify the step-up.',
      noProductReason: null,
    }
  }
  if (upperLoad <= 15_000) {
    return {
      ids: ['M2', 'M3'] as ProductId[],
      note: 'M2 is the medium-zone primary path; M3 is the next calculated-load step, not a floor-area shortcut.',
      noProductReason: null,
    }
  }
  if (upperLoad <= 21_000) {
    return {
      ids: ['M3', 'M4'] as ProductId[],
      note: 'M3 is the primary larger-zone candidate; move to M4 only after a qualified load calculation.',
      noProductReason: null,
    }
  }
  if (upperLoad > 26_000) {
    return {
      ids: [] as ProductId[],
      note: 'The screening band exceeds the largest product in this audited shortlist.',
      noProductReason: 'A multi-zone or larger engineered solution may be required. The current evidence does not support forcing the 24,000 BTU product into this load band.',
    }
  }
  return {
    ids: ['M4'] as ProductId[],
    note: 'M4 is the largest shortlisted step-up, but this screening band needs a qualified load calculation before purchase.',
    noProductReason: null,
  }
}

export function buildAdvisorResult(input: AdvisorInput): AdvisorResult {
  const loadRange = estimateLoadRange(input)
  const [primarySystem, alternateSystem] = chooseSystems(input)
  const productMatch = chooseProducts(input, primarySystem, loadRange[1])
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
  if (input.opening === 'door-only') reasons.push('An open main door supports evaporative airflow only in dry conditions; it is not a sealed compressor-AC exhaust route.')

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
  if (input.combustionAppliance) {
    warnings.push('A gas water heater, furnace, or other natural-draft appliance can turn garage depressurization into a combustion-safety concern. Verify combustion air and makeup air before adding exhaust equipment.')
    checklist.push('Identify the venting type of every fuel-burning appliance and have worst-case draft checked before using room-exhaust equipment.')
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
  if (input.power === '120v' && productMatch.ids.some((id) => id === 'M2' || id === 'M3' || id === 'M4' || id === 'H1')) {
    warnings.push('The surfaced 230 V product path conflicts with a 120 V-only electrical path. Resolve the circuit or return to the smaller 115 V model after load validation.')
  }
  if (input.climate === 'mixed-cold' && primarySystem === 'mini-split') {
    warnings.push('An outdoor operating-range claim is not proof of heating capacity at the local winter design temperature. Verify capacity, COP, defrost drainage, and backup heat.')
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
    recommendedProductIds: productMatch.ids,
    productNote: productMatch.note,
    noProductReason: productMatch.noProductReason,
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
  combustionAppliance: false,
  operation: 'daily',
  pollutants: [],
}
