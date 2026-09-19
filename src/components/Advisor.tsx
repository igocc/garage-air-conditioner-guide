import {
  ArrowRight,
  CheckCircle,
  ClipboardText,
  Fan,
  HouseLine,
  Info,
  WarningOctagon,
  Wind,
} from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { type FormEvent, useMemo, useState } from 'react'
import { systemProfiles } from '../content'
import {
  buildAdvisorResult,
  defaultAdvisorInput,
  type AdvisorInput,
  type AdvisorResult,
  type Pollutant,
} from '../lib/advisor'

type Choice<T extends string> = { value: T; label: string; help?: string }

const useChoices = [
  { value: 'gym', label: 'Gym' },
  { value: 'office', label: 'Office or studio' },
  { value: 'workshop', label: 'Workshop' },
  { value: 'storage', label: 'Vehicles or storage' },
] satisfies Choice<AdvisorInput['use']>[]

const climateChoices = [
  { value: 'hot-dry', label: 'Hot and dry' },
  { value: 'hot-humid', label: 'Hot and humid' },
  { value: 'mixed-cold', label: 'Mixed or cold' },
] satisfies Choice<AdvisorInput['climate']>[]

const insulationChoices = [
  { value: 'good', label: 'Finished and sealed', help: 'Insulated door, walls, and ceiling' },
  { value: 'partial', label: 'Partly improved', help: 'Some insulation or sealing' },
  { value: 'poor', label: 'Mostly unfinished', help: 'Bare door, attic, or major gaps' },
] satisfies Choice<AdvisorInput['insulation']>[]

const openingChoices = [
  { value: 'wall', label: 'Wall penetration allowed' },
  { value: 'window', label: 'Usable window or vent' },
  { value: 'none', label: 'No approved opening' },
] satisfies Choice<AdvisorInput['opening']>[]

const operationChoices = [
  { value: 'occasional', label: 'Occasional pre-cooling' },
  { value: 'daily', label: 'Daily occupied use' },
  { value: 'protect', label: 'Ongoing storage protection' },
] satisfies Choice<AdvisorInput['operation']>[]

const pollutantChoices = [
  { value: 'vehicle', label: 'Fuel-burning vehicles' },
  { value: 'wood-dust', label: 'Wood dust' },
  { value: 'welding', label: 'Welding or cutting' },
  { value: 'paint-solvent', label: 'Paint, fuel, or solvents' },
] satisfies Choice<Pollutant>[]

const systemIcon = {
  'mini-split': HouseLine,
  portable: Fan,
  window: Wind,
  evaporative: Wind,
  'solve-venting-first': ClipboardText,
} as const

function SegmentedChoice<T extends string>({
  name,
  value,
  choices,
  onChange,
}: {
  name: string
  value: T
  choices: Choice<T>[]
  onChange: (value: T) => void
}) {
  return (
    <div className="choice-grid">
      {choices.map((choice) => (
        <label className="choice" key={choice.value}>
          <input
            checked={value === choice.value}
            name={name}
            onChange={() => onChange(choice.value)}
            type="radio"
            value={choice.value}
          />
          <span className="choice__control" aria-hidden="true" />
          <span>
            <strong>{choice.label}</strong>
            {choice.help ? <small>{choice.help}</small> : null}
          </span>
        </label>
      ))}
    </div>
  )
}

