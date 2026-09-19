import type { SystemId } from './lib/advisor'

export const useCases = [
  {
    id: 'gym',
    title: 'Garage gym',
    question: 'Can the space recover before the workout starts?',
    detail: 'Pre-cooling, humidity, open-door recovery, noise, and rust on bars or machines matter as much as the thermostat setting.',
  },
  {
    id: 'office',
    title: 'Office or studio',
    question: 'Can it stay comfortable for a full workday?',
    detail: 'Daily occupancy, computers, calls, glare, and background noise make stable control more important than a quick blast of cold air.',
  },
  {
    id: 'workshop',
    title: 'Workshop',
    question: 'What must be captured before air is recirculated?',
    detail: 'Wood dust, welding fumes, finishes, and solvents need process-specific source control. Cooling handles heat, not every contaminant.',
  },
  {
    id: 'storage',
    title: 'Vehicles and storage',
    question: 'Is temperature or moisture doing the damage?',
    detail: 'Tools, finishes, electronics, wood, and collectibles may benefit more from steady humidity management than aggressive cooling.',
  },
] as const

export const problemRoles = [
  {
    title: 'Cooling and heating',
    description: 'A compressor system moves heat. Heat-pump models can also provide winter heating within their rated operating range.',
    device: 'Air conditioner or heat pump',
  },
  {
    title: 'Moisture control',
    description: 'Cooling removes some moisture, but shoulder seasons and storage targets may call for a dedicated dehumidifier.',
    device: 'AC plus humidity strategy',
  },
  {
    title: 'Outdoor air and fumes',
    description: 'Vehicle exhaust, fuel vapor, solvents, paint, and welding fumes need safe source control and outdoor exhaust.',
    device: 'Ventilation or local exhaust',
  },
  {
    title: 'Dust and particles',
    description: 'Woodworking dust and heavy shop debris should be captured near the source before they foul coils, blowers, and drains.',
    device: 'Dust collection and filtration',
  },
] as const

export const heatPaths = [
  ['Roof and ceiling', 'Solar gain can turn the roof deck and attic into the largest heat source above the garage.'],
  ['Garage door', 'A large, lightly insulated door adds heat and air leakage across a broad surface.'],
  ['Air leakage', 'Gaps around doors, windows, penetrations, and framing replace conditioned air with outdoor air.'],
  ['Internal loads', 'People, vehicles, chargers, computers, tools, and lighting add heat that bedroom rules of thumb may miss.'],
  ['Door cycles', 'Opening the main door exchanges a large volume of air and resets temperature and humidity conditions.'],
] as const

export type SystemProfile = {
  id: SystemId
  name: string
  shortName: string
  fit: string
  strengths: string[]
  watch: string[]
  permanence: 'Permanent' | 'Semi-permanent' | 'Flexible'
  link?: string
  linkLabel?: string
}

export const systemProfiles: SystemProfile[] = [
  {
    id: 'mini-split',
    name: 'Ductless mini-split',
    shortName: 'Mini-split',
    fit: 'Frequent use, stable comfort, and spaces where a wall penetration and outdoor unit are acceptable.',
    strengths: ['Efficient part-load operation', 'Quiet indoor operation', 'Heating on heat-pump models', 'No floor or window footprint'],
    watch: ['Electrical requirements vary by model', 'Line set and drain need careful routing', 'Pre-charged does not mean tool-free', 'Dusty shops need more maintenance'],
    permanence: 'Permanent',
    link: 'https://www.garvee.com/collections/mini-split-air-conditioners',
    linkLabel: 'Shop mini-splits',
  },
  {
    id: 'portable',
    name: 'Portable air conditioner',
    shortName: 'Portable AC',
    fit: 'Temporary or flexible cooling when an approved window or wall exhaust path is available.',
    strengths: ['Lower entry cost', 'No outdoor condenser', 'Easy to remove or store', 'Often uses a standard receptacle'],
    watch: ['Still requires outdoor exhaust', 'Single-hose units can depressurize the room', 'Compare DOE/SACC capacity', 'Hose heat and condensate affect results'],
    permanence: 'Flexible',
    link: 'https://www.garvee.com/collections/portable-air-conditioners',
    linkLabel: 'Shop portable ACs',
  },
  {
    id: 'window',
    name: 'Window air conditioner',
    shortName: 'Window AC',
    fit: 'Budget-focused cooling where a secure, load-bearing, correctly sized window opening exists.',
    strengths: ['Direct heat rejection', 'Good value at smaller capacities', 'No floor space used', 'Straightforward seasonal replacement'],
    watch: ['Opening must support the unit', 'Weather sealing and drainage matter', 'Security may be reduced', 'Larger garages may exceed common capacities'],
    permanence: 'Semi-permanent',
    link: 'https://www.garvee.com/collections/window-air-conditioner',
    linkLabel: 'Shop window ACs',
  },
  {
    id: 'evaporative',
    name: 'Evaporative cooler',
    shortName: 'Evaporative',
    fit: 'Hot, dry climates with a deliberate path for warm, moist air to leave the garage.',
    strengths: ['Low electrical demand', 'Useful with open-air operation', 'Simple equipment', 'Strong fit for arid climates'],
    watch: ['Adds moisture', 'Poor fit for humid weather', 'Needs water and pad care', 'Can harm moisture-sensitive storage'],
    permanence: 'Flexible',
  },
  {
    id: 'solve-venting-first',
    name: 'Solve the building constraint first',
    shortName: 'Plan first',
    fit: 'No approved exhaust or wall path, unresolved pollutants, uncertain electrical service, or a garage that is still very leaky.',
    strengths: ['Avoids buying equipment that cannot reject heat', 'Surfaces HOA or rental constraints', 'Creates a safer installation plan', 'Makes later equipment more effective'],
    watch: ['Fans do not lower temperature below outdoor conditions', 'A vent opening may need weather and fire details', 'Do not route garage air into living space', 'Professional review may be the fastest path'],
    permanence: 'Flexible',
  },
]

