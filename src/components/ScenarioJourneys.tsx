import { ArrowRight, CheckCircle, Plus, ShieldWarning } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { asset } from '../lib/assets'
import { productsById, scenarioJourneys, type ScenarioJourney } from '../productContent'

const journeyMedia: Record<string, { image: string; alt: string; width: number; height: number }> = {
  'humid-gym': { image: 'hero-garage-v2.jpg', alt: 'Lived-in garage with a compact gym, work area, vehicle, tools, and wall-mounted mini-split', width: 1800, height: 1013 },
  'daily-office': { image: 'scenario-office-music-v2.jpg', alt: 'Homeowner working from a garage office and music room with a ductless mini-split', width: 1120, height: 1400 },
  'wood-shop': { image: 'scenario-workshop-v2.jpg', alt: 'Home woodworker using tool-level dust collection in a garage with separate comfort cooling', width: 1120, height: 1400 },
  'collection-storage': { image: 'garage-life-scenes.webp', alt: 'Garage scenes showing vehicle storage and multiple everyday uses', width: 2073, height: 758 },
  'rental-hoa': { image: 'installation-readiness.webp', alt: 'Garage showing portable and mini-split heat-rejection paths', width: 1536, height: 1024 },
  'cold-garage': { image: 'garage-climate-zones.webp', alt: 'Garage exterior in dry, humid, and snowy climate conditions', width: 2048, height: 768 },
  'gaming-music': { image: 'scenario-office-music-v2.jpg', alt: 'Garage office and music room with computers, instruments, and a ductless mini-split', width: 1120, height: 1400 },
  'auto-detailing': { image: 'hero-garage-v2.jpg', alt: 'Organized multi-purpose garage with vehicle space, tools, and wall-mounted mini-split', width: 1800, height: 1013 },
}

const journeyOrder = ['humid-gym', 'daily-office', 'gaming-music', 'wood-shop', 'auto-detailing', 'collection-storage', 'rental-hoa', 'cold-garage']
const orderedJourneys = journeyOrder.map((id) => scenarioJourneys.find((item) => item.id === id)!).filter(Boolean)

export function ScenarioJourneys({ onAddScenario }: { onAddScenario?: (scenario: ScenarioJourney) => void }) {
  const [active, setActive] = useState(orderedJourneys[0].id)
  const reduceMotion = useReducedMotion()
  const journey = orderedJourneys.find((item) => item.id === active) ?? orderedJourneys[0]
  const media = journeyMedia[journey.id]

  return (
    <section className="scenario-section" id="scenarios" aria-labelledby="scenario-title">
      <div className="shell">
        <div className="section-heading section-heading--wide">
          <p className="section-kicker">Eight complete decision journeys</p>
          <h2 id="scenario-title">Follow the garage, not a generic buyer</h2>
          <p className="section-lede">
            Each composite scenario begins with a real operating moment, moves through the building constraints, and ends with a product path plus a clear stop condition.
          </p>
        </div>

        <figure className="journey-panorama">
          <img
            src={asset('garage-scenario-journeys.webp')}
            alt="Garage environments showing gym, office, workshop, vehicle storage, rental, and cold-climate uses"
            width="2167"
            height="726"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Composite decision journeys, not customer testimonials.</figcaption>
        </figure>

        <div className="journey-picker" aria-label="Garage scenario journeys">
          {orderedJourneys.map((item, index) => (
            <button
              aria-pressed={active === item.id}
              key={item.id}
              onClick={() => setActive(item.id)}
              type="button"
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </button>
          ))}
        </div>

        <motion.article
          className="journey-detail"
          key={journey.id}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="journey-detail__lead">
            <p>{journey.setting}</p>
            <h3>{journey.title}</h3>
            <div className="journey-opening">
              <strong>Physical opening</strong>
              <span>{journey.opening}</span>
            </div>
          </div>

          <figure className="journey-detail__media">
            <img src={asset(media.image)} alt={media.alt} width={media.width} height={media.height} loading="lazy" decoding="async" />
          </figure>

          <div className="journey-narrative">
            <div>
              <span>The moment</span>
              <p>{journey.moment}</p>
            </div>
            <div>
              <span>The decision</span>
              <p>{journey.decision}</p>
            </div>
          </div>

          <ol className="journey-steps">
            {journey.steps.map((step, index) => (
              <li key={step.stage}>
                <span>{index + 1}</span>
                <div>
                  <small>{step.stage}</small>
                  <strong>{step.action}</strong>
                  <p>{step.why}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="journey-products">
            <div>
              <span>Products to investigate</span>
              <div className="journey-product-links">
                {journey.products.map((id, index) => {
                  const product = productsById[id]
                  return (
                    <a href={`#product-${id}`} key={id}>
                      <CheckCircle size={18} weight="fill" aria-hidden="true" />
                      <span>
                        <small>{index === 0 ? 'Primary path' : 'Compare'}</small>
                        <strong>{id} · {product.name}</strong>
                      </span>
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="journey-boundary">
              <ShieldWarning size={24} weight="duotone" aria-hidden="true" />
              <div>
                <strong>Stop condition</strong>
                <p>{journey.boundary}</p>
              </div>
            </div>
            <div className="journey-ownership">
              <strong>Living with the setup</strong>
              <p>{journey.ownership}</p>
            </div>
          </div>
          <button className="button journey-add" onClick={() => onAddScenario?.(journey)} type="button">
            <Plus size={18} weight="bold" aria-hidden="true" />
            Use this scenario
          </button>
        </motion.article>
      </div>
    </section>
  )
}