function ResultPanel({ result }: { result: AdvisorResult }) {
  const profile = systemProfiles.find((item) => item.id === result.primarySystem)!
  const alternate = result.alternateSystem
    ? systemProfiles.find((item) => item.id === result.alternateSystem)
    : null
  const Icon = systemIcon[result.primarySystem]

  return (
    <motion.div
      className="advisor-result"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      aria-live="polite"
    >
      <div className="advisor-result__lead">
        <Icon size={30} weight="duotone" aria-hidden="true" />
        <div>
          <p className="advisor-result__label">Best starting path</p>
          <h3>{profile.name}</h3>
        </div>
      </div>
      <p>{profile.fit}</p>

      <div className="load-band">
        <span>Screening load range</span>
        <strong>{result.loadLabel}</strong>
        <small>Use this to frame a conversation, not to select a final model.</small>
      </div>

      {alternate ? (
        <p className="alternate-path">
          <Info size={18} aria-hidden="true" />
          Also compare: <strong>{alternate.name}</strong>
        </p>
      ) : null}

      <div className="result-group">
        <h4>Why this path surfaced</h4>
        <ul>
          {result.reasons.map((reason) => (
            <li key={reason}>
              <CheckCircle size={18} weight="fill" aria-hidden="true" />
              {reason}
            </li>
          ))}
        </ul>
      </div>

      {result.warnings.length ? (
        <div className="warning-block">
          <h4>
            <WarningOctagon size={20} weight="fill" aria-hidden="true" />
            Safety and fit flags
          </h4>
          <ul>
            {result.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="result-group">
        <h4>Your installation checklist</h4>
        <ol>
          {result.checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>

      {profile.link ? (
        <a className="button button--accent button--full" href={profile.link} target="_blank" rel="noreferrer">
          {profile.linkLabel}
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      ) : (
        <a className="button button--accent button--full" href="#installation">
          Review installation paths
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      )}
    </motion.div>
  )
}

export function Advisor() {
  const [input, setInput] = useState(defaultAdvisorInput)
  const [result, setResult] = useState<AdvisorResult | null>(null)
  const [error, setError] = useState('')
  const reduceMotion = useReducedMotion()

  const update = <K extends keyof AdvisorInput>(key: K, value: AdvisorInput[K]) => {
    setInput((current) => ({ ...current, [key]: value }))
  }

  const togglePollutant = (pollutant: Pollutant) => {
    const next = input.pollutants.includes(pollutant)
      ? input.pollutants.filter((item) => item !== pollutant)
      : [...input.pollutants, pollutant]
    update('pollutants', next)
  }

  const summary = useMemo(
    () => `${input.area} sq. ft., ${input.ceilingHeight} ft. ceiling, ${input.climate.replace('-', ' ')}`,
    [input.area, input.ceilingHeight, input.climate],
  )

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!Number.isFinite(input.area) || input.area < 80 || input.area > 1_500) {
      setError('Enter a garage area from 80 to 1,500 square feet.')
      setResult(null)
      return
    }
    if (!Number.isFinite(input.ceilingHeight) || input.ceilingHeight < 7 || input.ceilingHeight > 16) {
      setError('Enter a ceiling height from 7 to 16 feet.')
      setResult(null)
      return
    }
    setError('')
    setResult(buildAdvisorResult(input))
  }

  return (
    <div className="advisor-shell">
      <form className="advisor-form" onSubmit={submit} noValidate>
        <div className="advisor-form__intro">
          <h3>Tell us how the garage must work</h3>
          <p>{summary}</p>
        </div>

        <fieldset>
          <legend>What is the primary use?</legend>
          <SegmentedChoice name="use" value={input.use} choices={useChoices} onChange={(value) => update('use', value)} />
        </fieldset>

        <fieldset>
          <legend>What climate are you solving for?</legend>
          <SegmentedChoice
            name="climate"
            value={input.climate}
            choices={climateChoices}
            onChange={(value) => update('climate', value)}
          />
        </fieldset>

        <div className="number-grid">
          <label>
            Garage area
            <span className="input-with-unit">
              <input
                aria-describedby="area-help area-error"
                inputMode="numeric"
                min="80"
                max="1500"
                onChange={(event) => update('area', Number(event.target.value))}
                type="number"
                value={input.area}
              />
              <span>sq. ft.</span>
            </span>
            <small id="area-help">Measure conditioned floor area, not the whole property.</small>
          </label>
          <label>
            Ceiling height
            <span className="input-with-unit">
              <input
                aria-describedby="height-help area-error"
                inputMode="decimal"
                min="7"
                max="16"
                step="0.5"
                onChange={(event) => update('ceilingHeight', Number(event.target.value))}
                type="number"
                value={input.ceilingHeight}
              />
              <span>ft.</span>
            </span>
            <small id="height-help">Volume matters in tall or vaulted garages.</small>
          </label>
        </div>

        <fieldset>
          <legend>How complete is the thermal envelope?</legend>
          <SegmentedChoice
            name="insulation"
            value={input.insulation}
            choices={insulationChoices}
            onChange={(value) => update('insulation', value)}
          />
        </fieldset>

        <div className="select-grid">
          <label>
            Sun exposure
            <select value={input.sunExposure} onChange={(event) => update('sunExposure', event.target.value as AdvisorInput['sunExposure'])}>
              <option value="shaded">Mostly shaded</option>
              <option value="mixed">Mixed exposure</option>
              <option value="strong">Strong roof or afternoon sun</option>
            </select>
          </label>
          <label>
            Main door use
            <select value={input.doorUse} onChange={(event) => update('doorUse', event.target.value as AdvisorInput['doorUse'])}>
              <option value="rare">Rare while conditioned</option>
              <option value="sometimes">Sometimes</option>
              <option value="frequent">Frequent</option>
            </select>
          </label>
          <label>
            Electrical path
            <select value={input.power} onChange={(event) => update('power', event.target.value as AdvisorInput['power'])}>
              <option value="unknown">Not checked yet</option>
              <option value="120v">120 V receptacle only</option>
              <option value="240v">240 V or new circuit possible</option>
            </select>
          </label>
        </div>

        <fieldset>
          <legend>Where can heat leave the building?</legend>
          <SegmentedChoice
            name="opening"
            value={input.opening}
            choices={openingChoices}
            onChange={(value) => update('opening', value)}
          />
        </fieldset>

        <fieldset>
          <legend>How will the space be operated?</legend>
          <SegmentedChoice
            name="operation"
            value={input.operation}
            choices={operationChoices}
            onChange={(value) => update('operation', value)}
          />
        </fieldset>

        <fieldset>
          <legend>Which pollutants can be present?</legend>
          <p className="fieldset-help">Select all that apply. These may add a separate ventilation or source-control requirement.</p>
          <div className="check-grid">
            {pollutantChoices.map((choice) => (
              <label className="check-choice" key={choice.value}>
                <input
                  checked={input.pollutants.includes(choice.value)}
                  onChange={() => togglePollutant(choice.value)}
                  type="checkbox"
                />
                <span>{choice.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {error ? (
          <p className="form-error" id="area-error" role="alert">
            <WarningOctagon size={18} weight="fill" aria-hidden="true" />
            {error}
          </p>
        ) : null}

        <button className="button button--accent advisor-submit" type="submit">
          Build my garage plan
          <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="advisor-disclaimer">
          This tool provides a screening range. Final equipment selection should follow the exact product manual, local requirements, and a qualified load calculation when risk or cost is high.
        </p>
      </form>

      <aside className="advisor-output" aria-label="Personalized garage plan">
        <AnimatePresence mode="wait">
          {result ? (
            <ResultPanel key={`${result.primarySystem}-${result.loadLabel}`} result={result} />
          ) : (
            <motion.div
              className="advisor-empty"
              initial={false}
              animate={reduceMotion ? undefined : { opacity: [0.75, 1] }}
              transition={{ duration: 0.35 }}
            >
              <ClipboardText size={42} weight="duotone" aria-hidden="true" />
              <h3>Your plan appears here</h3>
              <p>Complete the form to get a starting system path, load band, risk flags, and installation checklist.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </div>
  )
}
