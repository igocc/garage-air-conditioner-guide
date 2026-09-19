import '@fontsource-variable/source-code-pro'
import '@fontsource-variable/source-sans-3'
import {
  ArrowRight,
  CaretDown,
  Check,
  Circuitry,
  Drop,
  Gauge,
  HouseLine,
  ShieldWarning,
  SlidersHorizontal,
  Sun,
  ThermometerSimple,
  Toolbox,
  Warning,
  Wind,
} from '@phosphor-icons/react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { useRef, useState } from 'react'
import { Advisor } from './components/Advisor'
import {
  climateProfiles,
  heatPaths,
  ownershipMoments,
  problemRoles,
  sources,
  systemProfiles,
  useCases,
  type SystemProfile,
} from './content'
import { usePretextHeight } from './lib/usePretextHeight'

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

const lenses = [
  {
    id: 'comfort',
    label: 'Comfort',
    headline: 'Make the space usable when you need it.',
    body: 'Start with occupancy, pre-cooling time, noise, door recovery, and the temperature you can realistically hold.',
    icon: ThermometerSimple,
  },
  {
    id: 'protection',
    label: 'Protection',
    headline: 'Protect tools, finishes, and stored items.',
    body: 'Watch relative humidity, condensation risk, corrosion, mold, and how air moves around stored materials.',
    icon: Drop,
  },
  {
    id: 'work',
    label: 'Work',
    headline: 'Plan for the heat your activity creates.',
    body: 'People, computers, chargers, power tools, lighting, and process equipment can materially raise the cooling load.',
    icon: Toolbox,
  },
  {
    id: 'air',
    label: 'Air quality',
    headline: 'Separate temperature control from contaminant control.',
    body: 'An air conditioner recirculates air. Fumes, exhaust, solvents, and dust still need source control or suitable ventilation.',
    icon: Wind,
  },
] as const

const installationChecks = [
  {
    title: 'Heat-rejection path',
    copy: 'Portable, window, through-wall, and mini-split systems all move heat outdoors in different ways. No opening means the constraint comes first.',
    icon: Wind,
  },
  {
    title: 'Electrical service',
    copy: 'Voltage does not follow BTU alone. Verify the exact model nameplate, circuit, MCA, MOCP, disconnect, and local requirements.',
    icon: Circuitry,
  },
  {
    title: 'Condensate route',
    copy: 'Plan where water goes in humid weather, during dry mode, and during heating defrost. Protect foundations, walkways, and freezing zones.',
    icon: Drop,
  },
  {
    title: 'Service access',
    copy: 'Leave room to clean filters, blowers, coils, drains, hoses, and the outdoor unit without moving vehicles or permanent storage.',
    icon: SlidersHorizontal,
  },
] as const

const faqs = [
  {
    question: 'Can I cool a garage without a window?',
    answer: 'Possibly, but heat still has to leave the building. A mini-split uses a small wall penetration and an outdoor unit. A portable AC needs an approved exhaust opening. If neither is allowed, solve the building or permission constraint before buying compressor equipment.',
  },
  {
    question: 'Is 20 BTU per square foot enough for a garage?',
    answer: 'It is a room-AC starting point, not a garage standard. Ceiling height, insulation, solar gain, leakage, door cycles, humidity, people, and equipment can move the result substantially. Use a formal load calculation when the installation is permanent or the risk of a wrong size is high.',
  },
  {
    question: 'Does a portable AC need to be drained?',
    answer: 'It depends on the model, mode, temperature, and humidity. Some units re-evaporate part of the condensate, while others use a tank, lower drain, upper drain, or continuous hose. Confirm the manual and plan for high-humidity operation.',
  },
  {
    question: 'Will dry mode replace a dehumidifier?',
    answer: 'Not always. Dry mode usually still relies on refrigeration and may cool the space while removing moisture. Capacity and control logic vary. A dedicated dehumidifier may be a better fit during mild, humid weather or when storage humidity is the main target.',
  },
  {
    question: 'Can I connect the garage to the house HVAC?',
    answer: 'Do not assume that is safe or code-compliant. Attached garages can contain vehicle exhaust, fuel vapor, and other contaminants. Keep the garage system independent from living-space supply and return air, then verify local requirements.',
  },
  {
    question: 'Does pre-charged mean a mini-split is fully DIY?',
    answer: 'No. The exact connection method matters. Conventional line sets can require evacuation, leak testing, refrigerant handling, electrical work, permits, and commissioning. Follow the product instructions and EPA or local requirements for the specific work.',
  },
] as const

