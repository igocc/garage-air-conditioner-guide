export type ProductId = 'P1' | 'P2' | 'P3' | 'M1' | 'M2' | 'M3' | 'M4' | 'H1' | 'E1'

export type ProductCategory = 'Portable' | 'Mini-split' | 'Climate-specific'

export type ProductProfile = {
  id: ProductId
  category: ProductCategory
  name: string
  sku: string
  price: string
  capacity: string
  voltage: string
  coverage: string
  efficiency?: string
  badge: string
  fit: string
  watch: string
  image: string
  imageWidth: number
  imageHeight: number
  href: string
}

export const products: ProductProfile[] = [
  {
    id: 'P1',
    category: 'Portable',
    name: '8,000 BTU portable AC',
    sku: 'PHO_0XHWJFXX',
    price: '$219.99',
    capacity: '8,000 BTU, rating basis not stated',
    voltage: '115 V shown in official metadata',
    coverage: 'Page conflicts: 250 vs. 350 sq. ft.',
    badge: 'Small occasional zone',
    fit: 'A lower-cost, movable option when a compatible outdoor exhaust opening is available.',
    watch: 'The same page conflicts on coverage and window-kit dimensions. Measure first and do not size from the 350 sq. ft. headline.',
    image: 'product-p1-portable-8000.webp',
    imageWidth: 900,
    imageHeight: 900,
    href: 'https://www.garvee.com/products/8000-btu-portable-ac-for-350-sq-ft-3-in-1-compact-room-office-gray',
  },
  {
    id: 'P2',
    category: 'Portable',
    name: '14,000 ASHRAE portable AC',
    sku: 'PHO_0XJ34SDC',
    price: '$353.99',
    capacity: '14,000 ASHRAE / 10,200 DOE BTU',
    voltage: '115 V',
    coverage: 'Up to 750 sq. ft. page claim',
    badge: 'Documented DOE capacity',
    fit: 'The clearest larger portable comparison because the page publishes both ASHRAE and DOE capacity.',
    watch: 'Compare using 10,200 DOE BTU. It still needs a sealed window kit and may need a drain in humid conditions.',
    image: 'product-p2-portable-14000.webp',
    imageWidth: 900,
    imageHeight: 900,
    href: 'https://www.garvee.com/products/garvee-portable-air-conditioner-pho-0xj34sdc',
  },
  {
    id: 'P3',
    category: 'Portable',
    name: 'Dual-hose inverter portable heat pump',
    sku: 'PHK_38K7FYGL',
    price: '$519.99',
    capacity: '14,000 BTU headline, basis not stated',
    voltage: '115 V shown in official data',
    coverage: 'Up to 700 sq. ft. page claim',
    badge: 'Dual hose + heat',
    fit: 'A flexible alternative where a permanent install is not allowed and heating or dual-hose operation is valuable.',
    watch: 'The page omits DOE/SACC capacity and window-kit dimensions. Confirm those details before comparing it with P2.',
    image: 'product-p3-portable-dual-hose.webp',
    imageWidth: 900,
    imageHeight: 900,
    href: 'https://www.garvee.com/products/garvee-high-capacity-inverter-portable-air-phk-38k7fygl',
  },
  {
    id: 'M1',
    category: 'Mini-split',
    name: '9,000 BTU 115 V mini-split',
    sku: 'PHK_35XYGTMT',
    price: '$449.99',
    capacity: '9,000 cooling / 9,300 heating BTU',
    voltage: '115 V',
    coverage: 'Up to 450 sq. ft. page claim',
    efficiency: '19 SEER2',
    badge: 'Small daily-use zone',
    fit: 'A permanent inverter option for a small, improved garage where 115 V is part of the constraint.',
    watch: 'Verify the exact branch circuit and load. The page states a 19°F heating operating floor and recommends professional installation.',
    image: 'product-m1-mini-split-9000.webp',
    imageWidth: 900,
    imageHeight: 900,
    href: 'https://www.garvee.com/products/garvee-9000-btu-mini-split-air-phk-35xygtmt',
  },
  {
    id: 'M2',
    category: 'Mini-split',
    name: '12,000 BTU smart mini-split',
    sku: 'MHK_375DDDHW',
    price: '$489.99',
    capacity: '12,000 BTU nominal',
    voltage: '208-230 V',
    coverage: 'Up to 750 sq. ft. page claim',
    efficiency: '18.5 SEER2',
    badge: 'Medium daily-use zone',
    fit: 'The most defensible medium-zone GARVEE family match for a finished gym, studio, or office.',
    watch: 'Professional installation is required. Use a load calculation, not the 750 sq. ft. marketing claim, to confirm the size.',
    image: 'product-m2-mini-split-12000.webp',
    imageWidth: 900,
    imageHeight: 844,
    href: 'https://www.garvee.com/products/garvee-12000-btu-mini-split-air-mhk-375dddhw',
  },
  {
    id: 'M3',
    category: 'Mini-split',
    name: '18,000 BTU 21 SEER2 mini-split',
    sku: 'MHK_375JCPLF',
    price: '$789.99',
    capacity: '18,000 cooling / heating BTU',
    voltage: '208-230 V',
    coverage: 'Up to 1,250 sq. ft. page claim',
    efficiency: '21 SEER2',
    badge: 'Larger calculated load',
    fit: 'The better-documented larger-zone candidate, including a 13 ft. connection-pipe set.',
    watch: 'The product page does not prove low-temperature heating capacity. Treat extreme-cold wording as marketing, not a heat-loss guarantee.',
    image: 'product-m3-mini-split-18000.webp',
    imageWidth: 900,
    imageHeight: 900,
    href: 'https://www.garvee.com/products/garvee-high-efficiency-ductless-mini-split-mhk-375jcplf',
  },
  {
    id: 'M4',
    category: 'Mini-split',
    name: '24,000 BTU 21 SEER2 mini-split',
    sku: 'MHK_375K4LEN',
    price: '$1,091.99',
    capacity: '24,000 BTU nominal',
    voltage: '208-230 V',
    coverage: 'Up to 1,500 sq. ft. page claim',
    efficiency: '21 SEER2',
    badge: 'Load-calculation step-up',
    fit: 'A step-up only for a genuinely large or high-load garage confirmed by calculation.',
    watch: 'Do not choose it because the floor area is below 1,500 sq. ft. Oversizing can reduce comfort and humidity performance.',
    image: 'product-m4-mini-split-24000.webp',
    imageWidth: 900,
    imageHeight: 900,
    href: 'https://www.garvee.com/products/garvee-24000-btu-21-seer2-ductless-mhk-375k4len',
  },
  {
    id: 'H1',
    category: 'Climate-specific',
    name: '9,000 BTU cold-weather candidate',
    sku: 'PHK_35Y5JANQ',
    price: '$467.99',
    capacity: '9,000 BTU nominal',
    voltage: '220-230 V',
    coverage: 'Up to 450 sq. ft. page claim',
    efficiency: '19 SEER2',
    badge: 'Cold shortlist, not proof',
    fit: 'A shoulder-season or backup-heat shortlist item where the official -4°F operating-range claim is relevant.',
    watch: 'No published low-temperature capacity or COP was found. Do not rely on it as sole freeze protection without an installer-supported submittal.',
    image: 'product-h1-mini-split-cold.webp',
    imageWidth: 900,
    imageHeight: 900,
    href: 'https://www.garvee.com/products/garvee-ultra-quiet-mini-split-air-phk-35y5janq',
  },
  {
    id: 'E1',
    category: 'Climate-specific',
    name: '2.65 gal evaporative cooler',
    sku: 'PHK_36UUQKKQ',
    price: '$99.99',
    capacity: 'No BTU rating; not compressor AC',
    voltage: 'Not stated on product page',
    coverage: 'Airflow and coverage not stated',
    badge: 'Hot-dry, open-air only',
    fit: 'A low-cost comfort aid for dry climates where the garage stays ventilated and added moisture is acceptable.',
    watch: 'It cannot be load-sized from the published page and should not be presented as an air-conditioner replacement.',
    image: 'product-e1-evaporative.webp',
    imageWidth: 900,
    imageHeight: 900,
    href: 'https://www.garvee.com/products/garvee-2-65-gallon-evaporative-air-phk-36uuqkkq',
  },
]

