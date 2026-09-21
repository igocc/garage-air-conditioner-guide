import type { SystemId } from './lib/advisor'

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

export const vocThemeSignals = [
  {
    label: 'Mini-split mentioned',
    value: '≈90%',
    width: 90,
    meaning: 'The deck reports that discussion often converged on a ductless system after constraints were surfaced.',
  },
  {
    label: 'Insulation or sealing',
    value: '≈79%',
    width: 79,
    meaning: 'The enclosure repeatedly appeared before equipment sizing in the deck coding.',
  },
  {
    label: 'Portable AC mentioned',
    value: '≈68%',
    width: 68,
    meaning: 'Portable AC was a common search starting point, especially around cost, rental, and installation limits.',
  },
] as const

export const portableEducationPath = [
  'The garage is too hot',
  'Could a portable AC work?',
  'Why is the room barely changing?',
  'Is the BTU number too small?',
  'Check insulation and air sealing',
  'Understand single-hose negative pressure',
  'Compare a dual-hose portable path',
  'Move to mini-split when use and permissions justify it',
] as const

export const miniSplitBarriers = [
  {
    title: 'Installed cost',
    detail: 'The product price is only the beginning. Electrical work, labor, supports, penetrations, drainage, permits, and return risk change the decision.',
  },
  {
    title: 'Permanent alteration',
    detail: 'A small line-set penetration can still feel like a major commitment when the garage, exterior wall, or future layout may change.',
  },
  {
    title: 'HOA or rental permission',
    detail: 'The technically stronger system can be impossible when exterior equipment or wall work is prohibited.',
  },
  {
    title: 'Electrical path',
    detail: 'Voltage, circuit capacity, disconnects, and installer scope can rule out a model even when its nominal capacity looks right.',
  },
] as const

export const garageActivityClusters = [
  ['Make and repair', 'Woodworking, mechanical repair, 3D printing, models, and light DIY add heat, dust, or process controls.'],
  ['Train and recover', 'Strength work, cardio, and garage gyms prioritize pre-conditioning, moisture, floor clearance, and door recovery.'],
  ['Work and create', 'Office, studio, gaming, music, and art uses expose noise, long-cycle comfort, electronics heat, and glare.'],
  ['Store and protect', 'Vehicles, tools, wood, electronics, finishes, and collectibles shift the goal toward moisture stability.'],
] as const

export const upgradeLadder = [
  {
    step: '01',
    title: 'Fan and envelope',
    fit: 'Lowest-commitment heat relief when outdoor conditions are already tolerable.',
    limit: 'A fan changes air movement, not the dry-bulb temperature below outdoor conditions.',
  },
  {
    step: '02',
    title: 'Portable AC',
    fit: 'Occasional use, rental flexibility, and a compatible sealed exhaust opening.',
    limit: 'Hose heat, infiltration, rating basis, condensate, and floor space remain part of the system.',
  },
  {
    step: '03',
    title: 'Window or through-wall',
    fit: 'Direct heat rejection and good seasonal value when a secure opening is acceptable.',
    limit: 'Window support, weather sealing, drainage, security, and product-specific installation type matter.',
  },
  {
    step: '04',
    title: 'Mini-split',
    fit: 'Daily use, stable control, quiet operation, heat-pump use, and clear floor or window space.',
    limit: 'Requires a wall route, outdoor equipment, electrical planning, drainage, and qualified commissioning.',
  },
] as const

export const sidePaths = [
  {
    title: 'Dedicated dehumidifier',
    role: 'Moisture-first tool',
    detail: 'Useful when storage protection or mild humid weather creates too little cooling demand for the AC to control moisture well.',
  },
  {
    title: 'Heat-pump water heater',
    role: 'Incidental side cooling',
    detail: 'It can remove some heat and moisture from surrounding garage air while heating water, but it is not a room-load-sized AC replacement. Confirm space, airflow, condensate, and winter effects with the exact unit.',
  },
  {
    title: 'Evaporative cooler',
    role: 'Hot-dry open-air aid',
    detail: 'A climate-specific step when ventilation is deliberate and added moisture will not harm the work, tools, or stored items.',
  },
  {
    title: 'Shade, seal, and insulate',
    role: 'Load-reduction layer',
    detail: 'Door insulation, ceiling or attic insulation, shading, and air sealing can improve every equipment path that follows.',
  },
] as const