function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 })
  return <motion.div className="reading-progress" style={{ scaleX }} aria-hidden="true" />
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function LensSwitcher() {
  const [active, setActive] = useState<(typeof lenses)[number]['id']>('comfort')
  const lens = lenses.find((item) => item.id === active)!
  const Icon = lens.icon

  return (
    <section className="lens-section" aria-labelledby="lens-title">
      <div className="shell lens-section__layout">
        <div>
          <h2 id="lens-title">A garage has more than one comfort problem</h2>
          <p className="section-lede">Choose the lens that matters most today. A complete plan may need more than one piece of equipment.</p>
        </div>
        <div className="lens-switcher">
          <div className="lens-tabs" aria-label="Garage planning perspectives">
            {lenses.map((item) => {
              const TabIcon = item.icon
              return (
                <button
                  aria-pressed={active === item.id}
                  className="lens-tab"
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  type="button"
                >
                  <TabIcon size={20} aria-hidden="true" />
                  {item.label}
                </button>
              )
            })}
          </div>
          <motion.div
            className="lens-panel"
            key={lens.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon size={34} weight="duotone" aria-hidden="true" />
            <h3>{lens.headline}</h3>
            <p>{lens.body}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SystemExplorer() {
  const [selected, setSelected] = useState<SystemProfile['id']>('mini-split')
  const profile = systemProfiles.find((item) => item.id === selected)!

  return (
    <div className="system-explorer">
      <div className="system-rail" aria-label="Garage cooling systems">
        {systemProfiles.map((item) => (
          <button
            aria-pressed={selected === item.id}
            className="system-tab"
            key={item.id}
            onClick={() => setSelected(item.id)}
            type="button"
          >
            <span>{item.shortName}</span>
            <small>{item.permanence}</small>
          </button>
        ))}
      </div>
      <motion.article
        className="system-detail"
        key={profile.id}
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="system-detail__topline">
          <span>{profile.permanence}</span>
          <Gauge size={26} weight="duotone" aria-hidden="true" />
        </div>
        <h3>{profile.name}</h3>
        <p className="system-fit">{profile.fit}</p>
        <div className="system-columns">
          <div>
            <h4>Where it earns its place</h4>
            <ul>
              {profile.strengths.map((item) => (
                <li key={item}>
                  <Check size={17} weight="bold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>What can derail it</h4>
            <ul>
              {profile.watch.map((item) => (
                <li key={item}>
                  <Warning size={17} weight="fill" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {profile.link ? (
          <a className="text-link" href={profile.link} target="_blank" rel="noreferrer">
            {profile.linkLabel}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        ) : null}
      </motion.article>
    </div>
  )
}

function App() {
  const heroLead = 'Diagnose heat, humidity, venting, power, and installation constraints before you shop by BTU.'
  const heroLeadRef = useRef<HTMLParagraphElement>(null)
  usePretextHeight(heroLeadRef, heroLead)

  return (
    <>
      <a className="skip-link" href="#top">Skip to main content</a>
      <ReadingProgress />
      <header className="site-header">
        <div className="shell site-header__inner">
          <a className="brand" href="#top" aria-label="GARVEE Garage Guide">
            <img src={asset('garvee-logo.svg')} alt="GARVEE" width="140" height="28" />
            <span>Garage Guide</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#scenarios">Scenarios</a>
            <a href="#advisor">Find your setup</a>
            <a href="#systems">Compare systems</a>
            <a href="#installation">Install</a>
          </nav>
          <a className="button button--nav" href="#advisor">Build my plan</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__media" aria-hidden="true">
            <img
              src={asset('hero-garage.webp')}
              srcSet={`${asset('hero-garage-800.webp')} 800w, ${asset('hero-garage.webp')} 1672w`}
              sizes="100vw"
              alt=""
              width="1672"
              height="941"
              fetchPriority="high"
            />
          </div>
          <div className="hero__scrim" />
          <div className="shell hero__content">
            <p className="hero__eyebrow">Garage air conditioner guide</p>
            <h1>Make your garage usable.</h1>
            <p ref={heroLeadRef} data-pretext>{heroLead}</p>
            <div className="hero__actions">
              <a className="button button--accent" href="#advisor">Build my plan</a>
              <a className="button button--ghost" href="#story">Understand the space</a>
            </div>
          </div>
        </section>

        <section className="decision-strip" aria-label="Four questions before capacity">
          <div className="shell decision-strip__grid">
            <div><span>Use</span><strong>What happens here?</strong></div>
            <div><span>Climate</span><strong>Heat, humidity, or winter?</strong></div>
            <div><span>Building</span><strong>Where can heat leave?</strong></div>
            <div><span>Operation</span><strong>Occasional or all day?</strong></div>
          </div>
        </section>

        <LensSwitcher />

        <section className="scenario-section" id="scenarios" aria-labelledby="scenario-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="scenario-title">The job changes the answer</h2>
              <p className="section-lede">A garage gym, office, workshop, and storage space can share the same square footage but need different controls.</p>
            </Reveal>
            <figure className="scenario-figure">
              <img
                src={asset('garage-life-scenes.webp')}
                alt="Four realistic garage uses: gym, office, workshop, and vehicle storage"
                width="2073"
                height="758"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="scenario-grid">
              {useCases.map((item) => (
                <Reveal className="scenario-item" key={item.id}>
                  <h3>{item.title}</h3>
                  <strong>{item.question}</strong>
                  <p>{item.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section" id="story" aria-labelledby="story-title">
          <div className="shell story-section__layout">
            <Reveal className="story-copy">
              <h2 id="story-title">Cooling is one layer of the plan</h2>
              <p className="section-lede">Start by naming the problem. Temperature, moisture, contaminants, and dust use different control strategies.</p>
              <div className="role-list">
                {problemRoles.map((role) => (
                  <div className="role-row" key={role.title}>
                    <div>
                      <h3>{role.title}</h3>
                      <p>{role.description}</p>
                    </div>
                    <span>{role.device}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="story-visual">
              <img
                src={asset('air-quality-layers.webp')}
                alt="Garage airflow illustration separating cooling, dehumidification, ventilation, and dust collection"
                width="1024"
                height="1536"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
          </div>
        </section>

        <section className="heat-section" aria-labelledby="heat-title">
          <div className="shell heat-section__layout">
            <Reveal className="heat-image">
              <img
                src={asset('garage-heat-paths.webp')}
                alt="Cutaway garage showing heat from the roof, door, air leaks, equipment, and open door cycles"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal className="heat-copy">
              <h2 id="heat-title">Why garage heat behaves differently</h2>
              <p className="section-lede">Floor area is only the beginning. The enclosure and how you operate it determine how hard the equipment must work.</p>
              <div className="heat-list">
                {heatPaths.map(([title, copy]) => (
                  <details key={title}>
                    <summary>{title}<CaretDown size={18} aria-hidden="true" /></summary>
                    <p>{copy}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="advisor-section" id="advisor" aria-labelledby="advisor-title">
          <div className="shell">
            <Reveal className="advisor-heading">
              <div>
                <p className="section-kicker">Interactive garage planner</p>
                <h2 id="advisor-title">Find a defensible starting path</h2>
                <p className="section-lede">The tool combines your use, climate, enclosure, venting, electrical path, and air-quality risks.</p>
              </div>
              <div className="method-note">
                <Gauge size={28} weight="duotone" aria-hidden="true" />
                <p><strong>Screening, not final sizing.</strong> Results use a transparent room-AC baseline with garage-specific adjustments and a wide range.</p>
              </div>
            </Reveal>
            <Advisor />
          </div>
        </section>

        <section className="systems-section" id="systems" aria-labelledby="systems-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="systems-title">Every system has a failure mode</h2>
              <p className="section-lede">Compare the whole setup, not only the largest capacity number in a listing title.</p>
            </Reveal>
            <SystemExplorer />
          </div>
        </section>

        <section className="rating-section" aria-labelledby="rating-title">
          <div className="shell rating-section__layout">
            <Reveal className="rating-lead">
              <Gauge size={46} weight="duotone" aria-hidden="true" />
              <h2 id="rating-title">BTU labels do not all mean the same thing</h2>
              <p>Portable AC listings may show a larger ASHRAE capacity and a lower DOE/SACC value. Use the same rating basis when comparing models.</p>
            </Reveal>
            <div className="rating-facts">
              <Reveal>
                <span>Portable AC</span>
                <h3>Lead with DOE/SACC</h3>
                <p>SACC accounts for factors such as infiltration and heat from the duct and cabinet during the test procedure.</p>
              </Reveal>
              <Reveal>
                <span>Permanent systems</span>
                <h3>Match load, not floor area alone</h3>
                <p>Oversizing can shorten cycles and weaken humidity control. Undersizing can leave the system running without reaching the target.</p>
              </Reveal>
              <Reveal>
                <span>Final selection</span>
                <h3>Read the exact manual</h3>
                <p>Coverage, voltage, low-temperature output, sound, line length, and drainage belong to the exact model, not the category.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="climate-section" aria-labelledby="climate-title">
          <div className="shell">
            <div className="climate-hero">
              <img
                src={asset('garage-climate-zones.webp')}
                alt="Three garage exteriors representing hot-dry, hot-humid, and mixed-cold climates"
                width="2048"
                height="768"
                loading="lazy"
                decoding="async"
              />
              <div>
                <Sun size={34} weight="duotone" aria-hidden="true" />
                <h2 id="climate-title">Climate changes the priority list</h2>
              </div>
            </div>
            <div className="climate-grid">
              {climateProfiles.map((profile) => (
                <article key={profile.id}>
                  <h3>{profile.title}</h3>
                  <p className="climate-location">{profile.locations}</p>
                  <strong>{profile.focus}</strong>
                  <p>{profile.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="installation-section" id="installation" aria-labelledby="installation-title">
          <div className="shell installation-section__layout">
            <Reveal className="installation-image">
              <img
                src={asset('installation-readiness.webp')}
                alt="Garage mini-split and portable AC installation paths showing venting, electrical, outdoor unit, and condensate routing"
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal className="installation-copy">
              <h2 id="installation-title">Check the building before checkout</h2>
              <p className="section-lede">A workable route for power, heat, water, and service access prevents most expensive surprises.</p>
              <div className="installation-list">
                {installationChecks.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title}>
                      <Icon size={25} weight="duotone" aria-hidden="true" />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.copy}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="ownership-section" aria-labelledby="ownership-title">
          <div className="shell">
            <Reveal className="section-heading section-heading--narrow">
              <h2 id="ownership-title">Plan for the second summer</h2>
              <p className="section-lede">Filters, coils, blowers, hoses, drains, seals, and outdoor clearances determine whether performance lasts.</p>
            </Reveal>
            <div className="ownership-grid">
              {ownershipMoments.map((moment) => (
                <article key={moment.title}>
                  <h3>{moment.title}</h3>
                  <ul>
                    {moment.items.map((item) => (
                      <li key={item}><Check size={17} weight="bold" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="safety-section" aria-labelledby="safety-title">
          <div className="shell safety-section__layout">
            <div>
              <ShieldWarning size={50} weight="duotone" aria-hidden="true" />
              <h2 id="safety-title">Cooling does not make polluted air safe</h2>
            </div>
            <div className="safety-copy">
              <p>Do not idle a fuel-burning vehicle in a garage. Keep garage air separate from living-space supply and return systems.</p>
              <p>Use source capture or suitable outdoor exhaust for welding, spraying, solvents, fuel vapor, and heavy dust. Follow the equipment instructions and local fire, mechanical, electrical, and building requirements.</p>
              <a className="button button--light" href="#sources">Review the sources</a>
            </div>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="shell faq-section__layout">
            <div>
              <h2 id="faq-title">Questions that change the purchase</h2>
              <p className="section-lede">The useful answer usually includes a condition, a limit, and a next check.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<CaretDown size={18} aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sources-section" id="sources" aria-labelledby="sources-title">
          <div className="shell sources-section__layout">
            <div>
              <h2 id="sources-title">How this guide was built</h2>
              <p>Technical claims come from public agencies, standards bodies, and test-method guidance. Reddit and Amazon were used to find recurring questions and confusing language, not to establish safety or performance facts.</p>
              <p className="source-note">Semrush account-level keyword metrics were unavailable during research, so this page does not invent volume, difficulty, or CPC values.</p>
            </div>
            <details className="sources-disclosure">
              <summary>View technical sources<CaretDown size={18} aria-hidden="true" /></summary>
              <div className="source-list">
                {sources.map((source) => (
                  <a href={source.href} key={source.href} target="_blank" rel="noreferrer">
                    <span>{source.group}</span>
                    <strong>{source.title}</strong>
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="shell final-cta__inner">
            <HouseLine size={42} weight="duotone" aria-hidden="true" />
            <h2 id="final-title">Start with the garage you actually have</h2>
            <p>Turn the conditions, constraints, and intended use into a short list before comparing products.</p>
            <a className="button button--accent" href="#advisor">Build my plan</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer__inner">
          <a className="brand brand--footer" href="https://www.garvee.com" target="_blank" rel="noreferrer">
            <img src={asset('garvee-logo.svg')} alt="GARVEE" width="140" height="28" />
          </a>
          <p>Interactive research prototype for GARVEE U.S. shoppers. Always confirm current product specifications and local requirements.</p>
          <a href="https://www.garvee.com/collections/air-conditioners-accessories" target="_blank" rel="noreferrer">
            Shop all air conditioners
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
