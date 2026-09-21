import {
  BatteryCharging,
  Car,
  CloudWarning,
  Drop,
  Fan,
  Fire,
  HouseLine,
  MoonStars,
  Snowflake,
  ThermometerSimple,
  Timer,
  Warning,
  Wind,
  Wrench,
} from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

const operatingModes = [
  {
    id: 'arrival',
    short: 'Arrival',
    time: '00-10 min',
    title: 'A hot or wet vehicle changes the room in seconds',
    scene: 'The overhead door opens, outdoor air replaces garage air, and a vehicle adds stored heat, rainwater, or melting snow.',
    signals: ['Door open or just closed', 'Warm hood and tires', 'Wet floor or rising humidity'],
    actions: [
      'Never idle a fuel-burning vehicle indoors, even with the door open.',
      'Let the door finish its cycle, then close it before judging cooling recovery.',
      'Keep water away from cords, chargers, storage, and the condensate discharge path.',
    ],
    boundary: 'Do not size equipment around the expectation that it will hold setpoint with the main door open.',
    icon: Car,
  },
  {
    id: 'precondition',
    short: 'Prepare',
    time: '10-45 min',
    title: 'Pre-condition the occupied zone, not every cubic foot at once',
    scene: 'The door is closed and the garage is moving toward a useful temperature before a workout, meeting, music session, or repair task.',
    signals: ['Door and windows closed', 'Target zone selected', 'Air path not blocked'],
    actions: [
      'Aim supply air toward the occupied area without blowing continuously at people, instruments, or finishes.',
      'Use a remote sensor or a separate thermometer where people actually work, not only at the indoor unit.',
      'Confirm that planned ventilation and pollutant controls are ready before occupancy begins.',
    ],
    boundary: 'Fast pull-down is not proof of correct sizing. Track temperature stability, cycle behavior, and humidity after the room settles.',
    icon: Timer,
  },
  {
    id: 'clean-occupancy',
    short: 'Occupy',
    time: '1-8 hr',
    title: 'Comfort and fresh air become separate jobs',
    scene: 'People, computers, lights, and exercise add sensible and moisture loads while a mini-split, window unit, or portable AC mostly recirculates air.',
    signals: ['Long occupied session', 'People and electronics active', 'Door stays closed'],
    actions: [
      'Condition the garage independently from the living-space HVAC system.',
      'Plan suitable outdoor-air ventilation for long occupancy without assuming the AC provides it.',
      'Watch noise at work height and in the room above or beside the garage, not only beside the equipment.',
    ],
    boundary: 'A cool room can still have stale air or garage-origin pollutants. Temperature is not an air-quality measurement.',
    icon: HouseLine,
  },
  {
    id: 'process',
    short: 'Make / repair',
    time: 'Task mode',
    title: 'The process can overrule the comfort plan',
    scene: 'Cutting, sanding, welding, spraying, polishing, solvent use, or engine work introduces particles, vapors, ignition risks, or exhaust.',
    signals: ['Dust or aerosol at the source', 'Fuel, paint, or solvent open', 'Hot work or engine activity'],
    actions: [
      'Capture dust or fumes at the source with equipment selected for the exact process.',
      'Keep contaminants away from the indoor coil, blower, electrical equipment, and ignition sources.',
      'Return to comfort mode only after the process is stopped and the air-control procedure is complete.',
    ],
    boundary: 'A comfort AC, washable screen, or generic fan is not proof of safe control for hazardous dust, vapor, welding fume, or vehicle exhaust.',
    icon: Wrench,
  },
  {
    id: 'recovery',
    short: 'Recover',
    time: 'After an event',
    title: 'Humidity may recover later than temperature',
    scene: 'The door closes after humid weather, wet detailing, a storm, or a large load change. Surfaces and stored objects do not instantly match the new air condition.',
    signals: ['Relative humidity rising', 'Cold metal can sweat', 'Drain or floor water present'],
    actions: [
      'Log temperature and relative humidity instead of judging only by how cool the air feels.',
      'Check floor drainage, AC condensate, and cold metal surfaces before leaving the space.',
      'Use independent dehumidification when moisture persists during mild weather with little cooling demand.',
    ],
    boundary: 'Lowering the thermostat further can overcool surfaces without solving the moisture source or low-load humidity problem.',
    icon: Drop,
  },
  {
    id: 'away',
    short: 'Away',
    time: 'Hours to weeks',
    title: 'Unattended protection needs a failure plan',
    scene: 'Vehicles, tools, instruments, collections, batteries, or plumbing remain in the garage while nobody is watching the equipment.',
    signals: ['Remote or vacation setpoint', 'Drain and power unattended', 'Weather may change'],
    actions: [
      'Verify the exact unit auto-restart behavior, alarms, local-control fallback, and what happens when Wi-Fi or power is lost.',
      'Keep filters, drains, outdoor clearances, and service access ready before a long absence.',
      'Use an independent monitoring or backup strategy when loss of conditioning can damage property.',
    ],
    boundary: 'An app and auto-restart feature do not provide heating, cooling, or drainage during a power outage.',
    icon: MoonStars,
  },
  {
    id: 'smoke',
    short: 'Smoke event',
    time: 'Emergency mode',
    title: 'Normal ventilation logic can reverse when outdoor air is dirty',
    scene: 'Wildfire smoke, dust, or another outdoor pollution event makes uncontrolled outdoor-air entry undesirable.',
    signals: ['Poor outdoor air quality', 'Visible haze or odor', 'Filter demand rising'],
    actions: [
      'Close and seal openings and understand which equipment intentionally brings outdoor air inside.',
      'Avoid treating an evaporative cooler or single-hose portable AC as a clean-air strategy.',
      'Use a properly sized particle air cleaner when appropriate and keep replacement filters available.',
    ],
    boundary: 'A ductless, window, or wall AC filter is usually intended to protect equipment, not provide verified fine-particle smoke cleaning.',
    icon: CloudWarning,
  },
  {
    id: 'winter',
    short: 'Winter',
    time: 'Heating / defrost',
    title: 'Published heating range is not the whole winter design',
    scene: 'The heat pump must deliver capacity at the local design temperature while the outdoor unit periodically defrosts and sheds water.',
    signals: ['Snow or roof runoff', 'Defrost cycles', 'Lower available capacity'],
    actions: [
      'Verify model-specific heating output at local winter conditions, not only nominal BTU.',
      'Keep the outdoor coil above expected snow and away from roof drip, drifting, and refreezing water.',
      'Define a safe backup or freeze-protection plan for outages and temperatures beyond the verified design.',
    ],
    boundary: 'Never use a portable fuel-fired generator, grill, or unvented combustion heater in the garage.',
    icon: Snowflake,
  },
] as const