export type PainPointPhase = 'Buy' | 'Install' | 'Own' | 'Event'

export const painPointFilters: { id: 'all' | PainPointPhase; label: string }[] = [
  { id: 'all', label: 'All pain points' },
  { id: 'Buy', label: 'Before buying' },
  { id: 'Install', label: 'Installation' },
  { id: 'Own', label: 'Ownership' },
  { id: 'Event', label: 'Weather & outages' },
]

export const internetPainPoints: {
  id: string
  phase: PainPointPhase[]
  eyebrow: string
  title: string
  trigger: string
  consequence: string
  check: string
  evidence: 'Authority' | 'VOC signal'
  sourceLabel: string
  sourceHref: string
}[] = [
  {
    id: 'door-condensation',
    phase: ['Own'],
    eyebrow: 'Humidity shock',
    title: 'The door opens and cold tools start sweating',
    trigger: 'Hot, humid outdoor air reaches metal, ductwork, or equipment that is still below the new air dew point.',
    consequence: 'A comfortable air temperature can hide a corrosion and surface-condensation problem after each large door cycle.',
    check: 'Track relative humidity and door events, keep air moving around stored metal, and judge recovery after the door is closed—not while outdoor air is flooding in.',
    evidence: 'VOC signal',
    sourceLabel: 'Representative garage condensation discussion',
    sourceHref: 'https://www.reddit.com/r/hvacadvice/comments/1vq813y/condensation_on_unit_in_garage/',
  },
  {
    id: 'condensate-failure',
    phase: ['Install', 'Own'],
    eyebrow: 'Water management',
    title: 'A tiny drain problem can become a floor, wall, or equipment loss',
    trigger: 'A pinched, uninsulated, frozen, clogged, or failed gravity drain or condensate pump lets water escape the intended route.',
    consequence: 'The first visible symptom may be staining, wet storage, slippery flooring, mold, or water near electrical equipment.',
    check: 'Plan slope, insulation, termination, service access, and a safe failure path. Where consequences are high, ask about secondary containment or an overflow shutoff.',
    evidence: 'Authority',
    sourceLabel: 'EPA mold and moisture guide',
    sourceHref: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
  },
  {
    id: 'combustion-backdraft',
    phase: ['Buy', 'Install'],
    eyebrow: 'Pressure safety',
    title: 'Negative pressure can be more than a cooling penalty',
    trigger: 'A single-hose portable AC or large exhaust fan removes garage air while a natural-draft water heater, furnace, or other combustion appliance is operating nearby.',
    consequence: 'The replacement-air problem that hurts efficiency can also interfere with combustion draft in some configurations.',
    check: 'Treat any natural-draft combustion appliance as a stop condition. Have makeup air, combustion air, and worst-case draft checked before adding exhaust equipment; a CO alarm is backup protection, not the design.',
    evidence: 'Authority',
    sourceLabel: 'DOE combustion-equipment safety guidance',
    sourceHref: 'https://www.energy.gov/documents/doe-combustion-equipment-fact-sheetpdf',
  },
  {
    id: 'opening-compatibility',
    phase: ['Buy', 'Install'],
    eyebrow: 'Exhaust opening',
    title: '“Has a window” does not mean the supplied kit will fit',
    trigger: 'Casement, awning, hopper, tall slider, service-door, and overhead-door openings do not behave like a standard sliding window.',
    consequence: 'A last-minute custom panel can create hose bends, rain entry, insects, air leakage, poor insulation, security exposure, or a door that no longer works normally.',
    check: 'Record opening type and dimensions, hose geometry, panel material, weather exposure, security, egress, and whether the opening must remain safe while unattended.',
    evidence: 'VOC signal',
    sourceLabel: 'Portable AC kit manual and compatibility example',
    sourceHref: 'https://www.homedepot.com/catalog/pdfImages/da/dacc40c4-369f-4de2-956c-c4fbd380a547.pdf',
  },
  {
    id: 'deep-clean',
    phase: ['Install', 'Own'],
    eyebrow: 'Dusty garage reality',
    title: 'Cleaning the screen filter may not restore airflow',
    trigger: 'Fine shop dust and ordinary garage debris can reach the coil, blower wheel, drain pan, pump, and outdoor coil.',
    consequence: 'Airflow, drainage, efficiency, and odor can deteriorate even when the front filter looks acceptable.',
    check: 'Use source capture for dusty work, leave the indoor unit serviceable, and budget for deeper coil, blower, drain, and outdoor-unit cleaning.',
    evidence: 'Authority',
    sourceLabel: 'DOE-supported heat-pump maintenance tips',
    sourceHref: 'https://bsesc.energy.gov/sites/default/files/2024-09/CEE_You_Installed_an_ASHP_Now_What_TRC_01.16.24_1.pdf',
  },
  {
    id: 'occupied-ventilation',
    phase: ['Buy', 'Install', 'Own'],
    eyebrow: 'Long occupied sessions',
    title: 'A quiet, sealed garage can still need outdoor air',
    trigger: 'Office, gaming, music, or fitness use adds people and long occupancy while the cooling system mostly recirculates indoor air.',
    consequence: 'Temperature may feel controlled while stale air, odors, or garage-origin pollutants remain a separate problem.',
    check: 'Design an independent garage ventilation strategy and preserve the garage-to-house air barrier. Do not connect garage return or supply air to the living-space system.',
    evidence: 'Authority',
    sourceLabel: 'EPA Indoor airPLUS requirements',
    sourceHref: 'https://www.epa.gov/system/files/documents/2024-07/iap-v2-verification-requirements_508.pdf',
  },
  {
    id: 'electrical-collision',
    phase: ['Buy', 'Install'],
    eyebrow: 'Panel competition',
    title: 'The AC may compete with an EV charger, welder, or compressor',
    trigger: 'A garage often concentrates large electrical loads and may have limited panel capacity or breaker spaces.',
    consequence: 'A nominally affordable unit can require a new circuit, load-management plan, panel work, or a different operating schedule.',
    check: 'Inventory simultaneous loads, available breaker spaces, service capacity, voltage, MCA, and MOCP before choosing the exact model.',
    evidence: 'Authority',
    sourceLabel: 'ENERGY STAR electric-ready guidance',
    sourceHref: 'https://www.energystar.gov/products/energy_star_home_upgrade/make_your_home_electric_ready',
  },
  {
    id: 'layout-clearance',
    phase: ['Buy', 'Install'],
    eyebrow: 'Physical layout',
    title: 'Door tracks, lifts, shelves, and vehicles can defeat the air path',
    trigger: 'A technically valid wall is blocked by moving hardware, tall storage, a vehicle hood, or the clearance needed to open and service the unit.',
    consequence: 'Air short-circuits, rooms develop dead zones, access panels cannot open, or the installation conflicts with future garage use.',
    check: 'Map equipment swing zones, door travel, lift height, occupied work areas, service clearances, and supply-air throw before drilling.',
    evidence: 'Authority',
    sourceLabel: 'Example ductless installation manual',
    sourceHref: 'https://daikincomfort.com/docs/default-source/daikin-oterra-wall-mount/im-3p601788-4k.pdf',
  },
  {
    id: 'structure-noise',
    phase: ['Buy', 'Install', 'Own'],
    eyebrow: 'Acoustics',
    title: 'A low dB rating does not predict vibration inside the room',
    trigger: 'An outdoor unit, wall bracket, condensate pump, or line set couples compressor and fan vibration into framing or a shared wall.',
    consequence: 'A unit that sounds quiet beside the condenser can become a low-frequency hum or thump in a garage office, music room, bedroom above, or neighbor’s home.',
    check: 'Compare indoor and outdoor sound conditions, mounting surface, isolation, line-set contact, defrost operation, pump noise, and neighbor or bedroom exposure.',
    evidence: 'Authority',
    sourceLabel: 'Manufacturer siting and sound guidance',
    sourceHref: 'https://backend.daikincomfort.com/docs/default-source/product-documents/residential/manuals/engineeringmanual/edus041701b---nv-series-ftx_nvju---nmvjua.pdf',
  },
  {
    id: 'service-parts',
    phase: ['Buy', 'Install', 'Own'],
    eyebrow: 'Support after purchase',
    title: 'A long parts warranty can still leave a costly service gap',
    trigger: 'The exact brand may have limited local service, registration or installer conditions, hard-to-source boards and blowers, or labor and freight exclusions.',
    consequence: 'A covered part can still mean paid diagnosis, refrigerant, removal, reinstallation, waiting time, and an unusable garage.',
    check: 'Verify who services the exact model locally, warranty conditions, labor and freight coverage, error-code access, parts availability, and who owns a damaged or incomplete shipment.',
    evidence: 'VOC signal',
    sourceLabel: 'Example limited-warranty terms',
    sourceHref: 'https://pdf.lowes.com/productdocuments/68af9013-fa90-4d79-84f1-b12273ce0f25/66295472.pdf',
  },
  {
    id: 'multi-zone-sharing',
    phase: ['Buy', 'Install'],
    eyebrow: 'Tandem and divided garages',
    title: 'Multiple heads do not create unlimited or fully independent capacity',
    trigger: 'A tandem bay, partial wall, loft, or workshop needs better air distribution, so several indoor heads are connected to one outdoor unit.',
    consequence: 'The heads share the outdoor unit’s available output, compatible combinations, piping limits, and often operating-mode constraints.',
    check: 'Model simultaneous loads, geometry, head combinations, line length, elevation, drains, low-temperature output, redundancy, and whether independent modes are actually supported.',
    evidence: 'Authority',
    sourceLabel: 'Manufacturer multi-zone design guidance',
    sourceHref: 'https://www.fujitsugeneral.com/us/resources/pdf/support/downloads/pdf-fcus-support-ctlg-halcyon-full-line-brochure-2022-04.pdf',
  },
  {
    id: 'snow-defrost',
    phase: ['Install', 'Own', 'Event'],
    eyebrow: 'Cold-climate operation',
    title: 'Snow clearance is only half the winter problem',
    trigger: 'The outdoor unit defrosts, sheds water, and needs unrestricted airflow while snow, roof runoff, and refreezing accumulate around it.',
    consequence: 'A low or badly placed unit can lose airflow or sit in ice even though its published operating range includes the temperature.',
    check: 'Plan elevation, snow depth, roof-drip exposure, defrost-water drainage, and access for clearing the exact outdoor unit.',
    evidence: 'Authority',
    sourceLabel: 'DOE-supported cold-climate maintenance tips',
    sourceHref: 'https://bsesc.energy.gov/sites/default/files/2024-09/CEE_You_Installed_an_ASHP_Now_What_TRC_01.16.24_1.pdf',
  },
  {
    id: 'smoke-mode',
    phase: ['Buy', 'Own', 'Event'],
    eyebrow: 'Wildfire smoke',
    title: 'The ventilation strategy can reverse during a smoke event',
    trigger: 'Single-hose portable units can pull replacement air through leaks, while evaporative coolers intentionally bring outdoor air through the garage.',
    consequence: 'A device that helps on a normal hot day may increase smoke entry when outdoor air quality is poor.',
    check: 'Create a smoke-mode plan: seal openings, understand outdoor-air dampers, use single-hose or evaporative equipment cautiously, and add suitable particle filtration when needed.',
    evidence: 'Authority',
    sourceLabel: 'EPA wildfire and indoor-air guidance',
    sourceHref: 'https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq',
  },
  {
    id: 'outage-recovery',
    phase: ['Buy', 'Own', 'Event'],
    eyebrow: 'Power interruption',
    title: 'Auto-restart is not backup cooling',
    trigger: 'Connected controls or auto-restart features can restore settings after utility power returns, but they do not run the compressor during the outage.',
    consequence: 'A garage protecting pets, temperature-sensitive materials, or critical equipment may drift out of range without anyone noticing.',
    check: 'Separate remote alerts, auto-restart behavior, surge protection, and true backup-power needs. Never operate a portable fuel-fired generator in a garage—even with the door open.',
    evidence: 'Authority',
    sourceLabel: 'EPA carbon-monoxide guidance',
    sourceHref: 'https://www.epa.gov/indoor-air-quality-iaq/carbon-monoxides-impact-indoor-air-quality',
  },
  {
    id: 'smart-control',
    phase: ['Buy', 'Own', 'Event'],
    eyebrow: 'Smart-control reality',
    title: 'Wi-Fi is useful only when its dependencies match the garage',
    trigger: 'The app may depend on 2.4 GHz coverage, cloud availability, unit power, a sensor high on the wall, and an account or firmware update.',
    consequence: 'Remote temperature can differ from the occupied zone, alerts may disappear with power or internet, and “smart” may mean little more than remote on/off.',
    check: 'Confirm local-control fallback, sensor location, scheduling, alerts, 2.4 GHz coverage, power-restoration behavior, and what remains functional without internet.',
    evidence: 'Authority',
    sourceLabel: 'AIRSTAGE Mobile system requirements',
    sourceHref: 'https://www-origin.fujitsugeneral.com/us/airstage-mobile/system.html',
  },
  {
    id: 'quote-disagreement',
    phase: ['Buy'],
    eyebrow: 'Sizing trust',
    title: 'Two contractors can quote different capacities for the same floor area',
    trigger: 'Different assumptions about leakage, ceiling height, door cycles, design weather, humidity, internal loads, and operating schedule produce different loads.',
    consequence: 'Shoppers often resolve uncertainty by buying the larger nameplate, which can create short cycles and weaker humidity control.',
    check: 'Ask for the load assumptions, design conditions, room-by-room or zone boundaries, and the selected model’s performance at those conditions—not only a square-foot rule.',
    evidence: 'Authority',
    sourceLabel: 'ACCA Manual J overview',
    sourceHref: 'https://www.acca.org/standards/technical-manuals/manual-j',
  },
  {
    id: 'coastal-corrosion',
    phase: ['Buy', 'Install', 'Own'],
    eyebrow: 'Corrosive environments',
    title: 'Sea breeze, pool chemicals, and shop vapors can change equipment life',
    trigger: 'Outdoor coils and cabinets—or indoor components in a metalworking or chemical-use garage—face a more aggressive atmosphere than a typical residence.',
    consequence: 'Generic coating language may be mistaken for a verified coastal or corrosive-environment rating, while placement and cleaning needs go unplanned.',
    check: 'Identify salt, pool chemicals, fertilizers, oil mist, solvent vapor, and metal dust; then verify exact coating, siting, cleaning, and warranty guidance for the model.',
    evidence: 'Authority',
    sourceLabel: 'Manufacturer corrosion and siting guidance',
    sourceHref: 'https://backend.daikincomfort.com/docs/default-source/product-documents/residential/manuals/servicemanual/sm-ctx-axvju_2mx18axvju.pdf',
  },
  {
    id: 'accessible-maintenance',
    phase: ['Buy', 'Install', 'Own'],
    eyebrow: 'Inclusive ownership',
    title: 'A system is not maintainable if the owner cannot reach it',
    trigger: 'Filters, controls, drain caps, pumps, or service panels require climbing, kneeling, lifting, or moving heavy storage.',
    consequence: 'Routine care is deferred, hoses and pans become trip hazards, and a phone-only control excludes users when connectivity fails.',
    check: 'Provide reachable controls, a non-phone fallback, clear floor approach, removable filters, and drain or pump access without blocking a mobility path.',
    evidence: 'Authority',
    sourceLabel: 'U.S. Access Board reach and operable-parts guidance',
    sourceHref: 'https://www.access-board.gov/ada/',
  },
]

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
    group: 'Product and support snapshot',
    title: 'GARVEE warranty policy',
    href: 'https://www.garvee.com/pages/warranty-policy',
  },
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
    group: 'Garage separation and ventilation',
    title: 'EPA Indoor airPLUS Version 2 verification requirements',
    href: 'https://www.epa.gov/system/files/documents/2024-07/iap-v2-verification-requirements_508.pdf',
  },
  {
    group: 'Moisture and drainage',
    title: 'EPA brief guide to mold, moisture, and your home',
    href: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
  },
  {
    group: 'Cold-climate maintenance',
    title: 'DOE-supported air-source heat-pump maintenance tips',
    href: 'https://bsesc.energy.gov/sites/default/files/2024-09/CEE_You_Installed_an_ASHP_Now_What_TRC_01.16.24_1.pdf',
  },
  {
    group: 'Wildfire smoke',
    title: 'EPA wildfires and indoor air quality',
    href: 'https://www.epa.gov/emergencies-iaq/wildfires-and-indoor-air-quality-iaq',
  },
  {
    group: 'Electrical readiness',
    title: 'ENERGY STAR make your home electric ready',
    href: 'https://www.energystar.gov/products/energy_star_home_upgrade/make_your_home_electric_ready',
  },
  {
    group: 'Evaporative cooling',
    title: 'DOE Energy Saver Guide',
    href: 'https://www.energy.gov/sites/default/files/2022-08/energy-saver-guide-2022.pdf',
  },
] as const
