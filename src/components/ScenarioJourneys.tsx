import { ArrowRight, CheckCircle, ShieldWarning } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { productsById, scenarioJourneys } from '../productContent'

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

export function ScenarioJourneys() {
  const [active, setActive] = useState(scenarioJourneys[0].id)
  const reduceMotion = useReducedMotion()
  const journey = scenarioJourneys.find((item) => item.id === active) ?? scenarioJourneys[0]

  return (
    <section className="scenario-section" id="scenarios" aria-labelledby="scenario-title">
      <div className="shell">
        <div className="section-heading section-heading--wide">
          <p className="section-kicker">Six complete decision journeys</p>
          <h2 id="scenario-title">Follow the garage, not a generic buyer</h2>
          <p className="section-lede">
            Each composite scenario begins with a real operating moment, moves through the building constraints, and ends with a product path plus a clear stop condition.
          </p>
        </div>

        <figure className="journey-panorama">
          <img
            src={asset('garage-scenario-journeys.webp')}
            alt="Six garage environments showing a humid gym, office, wood shop, protected storage, rental setup, and cold-climate garage"
            width="2167"
            height="726"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Composite decision journeys, not customer testimonials.</figcaption>
        </figure>

        <div className="journey-picker" aria-label="Garage scenario journeys">
          {scenarioJourneys.map((item, index) => (
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
        </motion.article>
      </div>
    </section>
  )
}