const decisionGates = [
  {
    id: 'safe-use',
    label: 'Gate 01 · Imagine safely',
    title: 'Can this garage become the space you imagine?',
    intro: 'Comfort equipment can make the room usable, but it does not settle air separation, legal use, radon, or charging safety.',
    items: [
      {
        title: 'Attached garage air boundary',
        verdict: 'Seal toward the house, control the garage separately',
        copy: 'Leaks around doors, ceilings, ducts, and penetrations can move garage pollutants into occupied rooms. Do not share living-space supply or return air.',
        href: 'https://www.epa.gov/sites/default/files/2021-05/documents/epa-oria_singlefamilyprotocols_2021_final_508.pdf',
        source: 'EPA renovation IAQ guidance',
        icon: HouseLine,
      },
      {
        title: 'Comfort use vs. legal conversion',
        verdict: 'A cool garage is not automatically legal living space',
        copy: 'An office, gym, or studio may still require review of fire separation, ventilation, egress, electrical work, sleeping-room restrictions, permits, and insurance.',
        href: 'https://codes.iccsafe.org/content/IRC2021P1/chapter-3-building-planning',
        source: 'ICC residential planning provisions',
        icon: HouseLine,
      },
      {
        title: 'Conditional radon screening',
        verdict: 'Revisit testing when regular occupancy moves lower',
        copy: 'If the garage becomes the home’s lowest regularly occupied level, EPA recommends reconsidering radon testing. AC and ordinary particle filters do not control radon.',
        href: 'https://www.epa.gov/radon/how-often-should-i-testretest-my-home-radon',
        source: 'EPA radon testing guidance',
        icon: Wind,
      },
      {
        title: 'Lithium battery charging zone',
        verdict: 'The approved charger and battery instructions come first',
        copy: 'Stay present while micromobility products charge, stop using damaged or recalled packs, and keep charging away from water, sparks, fuels, solvents, and blocked exits.',
        href: 'https://www.cpsc.gov/node/65775',
        source: 'CPSC charging safety guidance',
        icon: BatteryCharging,
      },
    ],
  },
  {
    id: 'non-ac-load',
    label: 'Gate 02 · Name the other load',
    title: 'What environmental load is the AC not solving?',
    intro: 'Water, low-temperature moisture, gases, and particles need different controls. Treating all four as cooling problems creates expensive misses.',
    items: [
      {
        title: 'Liquid water hierarchy',
        verdict: 'Contain and dry water before managing vapor',
        copy: 'Snowmelt, wet vehicles, detailing water, and soaked gear need containment, drainage, and surface drying before an AC or dehumidifier can manage the remaining vapor.',
        href: 'https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home',
        source: 'EPA moisture and mold guide',
        icon: Drop,
      },
      {
        title: 'Cold-garage dehumidification',
        verdict: 'Capacity can fall before the room feels frozen',
        copy: 'Below about 65°F, frost can form on some refrigerated coils. Check minimum operating temperature, low-temperature capacity, auto-defrost, and drain-freeze risk.',
        href: 'https://www.energystar.gov/products/dehumidifiers',
        source: 'ENERGY STAR dehumidifier guidance',
        icon: Snowflake,
      },
      {
        title: 'Dehumidifier heat',
        verdict: 'Removing water also returns heat to the garage',
        copy: 'That trade can help in mild damp weather but add to the cooling load in summer. Compare moisture capacity, room temperature, noise, drainage, and circuit use together.',
        href: 'https://www.energystar.gov/products/dehumidifiers',
        source: 'ENERGY STAR dehumidifier guidance',
        icon: ThermometerSimple,
      },
      {
        title: 'Particles vs. gases',
        verdict: 'HEPA and smoke CADR do not make vapors or CO safe',
        copy: 'Particle cleaners can reduce airborne particles when sized correctly. Gasoline vapor, solvents, CO, radon, and process fumes still require source control and suitable ventilation.',
        href: 'https://www.epa.gov/indoor-air-quality-iaq/will-air-cleaners-reduce-health-risks',
        source: 'EPA air-cleaner limits',
        icon: Fan,
      },
    ],
  },
  {
    id: 'installable',
    label: 'Gate 03 · Make it installable',
    title: 'Will this exact system work on this exact site?',
    intro: 'Refrigerant, flood exposure, airflow geometry, and the service route are model and site decisions, not category-level promises.',
    items: [
      {
        title: 'A2L and lower-GWP refrigerants',
        verdict: 'Read the exact label and matched-system instructions',
        copy: 'R-32 and R-454B equipment can carry model-specific component, tool, charge, room-area, leak-mitigation, labeling, and local-code requirements.',
        href: 'https://www.epa.gov/hfcs/frequent-questions-phasedown-hydrofluorocarbons',
        source: 'EPA HFC phasedown FAQ',
        icon: Fire,
      },
      {
        title: 'Section 608 labor boundary',
        verdict: 'Pre-charged does not settle who can do the work',
        copy: 'EPA technician certification applies when work can reasonably be expected to open or disturb a stationary refrigerant circuit. Keep electrical, permits, and commissioning as separate quote lines.',
        href: 'https://www.epa.gov/section608/section-608-technician-certification-0',
        source: 'EPA Section 608 guidance',
        icon: Wrench,
      },
      {
        title: 'Flood and standing-water exposure',
        verdict: 'A standard condenser pad is not a flood plan',
        copy: 'Known flooding or standing water can change equipment and electrical height, support, anchorage, wind resistance, drainage, service access, and local permit requirements.',
        href: 'https://www.fema.gov/sites/default/files/documents/fema_urban_flooding_guidance_for_homeowners_and_renters.pdf',
        source: 'FEMA urban flooding guidance',
        icon: CloudWarning,
      },
      {
        title: 'Tall and divided space',
        verdict: 'Fans improve air movement, not missing capacity',
        copy: 'Check volume, temperature layering, supply reach, return path, lofts, partitions, door tracks, lifts, and fan clearances separately from the calculated cooling load.',
        href: 'https://www.energystar.gov/products/ceiling_fans/ceiling_fan_basics',
        source: 'ENERGY STAR ceiling-fan guidance',
        icon: Fan,
      },
      {
        title: 'Clear route and reach',
        verdict: 'Protect the travel path and the maintenance path',
        copy: 'Keep portable units, hoses, condensate, charging cables, storage, and ladders out of the route. Make controls, filters, drains, disconnects, and service panels reachable.',
        href: 'https://www.access-board.gov/tad/ev/',
        source: 'U.S. Access Board design guidance',
        icon: Wrench,
      },
    ],
  },
  {
    id: 'interactions',
    label: 'Gate 04 · Coordinate the machines',
    title: 'What else is changing heat, power, and airflow?',
    intro: 'The garage may contain a second heat pump, an EV charger, exhaust equipment, and large tools. Their interactions belong in the plan.',
    items: [
      {
        title: 'Heat-pump water heater',
        verdict: 'Useful interaction, not free whole-garage AC',
        copy: 'It extracts heat and moisture while heating water, but adds airflow, sound, condensate, filter, space, and winter-load requirements. Its effect follows hot-water demand.',
        href: 'https://www.energystar.gov/partner-resources/residential_new/educational_resources/sup_program_guidance/heat_pump_water_heater_guide/design_considerations',
        source: 'ENERGY STAR HPWH design guide',
        icon: ThermometerSimple,
      },
      {
        title: 'EV preconditioning',
        verdict: 'Condition the vehicle first, then justify the whole garage',
        copy: 'Many EVs can precondition the cabin and battery while plugged in. Check the vehicle manual and charger range before sizing garage HVAC around battery protection.',
        href: 'https://www.energy.gov/articles/winterizing-your-electric-vehicle',
        source: 'DOE EV winter guidance',
        icon: Car,
      },
      {
        title: 'Simultaneous electrical load',
        verdict: 'Plan AC with the charger, welder, compressor, and heater',
        copy: 'Check service capacity, breaker spaces, branch circuits, MCA, MOCP, load management, cable routing, physical protection, and which loads can run together.',
        href: 'https://www.energystar.gov/products/energy_star_home_upgrade/make_your_home_electric_ready',
        source: 'ENERGY STAR electric-ready guidance',
        icon: BatteryCharging,
      },
    ],
  },
] as const