export const productsById = Object.fromEntries(products.map((product) => [product.id, product])) as Record<ProductId, ProductProfile>

export type ScenarioJourney = {
  id: string
  label: string
  title: string
  setting: string
  opening: string
  moment: string
  decision: string
  steps: { stage: string; action: string; why: string }[]
  products: ProductId[]
  boundary: string
  ownership: string
}

export const scenarioJourneys: ScenarioJourney[] = [
  {
    id: 'humid-gym',
    label: 'Humid gym',
    title: 'The workout starts before the thermostat catches up',
    setting: 'Hot-humid climate · regular evening use · partly improved enclosure',
    opening: 'Wall penetration and a condensate route are possible.',
    moment: 'The garage door closes after the car moves out. The room feels clammy, metal equipment is damp, and a portable hose would sit in the training path.',
    decision: 'Treat moisture, recovery time, and floor clearance as one problem. Improve door seals, pre-condition the closed garage, then use a right-sized inverter mini-split. Track humidity before assuming Dry mode is enough.',
    steps: [
      { stage: 'First weekend', action: 'Seal the door perimeter and measure temperature plus relative humidity.', why: 'Air leakage can erase capacity and keep pulling in moisture.' },
      { stage: 'Equipment path', action: 'Load-check M2 first; move to M3 only when the calculated band requires it.', why: 'Coverage claims do not include this garage door, roof, or workout load.' },
      { stage: 'Daily routine', action: 'Close the door, pre-condition, then reassess humidity after the workout.', why: 'Temperature may recover before moisture does.' },
    ],
    products: ['M2', 'M3'],
    boundary: 'If the garage stays open during exercise, no residential AC selection can promise room-like conditions.',
    ownership: 'Clean filters more often around chalk and dust. Keep a hygrometer in the occupied zone and plan a dedicated dehumidifier if mild, wet weather is the real problem.',
  },
  {
    id: 'daily-office',
    label: 'Daily office',
    title: 'A full workday exposes noise, drift, and every envelope weakness',
    setting: 'Finished office or studio · long daily occupancy · computers and calls',
    opening: 'A permanent wall route is allowed; electrical service still needs confirmation.',
    moment: 'A quick morning blast feels fine, then afternoon roof gain, computer heat, and online calls make cycling noise and temperature swings obvious.',
    decision: 'Prioritize steady part-load operation and quiet placement. Put insulation and shading ahead of a capacity jump, then match M1 or M2 to the real load and available circuit.',
    steps: [
      { stage: 'Before equipment', action: 'Improve roof or ceiling insulation and block direct solar gain.', why: 'The cheapest heat is the heat that never enters.' },
      { stage: 'Small-zone check', action: 'Compare M1 when the calculated upper band stays near 9,000 BTU and 115 V is essential.', why: 'It preserves a smaller electrical path without pretending every 450 sq. ft. garage is equal.' },
      { stage: 'Workday test', action: 'Check sound, supply-air direction, and recovery with people and computers present.', why: 'Office comfort is an eight-hour condition, not a five-minute demo.' },
    ],
    products: ['M1', 'M2'],
    boundary: 'Do not connect garage return air to the living-space HVAC system. Comfort upgrades also do not establish a legal sleeping room, ADU, or change of use; verify the local permit path when the project crosses that line.',
    ownership: 'Leave service clearance around the indoor unit, wash filters on schedule, and preserve access to the drain and outdoor unit. If the converted garage becomes the home’s lowest regularly occupied level, revisit EPA radon-testing guidance.',
  },
  {
    id: 'wood-shop',
    label: 'Wood shop',
    title: 'Capture the process first, then protect the comfort equipment',
    setting: 'Woodworking and DIY · intermittent high heat · airborne fine dust',
    opening: 'Source collection and safe outdoor-air strategy must be designed before recirculating cooling.',
    moment: 'The shop is hottest when tools, lights, and the person are all working. Fine dust that misses the collector heads toward every coil, blower, and drain.',
    decision: 'No audited GARVEE AC is a dust collector. Add tool-level capture, clean the room, separate spraying or solvent work, and only then evaluate a mini-split for sensible heat.',
    steps: [
      { stage: 'Process control', action: 'Capture dust at the tool and provide the right control for finishing or fumes.', why: 'Cooling equipment recirculates air and is not rated for hazardous contaminants.' },
      { stage: 'Cooling decision', action: 'Load-check M2 or M3 only after the dust plan is operating.', why: 'The tool load and makeup air can materially change the capacity need.' },
      { stage: 'Maintenance plan', action: 'Inspect filters, blower, coil, and drain more frequently than a clean office would require.', why: 'Dust loading reduces airflow and can create service problems.' },
    ],
    products: ['M2', 'M3'],
    boundary: 'Uncontrolled fine dust, welding, spraying, fuel, or solvent vapor is a no-fit result for a product recommendation.',
    ownership: 'Treat filter care as part of shop cleanup. Stop and correct the source-control problem if visible dust reaches the indoor unit, and do not use compressed air to turn settled combustible dust into an airborne cloud.',
  },
  {
    id: 'collection-storage',
    label: 'Protected storage',
    title: 'The damaging number may be humidity, not temperature',
    setting: 'Vehicles, tools, wood, electronics, or collectibles · low occupancy',
    opening: 'Permanent conditioning is possible, but the actual preservation target must be named.',
    moment: 'The garage rarely feels unbearable, yet tools spot-rust, wood moves, and boxes soften during long damp periods when the cooling load is low.',
    decision: 'Start with a hygrometer and moisture sources. Air-seal first, then decide whether cooling, a dedicated dehumidifier, or both are needed. Avoid oversizing for a fast temperature drop.',
    steps: [
      { stage: 'Observe', action: 'Log temperature and relative humidity across several weather patterns.', why: 'Storage damage can occur when there is too little cooling demand for AC dehumidification.' },
      { stage: 'Control moisture', action: 'Seal outdoor air leaks and plan drainage before selecting capacity.', why: 'A dehumidifier or AC must send collected water somewhere safe.' },
      { stage: 'Select carefully', action: 'Use M1 or M2 only when the calculated cooling load and preservation plan both support it.', why: 'A larger unit is not automatically a better moisture-control unit.' },
    ],
    products: ['M1', 'M2'],
    boundary: 'Never idle a fuel-burning vehicle in the garage. AC, exhaust fans, and CO alarms do not make idling safe.',
    ownership: 'Keep air paths open around stored items, monitor humidity, and inspect for condensation at cold surfaces and supply-air targets. For cold-season moisture control, verify the dehumidifier’s minimum operating temperature, auto-defrost behavior, drain-freeze risk, and heat added to the room.',
  },
  {
    id: 'rental-hoa',
    label: 'Rental / HOA',
    title: 'Portable only works when portable heat can leave',
    setting: 'No permanent wall work · occasional use · permission-limited exterior',
    opening: 'A compatible sliding-window panel is allowed, but a wall penetration and outdoor condenser are not.',
    moment: 'The temptation is to buy a “ventless portable AC.” In reality, compressor heat still needs an approved route outdoors and the hose becomes part of the room.',
    decision: 'Measure the opening, verify the panel and hose, seal the insert, and compare portable models on DOE/SACC capacity. If the opening is not allowed, return a no-match result instead of forcing a product.',
    steps: [
      { stage: 'Permission', action: 'Get the permitted opening and security requirements in writing.', why: 'A product cannot solve an HOA or lease restriction.' },
      { stage: 'Small vs. larger', action: 'Use P1 only for a genuinely small load; use P2 for a documented 10,200 DOE comparison.', why: 'Portable headline BTU values are not interchangeable.' },
      { stage: 'Flexible upgrade', action: 'Consider P3 only after confirming rating basis and window-kit fit.', why: 'Dual hose and heat are useful, but missing comparison data still matters.' },
    ],
    products: ['P1', 'P2', 'P3'],
    boundary: 'No window, vent, wall opening, or open-air path means no compatible GARVEE compressor AC in this shortlist.',
    ownership: 'Keep the hose short and straight, reseal the panel, drain as the manual requires, and inspect the insert whenever it is reinstalled.',
  },
  {
    id: 'cold-garage',
    label: 'Cold climate',
    title: 'An operating range is not a winter heat guarantee',
    setting: 'Four-season garage · shoulder-season comfort · possible freeze risk',
    opening: 'A wall route and 230 V circuit may be possible; winter design conditions are known locally.',
    moment: 'A product page says it operates below zero, but the garage depends on enough heat being delivered during the coldest night, not simply on the compressor staying on.',
    decision: 'Use the H1 model only as a shortlist. Ask for capacity and efficiency at the local design temperature, plan defrost drainage and snow clearance, and keep verified backup heat when freeze protection matters.',
    steps: [
      { stage: 'Heat-loss check', action: 'Calculate winter heat loss and identify the local design temperature.', why: 'Nominal 9,000 BTU does not describe cold-weather capacity retention.' },
      { stage: 'Submittal check', action: 'Request model-specific low-temperature capacity, COP, and a verifiable matched-system reference.', why: 'The official page did not expose those values.' },
      { stage: 'Winter site plan', action: 'Elevate and clear the outdoor unit, manage defrost water, and keep backup protection.', why: 'Snow, ice, and drainage are part of the heating system.' },
    ],
    products: ['H1'],
    boundary: 'Below the published range, or when this is the sole freeze-protection system, the current evidence supports no unconditional recommendation.',
    ownership: 'Keep the outdoor coil and base clear, inspect the drain path after freeze-thaw cycles, and test backup heat before the season.',
  },
  {
    id: 'gaming-music',
    label: 'Gaming / music',
    title: 'People, computers, amplifiers, and sound treatment all add heat',
    setting: 'Evening gaming and music room · long occupied sessions · door stays closed for sound control',
    opening: 'A quiet permanent wall route is allowed, but supply air must not blow directly at the desk or instruments.',
    moment: 'The room feels comfortable when empty. Two people, gaming computers, displays, amplifiers, and a closed insulated door push the temperature upward within an hour.',
    decision: 'Count internal equipment heat and occupancy instead of sizing from floor area alone. Place the indoor unit for quiet, even mixing, protect instruments from direct cold airflow, and keep fresh-air needs separate from temperature control.',
    steps: [
      { stage: 'Live-load inventory', action: 'List computers, displays, amplifiers, lighting, people, and typical session length.', why: 'The occupied load can be materially higher than the empty-room load.' },
      { stage: 'Placement check', action: 'Map supply-air direction, microphone position, listening seats, and service access.', why: 'Comfort and noise depend on where air and equipment sound land.' },
      { stage: 'Operating routine', action: 'Pre-condition before a session and monitor temperature plus humidity at seated height.', why: 'A closed sound-treated room can drift quickly once people and electronics are active.' },
    ],
    products: ['M1', 'M2'],
    boundary: 'An air conditioner does not provide a guaranteed outdoor-air rate. Dense occupancy may need a separate ventilation assessment.',
    ownership: 'Vacuum filters and equipment intakes on a regular cadence, keep condensate access clear, and avoid aiming cold supply air at instruments or users for long periods.',
  },
  {
    id: 'auto-detailing',
    label: 'Auto / detailing',
    title: 'Condition the work period, then separate every combustion and chemical risk',
    setting: 'Vehicle detailing and light maintenance · wet work · cleaners, chargers, lighting, and frequent door cycles',
    opening: 'A wall route is possible, but the main door opens for vehicle movement and wet-process ventilation.',
    moment: 'The garage heats up under inspection lights and polishers. Opening the main door loses conditioned air, while wet floors, cleaners, batteries, and an arriving vehicle introduce hazards that cooling cannot control.',
    decision: 'Design a recovery routine around vehicle entry, then condition only after the engine is off and the door cycle is complete. Store chemicals correctly, manage liquid water before humidity, and use product-specific ventilation for any process that creates vapor or exhaust.',
    steps: [
      { stage: 'Process boundary', action: 'Separate detailing, charging, fuel, solvent, paint, and engine-running activities.', why: 'Each process has a different ignition, vapor, exhaust, battery, or moisture risk.' },
      { stage: 'Recovery plan', action: 'Close the main door after vehicle movement and allow the system to recover before precision work.', why: 'Sizing for an open garage door creates an unrealistic equipment expectation.' },
      { stage: 'Equipment path', action: 'Load-check M2 or M3 only after lighting, tool heat, door cycles, and envelope work are included.', why: 'A larger floor-area claim does not model the actual work period.' },
    ],
    products: ['M2', 'M3'],
    boundary: 'Never run a fuel-burning vehicle indoors. Spraying, fuel vapor, strong solvents, and battery charging require controls selected for the process, not recirculating comfort AC.',
    ownership: 'Keep the indoor unit away from splash and chemical storage, clean filters after dusty polishing work, and inspect drains and floor moisture after wet detailing. For EVs, use vehicle preconditioning and the vehicle manual before justifying whole-garage HVAC around battery protection.',
  },
]

