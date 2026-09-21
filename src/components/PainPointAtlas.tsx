import {
  ArrowRight,
  CalendarCheck,
  CloudWarning,
  DropHalf,
  Lightning,
  Ruler,
  Snowflake,
  Wrench,
} from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useMemo, useState } from 'react'
import {
  internetPainPoints,
  painPointFilters,
  type PainPointPhase,
} from '../content'

const iconById: Record<string, typeof Wrench> = {
  'door-condensation': DropHalf,
  'condensate-failure': DropHalf,
  'combustion-backdraft': CloudWarning,
  'opening-compatibility': Ruler,
  'deep-clean': Wrench,
  'occupied-ventilation': CloudWarning,
  'electrical-collision': Lightning,
  'layout-clearance': Ruler,
  'structure-noise': CloudWarning,
  'service-parts': Wrench,
  'multi-zone-sharing': Ruler,
  'snow-defrost': Snowflake,
  'smoke-mode': CloudWarning,
  'outage-recovery': Lightning,
  'smart-control': Lightning,
  'quote-disagreement': CalendarCheck,
  'coastal-corrosion': CloudWarning,
  'accessible-maintenance': Wrench,
}

const countFor = (id: 'all' | PainPointPhase) => (
  id === 'all' ? internetPainPoints.length : internetPainPoints.filter((point) => point.phase.includes(id)).length
)

export function PainPointAtlas() {
  const [filter, setFilter] = useState<'all' | PainPointPhase>('all')
  const reduceMotion = useReducedMotion()
  const visible = useMemo(
    () => filter === 'all' ? internetPainPoints : internetPainPoints.filter((item) => item.phase.includes(filter)),
    [filter],
  )

  return (
    <section className="pain-section" id="pain-points" aria-labelledby="pain-title">
      <div className="shell">
        <div className="pain-heading">
          <div>
            <p className="section-kicker">Internet pain-point atlas</p>
            <h2 id="pain-title">The expensive problems often appear after checkout</h2>
          </div>
          <div className="pain-method">
            <strong>How to read this section</strong>
            <p>Authority-backed guidance establishes the technical boundary. VOC signals show a real question or experience, but do not prove that every garage will behave the same way.</p>
          </div>
        </div>

        <div className="pain-filters" aria-label="Filter pain points by decision stage">
          {painPointFilters.map((item) => (
            <button
              aria-pressed={filter === item.id}
              key={item.id}
              onClick={() => setFilter(item.id)}
              type="button"
            >
              {item.label}
              <span>{countFor(item.id)}</span>
            </button>
          ))}
        </div>

        <motion.div className="pain-grid" layout={!reduceMotion} aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((item) => {
              const Icon = iconById[item.id] ?? Wrench
              return (
                <motion.article
                  className="pain-card"
                  key={item.id}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.24 }}
                >
                  <div className="pain-card__topline">
                    <Icon size={25} weight="duotone" aria-hidden="true" />
                    <span>{item.eyebrow}</span>
                    <small data-evidence={item.evidence === 'Authority' ? 'authority' : 'voc'}>{item.evidence}</small>
                  </div>
                  <h3>{item.title}</h3>
                  <dl>
                    <div>
                      <dt>Trigger</dt>
                      <dd>{item.trigger}</dd>
                    </div>
                    <div>
                      <dt>Why it hurts</dt>
                      <dd>{item.consequence}</dd>
                    </div>
                    <div>
                      <dt>Verify before purchase</dt>
                      <dd>{item.check}</dd>
                    </div>
                  </dl>
                  <a href={item.sourceHref} target="_blank" rel="noreferrer">
                    {item.sourceLabel}
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