export function OperatingPlaybook() {
  const [selected, setSelected] = useState<(typeof operatingModes)[number]['id']>('arrival')
  const reduceMotion = useReducedMotion()
  const mode = operatingModes.find((item) => item.id === selected)!
  const Icon = mode.icon

  return (
    <section className="operations-section" id="operations" aria-labelledby="operations-title">
      <div className="shell">
        <div className="operations-heading">
          <div>
            <p className="section-kicker">A day in the garage</p>
            <h2 id="operations-title">The right plan changes with the operating mode</h2>
          </div>
          <p>Buying is one decision. Living with the garage is a sequence of door events, loads, moisture, air-quality changes, and failures. Choose a moment to see what should change.</p>
        </div>

        <div className="mode-timeline" role="tablist" aria-label="Garage operating modes">
          {operatingModes.map((item, index) => {
            const ModeIcon = item.icon
            return (
              <button
                aria-controls={`mode-panel-${item.id}`}
                aria-selected={selected === item.id}
                id={`mode-tab-${item.id}`}
                key={item.id}
                onClick={() => setSelected(item.id)}
                role="tab"
                type="button"
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <ModeIcon size={21} weight="duotone" aria-hidden="true" />
                <strong>{item.short}</strong>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            animate={{ opacity: 1, y: 0 }}
            aria-labelledby={`mode-tab-${mode.id}`}
            className="mode-panel"
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            id={`mode-panel-${mode.id}`}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            key={mode.id}
            role="tabpanel"
            transition={{ duration: 0.25 }}
          >
            <div className="mode-panel__scene">
              <div className="mode-panel__icon"><Icon size={34} weight="duotone" aria-hidden="true" /></div>
              <span>{mode.time}</span>
              <h3>{mode.title}</h3>
              <p>{mode.scene}</p>
              <div className="mode-signals">
                {mode.signals.map((signal) => <span key={signal}>{signal}</span>)}
              </div>
            </div>
            <div className="mode-panel__actions">
              <p className="mode-panel__label">What changes now</p>
              <ul>
                {mode.actions.map((action, index) => (
                  <li key={action}>
                    <span aria-hidden="true">{index + 1}</span>
                    {action}
                  </li>
                ))}
              </ul>
              <div className="mode-boundary">
                <Warning size={22} weight="fill" aria-hidden="true" />
                <p><strong>Decision boundary</strong>{mode.boundary}</p>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="edge-guide">
          <div className="edge-guide__heading">
            <p className="section-kicker">Often missed in a standard AC guide</p>
            <h2>Four decision gates before equipment feels settled</h2>
            <p>These are not reasons to buy a larger unit. They reveal separate building, moisture, safety, electrical, air-cleaning, installation, and service decisions.</p>
          </div>
          <div className="decision-gates">
            {decisionGates.map((gate) => (
              <section className="decision-gate" key={gate.id} aria-labelledby={`gate-${gate.id}`}>
                <header>
                  <span>{gate.label}</span>
                  <h3 id={`gate-${gate.id}`}>{gate.title}</h3>
                  <p>{gate.intro}</p>
                </header>
                <div className="edge-guide__grid">
                  {gate.items.map((item) => {
                    const EdgeIcon = item.icon
                    return (
                      <article key={item.title}>
                        <EdgeIcon size={28} weight="duotone" aria-hidden="true" />
                        <h4>{item.title}</h4>
                        <strong>{item.verdict}</strong>
                        <p>{item.copy}</p>
                        <a href={item.href} target="_blank" rel="noreferrer">{item.source}</a>
                      </article>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>
          <div className="edge-guide__note">
            <Wind size={24} weight="duotone" aria-hidden="true" />
            <p><strong>One rule holds across every edge case:</strong> reduce or isolate the source first, then use ventilation or filtration selected for the contaminant, and use air conditioning for the remaining temperature and moisture load.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