export const ownershipLayers = [
  {
    title: 'Envelope',
    prompt: 'Where does heat and moisture enter?',
    detail: 'Door seals, roof or ceiling insulation, shading, and penetrations usually determine whether the equipment can hold the target.',
  },
  {
    title: 'Temperature',
    prompt: 'How much heat must move outdoors?',
    detail: 'Use the calculated load band, rating basis, door recovery, occupancy, and equipment heat instead of floor area alone.',
  },
  {
    title: 'Moisture',
    prompt: 'Is the real target comfort or preservation?',
    detail: 'Cooling may dehumidify during long cycles. Mild humid periods and storage targets can still need a separate dehumidifier.',
  },
  {
    title: 'Air quality',
    prompt: 'What must be captured or exhausted?',
    detail: 'Vehicle exhaust, welding fumes, solvents, paint, fuel vapor, and process dust need controls designed for the source.',
  },
  {
    title: 'Ownership',
    prompt: 'Who installs, drains, cleans, and services it?',
    detail: 'Electrical work, penetrations, supports, line hide, condensate, permits, access, labor, and return risk sit beyond the box price.',
  },
] as const

export const checkoutLayers = [
  ['Equipment', 'Exact SKU, correct rating basis, capacity band, voltage, and operating limits'],
  ['Building work', 'Opening, weather seal, wall sleeve, outdoor support, clearances, and security'],
  ['Electrical', 'Circuit, breaker, disconnect, wiring, nameplate MCA/MOCP, and permit path'],
  ['Water', 'Gravity drain or pump, high-humidity behavior, defrost water, and freeze-safe discharge'],
  ['Air quality', 'Dust collection, local exhaust, makeup air, and separation from living-space HVAC'],
  ['Service risk', 'Installer scope, commissioning, diagnostics, removal labor, return freight, and warranty exclusions'],
] as const
