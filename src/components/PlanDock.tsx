import {
  ArrowRight,
  Check,
  ClipboardText,
  Copy,
  Printer,
  ShieldWarning,
  X,
} from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useMemo, useState } from 'react'
import { productsById } from '../productContent'
import type { GaragePlanSnapshot } from '../planTypes'

const systemLabel = {
  'mini-split': 'Ductless mini-split',
  portable: 'Portable AC',
  window: 'Window AC',
  evaporative: 'Evaporative cooler',
  'solve-venting-first': 'Solve the heat-rejection path first',
} as const

const accessoryNotes = {
  'mini-split': ['Confirm the exact included line-set length', 'Plan condensate routing or a pump', 'Installer confirms support, disconnect, wiring, sealing, and line hide'],
  portable: ['Confirm the exhaust hose and window kit', 'Build a rigid, weather-sealed exhaust opening', 'Plan continuous drainage if the manual and humidity require it'],
  window: ['Confirm window opening and structure', 'Use the manufacturer-approved mounting support', 'Seal the opening without blocking drainage or outdoor airflow'],
  evaporative: ['Plan water supply and wet-media cleaning', 'Keep the garage open to outdoor air', 'Protect moisture-sensitive tools and stored items'],
  'solve-venting-first': ['Do not buy compressor equipment yet', 'Resolve the approved outdoor heat-rejection path', 'Re-run the planner after the building constraint changes'],
} as const

export function PlanDock({ plan }: { plan: GaragePlanSnapshot }) {
  const [open, setOpen] = useState(false)
  const [copyState, setCopyState] = useState('Copy plan')
  const reduceMotion = useReducedMotion()
  const result = plan.result
  const productNames = useMemo(
    () => result?.recommendedProductIds.map((id) => `${id}: ${productsById[id].name}`) ?? [],
    [result],
  )
  const planCount = [plan.scenario, result].filter(Boolean).length

  const summary = useMemo(() => {
    const lines = [
      'My Garage Plan',
      plan.scenario ? `Scenario: ${plan.scenario.label}` : 'Scenario: not selected',
      plan.input ? `Garage: ${plan.input.area} sq. ft., ${plan.input.ceilingHeight} ft. ceiling, ${plan.input.climate}` : 'Garage dimensions: not entered',
      result ? `Starting path: ${systemLabel[result.primarySystem]}` : 'Starting path: not diagnosed',
      result ? `Screening load: ${result.loadLabel}` : '',
      productNames.length ? `Products to investigate: ${productNames.join('; ')}` : 'Products: no trustworthy match selected yet',
      result ? `Accessories and site materials: ${accessoryNotes[result.primarySystem].join('; ')}` : '',
      result ? `Installation tasks: ${result.checklist.join('; ')}` : '',
      result?.warnings.length ? `Stop conditions and warnings: ${result.warnings.join('; ')}` : '',
      'Maintenance baseline: inspect filters, airflow, condensate, seals, outdoor clearances, and humidity readings on a repeatable schedule.',
    ]
    return lines.filter(Boolean).join('\n')
  }, [plan, productNames, result])

  const copyPlan = async () => {
    try {
      await navigator.clipboard.writeText(summary)
      setCopyState('Copied')
      window.setTimeout(() => setCopyState('Copy plan'), 1_800)
    } catch {
      setCopyState('Copy unavailable')
    }
  }

  return (
    <>
      <button className="plan-launch" onClick={() => setOpen(true)} type="button" aria-expanded={open} aria-label={`Open My Garage Plan, ${planCount} completed sections`}>
        <ClipboardText size={22} weight="duotone" aria-hidden="true" />
        <span>My Garage Plan</span>
        <strong>{planCount}</strong>
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              className="plan-backdrop"
              aria-label="Close My Garage Plan"
              onClick={() => setOpen(false)}
              type="button"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="plan-drawer"
              role="dialog"
              aria-modal="true"
              aria-labelledby="plan-title"
              initial={reduceMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <div className="plan-drawer__header">
                <div>
                  <span>Your working brief</span>
                  <h2 id="plan-title">My Garage Plan</h2>
                </div>
                <button onClick={() => setOpen(false)} type="button" aria-label="Close plan">
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              <div className="plan-drawer__body">
                <section>
                  <h3>Garage story</h3>
                  {plan.scenario ? (
                    <>
                      <strong>{plan.scenario.label}</strong>
                      <p>{plan.scenario.decision}</p>
                    </>
                  ) : (
                    <p>Choose a scenario to anchor the plan in how the garage will actually be used.</p>
                  )}
                  <a href="#scenarios" onClick={() => setOpen(false)}>Choose a scenario <ArrowRight size={16} aria-hidden="true" /></a>
                </section>

                <section>
                  <h3>Diagnosis</h3>
                  {result ? (
                    <>
                      <strong>{systemLabel[result.primarySystem]}</strong>
                      <p>{result.loadLabel}</p>
                      {result.noProductReason ? (
                        <div className="plan-stop"><ShieldWarning size={19} weight="fill" aria-hidden="true" />{result.noProductReason}</div>
                      ) : null}
                    </>
                  ) : (
                    <p>Complete the planner to add a load band, system path, risk flags, and product candidates.</p>
                  )}
                  <a href="#advisor" onClick={() => setOpen(false)}>Run the diagnosis <ArrowRight size={16} aria-hidden="true" /></a>
                </section>

                <section>
                  <h3>Equipment candidates</h3>
                  {productNames.length ? (
                    <ul>{productNames.map((name) => <li key={name}><Check size={16} weight="bold" aria-hidden="true" />{name}</li>)}</ul>
                  ) : <p>No product candidate has been added. A stop result is a valid plan outcome.</p>}
                </section>

                <section>
                  <h3>Complete the system</h3>
                  <ul>
                    {(result ? accessoryNotes[result.primarySystem] : ['Confirm what is included in the exact box', 'Identify site-required support, sealing, power, drainage, and venting', 'Separate comfort equipment from source-control equipment']).map((item) => (
                      <li key={item}><Check size={16} weight="bold" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3>Quote preparation</h3>
                  <ul>
                    {(result?.checklist.slice(0, 5) ?? ['Photograph the electrical panel and proposed equipment locations', 'Measure the garage, ceiling, openings, and clearances', 'Document insulation, drainage, and door-operation constraints']).map((item) => (
                      <li key={item}><Check size={16} weight="bold" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                  <a href="#install-service" onClick={() => setOpen(false)}>Prepare install scope <ArrowRight size={16} aria-hidden="true" /></a>
                </section>

                <section>
                  <h3>Ownership baseline</h3>
                  <p>Record filter, coil, drain, seal, hose, outdoor-clearance, humidity, and seasonal backup checks.</p>
                </section>
              </div>

              <div className="plan-drawer__actions">
                <button onClick={copyPlan} type="button"><Copy size={18} aria-hidden="true" />{copyState}</button>
                <button onClick={() => window.print()} type="button"><Printer size={18} aria-hidden="true" />Print plan</button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