export const climateProfiles = [
  {
    id: 'hot-dry',
    title: 'Hot and dry',
    locations: 'Desert Southwest and similar climates',
    focus: 'Solar gain, insulation, shading, and a reliable exhaust path.',
    note: 'Evaporative cooling may work here, but it needs airflow through the space and routine water-system care.',
  },
  {
    id: 'hot-humid',
    title: 'Hot and humid',
    locations: 'Gulf Coast, Florida, and humid summer climates',
    focus: 'Moisture removal, air leakage, condensate, and realistic setpoints.',
    note: 'A mini-split can help, but low cooling load with high humidity may still require a dedicated dehumidifier.',
  },
  {
    id: 'mixed-cold',
    title: 'Mixed or cold',
    locations: 'Four-season and heating-dominant regions',
    focus: 'Low-temperature heat-pump performance, defrost, snow clearance, and seasonal humidity.',
    note: 'Check the exact model capacity at local winter design temperatures, not only its nominal heating BTU.',
  },
] as const

export const ownershipMoments = [
  {
    title: 'Before every season',
    items: ['Clean filters and inspect coils', 'Confirm drains and pumps flow freely', 'Inspect hose, line-set, and exterior penetrations'],
  },
  {
    title: 'After the garage door opens',
    items: ['Close the door before judging recovery', 'Reduce active dust or fumes first', 'Expect humidity recovery to lag temperature'],
  },
  {
    title: 'When storage matters',
    items: ['Track relative humidity', 'Keep air moving around stored items', 'Avoid aiming condensate or cold air at sensitive materials'],
  },
] as const

export const sources = [
  {
    group: 'Sizing and efficiency',
    title: 'ENERGY STAR room air conditioner sizing guidance',
    href: 'https://www.energystar.gov/products/room_air_conditioners',
  },
  {
    group: 'Sizing and efficiency',
    title: 'ACCA Manual J residential load calculation standard',
    href: 'https://www.acca.org/standards/technical-manuals/manual-j',
  },
  {
    group: 'Portable AC ratings',
    title: 'U.S. Department of Energy portable air conditioners',
    href: 'https://www.energy.gov/cmei/buildings/portable-air-conditioners',
  },
  {
    group: 'Portable AC ratings',
    title: 'AHAM explanation of portable AC BTU ratings',
    href: 'https://www.aham.org/AHAMConsumers/Products/PortableAirConditioner.aspx',
  },
  {
    group: 'Refrigerants and installation',
    title: 'EPA homeowner refrigerant FAQ',
    href: 'https://www.epa.gov/ods-phaseout/homeowners-and-consumers-frequently-asked-questions',
  },
  {
    group: 'Refrigerants and installation',
    title: 'EPA Section 608 refrigerant management Q&A',
    href: 'https://www.epa.gov/section608/epas-refrigerant-management-program-questions-and-answers-section-608-certified',
  },
  {
    group: 'Air quality and safety',
    title: 'EPA volatile organic compounds and indoor air quality',
    href: 'https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality',
  },
  {
    group: 'Air quality and safety',
    title: 'OSHA ventilation standard for welding and cutting',
    href: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.353',
  },
  {
    group: 'Air quality and safety',
    title: 'EPA carbon monoxide safety during power outages',
    href: 'https://www.epa.gov/emergencies-iaq/power-outages-and-indoor-air-quality-iaq',
  },
  {
    group: 'Evaporative cooling',
    title: 'DOE Energy Saver Guide',
    href: 'https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf',
  },
] as const
