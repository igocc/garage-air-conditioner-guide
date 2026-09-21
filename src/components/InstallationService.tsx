import {
  ArrowRight,
  Camera,
  Check,
  ClipboardText,
  HouseLine,
  MapPin,
  ShieldWarning,
  Wrench,
} from '@phosphor-icons/react'
import { type FormEvent, useMemo, useState } from 'react'

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`
type DemoStatus = 'available' | 'review' | 'outside'

const statusCopy: Record<DemoStatus, { title: string; body: string }> = {
  available: {
    title: 'Example: service path available',
    body: 'In a future live program, the shopper could continue to scope review, installer matching, a site-specific quote, and scheduling.',
  },
  review: {
    title: 'Example: manual coverage review',
    body: 'A coordinator would verify travel area, license requirements, equipment type, building access, and whether a qualified installer is available.',
  },
  outside: {
    title: 'Example: not currently covered',
    body: 'The shopper would keep the complete installation brief, product shortlist, and questions to use with an independent local professional.',
  },
}

const serviceFlow = [
  ['Describe the garage', 'ZIP, use, dimensions, insulation, openings, power, batteries or EV charging, water exposure, proposed locations, photos, and timing.'],
  ['Review the scope', 'Check for stop conditions, missing measurements, A2L or refrigerant instructions, flood or snow siting, permit questions, and work that needs a separate trade.'],
  ['Match a local professional', 'Verify that the provider is appropriate for the equipment, refrigerant, electrical, and local requirements.'],
  ['Build a site-specific quote', 'Separate standard installation, building work, electrical changes, drainage, permits, and exclusions.'],
  ['Schedule and install', 'Confirm equipment, arrival, access, protection, startup procedure, and change-order rules before work starts.'],
  ['Commission and hand off', 'Record vacuum or connection procedure, leak checks, drainage, electrical readings, controls, maintenance, and warranty contacts.'],
] as const

export function InstallationService() {
  const [zip, setZip] = useState('')
  const [zipError, setZipError] = useState('')
  const [status, setStatus] = useState<DemoStatus | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [scopeReady, setScopeReady] = useState(false)
  const [garageUse, setGarageUse] = useState('Daily office or studio')
  const [area, setArea] = useState('480')
  const [height, setHeight] = useState('9')
  const [insulation, setInsulation] = useState('Partly improved')
  const [opening, setOpening] = useState('Wall penetration allowed')
  const [power, setPower] = useState('Not checked yet')
  const [placement, setPlacement] = useState('Indoor and outdoor locations need review')
  const [siteRisk, setSiteRisk] = useState('No known snow, flood, salt, or standing-water exposure')
  const [systemInfo, setSystemInfo] = useState('Exact model and refrigerant not selected')
  const [timing, setTiming] = useState('Researching, no fixed date')

  const scopeSummary = useMemo(() => [
    `${area || 'Unknown'} sq. ft. garage with ${height || 'unknown'} ft. ceiling`,
    garageUse,
    insulation,
    opening,
    power,
    placement,
    siteRisk,
    systemInfo,
    timing,
  ], [area, garageUse, height, insulation, opening, placement, power, siteRisk, systemInfo, timing])

  const checkZip = (event: FormEvent) => {
    event.preventDefault()
    if (!/^\d{5}$/.test(zip)) {
      setZipError('Enter a five-digit U.S. ZIP code for the concept preview.')
      setStatus(null)
      return
    }
    setZipError('')
    const finalDigit = Number(zip.at(-1))
    setStatus(finalDigit <= 2 ? 'available' : finalDigit <= 7 ? 'review' : 'outside')
  }

  return (
    <section className="service-section" id="install-service" aria-labelledby="service-title">
      <div className="shell">
        <div className="service-hero">
          <img
            src={asset('install-scope-review-v2.jpg')}
            alt="Homeowner and local HVAC professional reviewing possible equipment, electrical, and condensate locations in a garage"
            width="1600"
            height="1066"
            loading="lazy"
            decoding="async"
          />
          <div className="service-hero__copy">
            <span>Installation coordination concept</span>
            <h2 id="service-title">Turn product selection into an installable scope</h2>
            <p>Prepare the site facts, expose unresolved work, and make the quote comparable before anyone schedules the job.</p>
            <button className="button button--accent" onClick={() => setFormOpen(true)} type="button">Prepare install scope</button>
          </div>
        </div>

        <div className="concept-notice">
          <ShieldWarning size={25} weight="duotone" aria-hidden="true" />
          <p><strong>Concept demo. Information is not submitted.</strong> GARVEE's current U.S. site does not expose a verified GARVEE-operated coverage checker, booking flow, installation price, or nationwide installer network. The interaction below demonstrates a future coordination experience only.</p>
        </div>

        <div className="service-grid">
          <div className="coverage-demo">
            <div>
              <MapPin size={31} weight="duotone" aria-hidden="true" />
              <h3>Preview a ZIP coverage check</h3>
              <p>Results are simulated to demonstrate all interface states. They do not represent service in the ZIP entered.</p>
            </div>
            <form onSubmit={checkZip} noValidate>
              <label htmlFor="service-zip">U.S. ZIP code</label>
              <div>
                <input
                  id="service-zip"
                  inputMode="numeric"
                  maxLength={5}
                  value={zip}
                  onChange={(event) => setZip(event.target.value.replace(/\D/g, '').slice(0, 5))}
                  aria-describedby="service-zip-help service-zip-error"
                />
                <button type="submit">Preview status</button>
              </div>
              <small id="service-zip-help">No live coverage database is connected.</small>
              {zipError ? <p className="form-error" id="service-zip-error" role="alert">{zipError}</p> : null}
            </form>
            {status ? (
              <div className="coverage-result" data-status={status} aria-live="polite">
                <strong>{statusCopy[status].title}</strong>
                <p>{statusCopy[status].body}</p>
                <span>Simulated state. Not a coverage promise.</span>
              </div>
            ) : null}
          </div>

          <div className="service-flow">
            <h3>What responsible coordination should include</h3>
            <ol>
              {serviceFlow.map(([title, body]) => (
                <li key={title}>
                  <Check size={18} weight="bold" aria-hidden="true" />
                  <div><strong>{title}</strong><p>{body}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {formOpen ? (
          <div className="scope-builder" id="scope-builder">
            <div className="scope-builder__heading">
              <ClipboardText size={34} weight="duotone" aria-hidden="true" />
              <div>
                <h3>Build the site brief</h3>
                <p>This stays in your browser. It does not request contact details and cannot book service.</p>
              </div>
            </div>
            <div className="scope-fields">
              <label>Primary use<select value={garageUse} onChange={(event) => setGarageUse(event.target.value)}><option>Daily office or studio</option><option>Gym or recreation</option><option>Workshop or 3D printing</option><option>Vehicle care or storage</option><option>Occasional mixed use</option></select></label>
              <label>Floor area<input inputMode="numeric" value={area} onChange={(event) => setArea(event.target.value)} /></label>
              <label>Ceiling height<input inputMode="decimal" value={height} onChange={(event) => setHeight(event.target.value)} /></label>
              <label>Insulation<select value={insulation} onChange={(event) => setInsulation(event.target.value)}><option>Finished and sealed</option><option>Partly improved</option><option>Mostly unfinished</option></select></label>
              <label>Heat-rejection opening<select value={opening} onChange={(event) => setOpening(event.target.value)}><option>Wall penetration allowed</option><option>Usable window or vent</option><option>Main door only</option><option>No approved opening</option></select></label>
              <label>Electrical path<select value={power} onChange={(event) => setPower(event.target.value)}><option>Not checked yet</option><option>120 V receptacle only</option><option>240 V or new circuit possible</option></select></label>
              <label>Equipment placement<select value={placement} onChange={(event) => setPlacement(event.target.value)}><option>Indoor and outdoor locations need review</option><option>Both locations measured</option><option>Outdoor location is unresolved</option><option>Indoor location is constrained</option></select></label>
              <label>Regional siting exposure<select value={siteRisk} onChange={(event) => setSiteRisk(event.target.value)}><option>No known snow, flood, salt, or standing-water exposure</option><option>Heavy snow or roof-drip exposure</option><option>Flood or repeated standing water</option><option>Coastal salt or corrosive exposure</option><option>More than one exposure needs review</option></select></label>
              <label>System and refrigerant status<select value={systemInfo} onChange={(event) => setSystemInfo(event.target.value)}><option>Exact model and refrigerant not selected</option><option>Exact matched system selected</option><option>A2L instructions require installer review</option><option>Existing lines or components may be reused</option></select></label>
              <label>Timing<select value={timing} onChange={(event) => setTiming(event.target.value)}><option>Researching, no fixed date</option><option>Within one month</option><option>Within three months</option><option>Before a seasonal deadline</option></select></label>
              <label className="scope-upload">Site photos <span><Camera size={21} aria-hidden="true" />Choose local files<input type="file" accept="image/*" multiple /></span><small>Suggested: electrical panel, proposed indoor wall, exterior route, drain point, garage door, and equipment clearances.</small></label>
            </div>
            <button className="button scope-preview" type="button" onClick={() => setScopeReady(true)}>Preview my scope</button>
          </div>
        ) : null}

        {scopeReady ? (
          <div className="scope-output" aria-live="polite">
            <div>
              <HouseLine size={32} weight="duotone" aria-hidden="true" />
              <h3>Installation brief ready for review</h3>
              <p>No information was sent. Use this summary to compare local professional scopes.</p>
            </div>
            <ul>{scopeSummary.map((item) => <li key={item}><Check size={17} weight="bold" aria-hidden="true" />{item}</li>)}</ul>
            <div className="scope-questions">
              <strong>Questions every quote should answer</strong>
              <p>Who handles permits, electrical changes, refrigerant-circuit work, A2L requirements when applicable, condensate, flood or snow siting, wall repair, startup records, callback labor, product defects, and workmanship warranty?</p>
            </div>
          </div>
        ) : null}

        <div className="service-boundary">
          <Wrench size={28} weight="duotone" aria-hidden="true" />
          <div>
            <h3>One purchase, two separate responsibilities</h3>
            <p>GARVEE's published product warranty and an installer's workmanship obligations are not the same promise. A future coordination program should state who sells the labor, who performs it, what is included, and how callbacks are handled.</p>
          </div>
          <a href="https://www.garvee.com/pages/warranty-policy" target="_blank" rel="noreferrer">Read warranty policy <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
