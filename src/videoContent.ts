export type VideoBeat = {
  time: string
  label: string
  voiceover: string
  onScreen: string
  visual: string
}

export type VideoGuide = {
  id: string
  number: string
  title: string
  duration: string
  outcome: string
  poster: string
  posterAlt: string
  posterWidth: number
  posterHeight: number
  hookFamily: string
  beats: VideoBeat[]
}

export const videoGuides: VideoGuide[] = [
  {
    id: 'btu-first',
    number: '01',
    title: 'Why bigger BTU is not Step 1',
    duration: '45 sec',
    outcome: 'Understand why the garage envelope and heat-rejection path come before capacity.',
    poster: 'garage-heat-paths.webp',
    posterAlt: 'Garage cutaway showing heat entering through the roof, door, leaks, and daily use',
    posterWidth: 1536,
    posterHeight: 1024,
    hookFamily: 'Contrarian claim',
    beats: [
      {
        time: '0-2s',
        label: 'Hook',
        voiceover: 'A bigger air conditioner may be the wrong first fix for a hot garage.',
        onScreen: 'Bigger BTU is not Step 1',
        visual: 'Fast cut from a hot garage door to sunlight on the roof.',
      },
      {
        time: '2-5s',
        label: 'Confirmation',
        voiceover: 'A hot roof, leaky door, and open main door can replace the cool air as fast as you make it.',
        onScreen: 'Roof + leaks + door cycles',
        visual: 'Highlight the roof, door perimeter, and a single door-opening event.',
      },
      {
        time: '5-18s',
        label: 'Payoff 1',
        voiceover: 'First seal visible gaps. Then improve the garage door and ceiling or attic insulation.',
        onScreen: 'Step 0 · Seal and insulate',
        visual: 'Close-up sequence of weather seal, insulated door panel, and ceiling layer.',
      },
      {
        time: '18-34s',
        label: 'Payoff 2',
        voiceover: 'Now identify where heat can leave: a wall route, a compatible window vent, or a dry-climate open-air path.',
        onScreen: 'Where can heat leave?',
        visual: 'Three-way split: mini-split wall route, portable window panel, open-air evaporative path.',
      },
      {
        time: '34-45s',
        label: 'CTA',
        voiceover: 'Then calculate a starting load band. Use the garage planner before comparing products.',
        onScreen: 'Build the plan before the cart',
        visual: 'Planner inputs resolve into a load band and an installation checklist.',
      },
    ],
  },
  {
    id: 'portable-vs-split',
    number: '02',
    title: 'Portable AC or mini-split?',
    duration: '50 sec',
    outcome: 'Choose by frequency, permission, exhaust, and rating basis instead of category hype.',
    poster: 'installation-readiness.webp',
    posterAlt: 'Garage installation illustration comparing a mini-split wall route with a portable AC window exhaust path',
    posterWidth: 1536,
    posterHeight: 1024,
    hookFamily: 'Named constraint',
    beats: [
      {
        time: '0-2s',
        label: 'Hook',
        voiceover: 'Portable does not mean ventless.',
        onScreen: 'Portable ≠ ventless',
        visual: 'Portable cabinet appears, then the exhaust hose and exterior opening come into view.',
      },
      {
        time: '2-5s',
        label: 'Confirmation',
        voiceover: 'Every compressor air conditioner must reject heat outdoors.',
        onScreen: 'The heat still has to leave',
        visual: 'Follow the heat path from indoor coil to window panel and outdoor condenser.',
      },
      {
        time: '5-19s',
        label: 'Payoff 1',
        voiceover: 'For occasional use or a rental, a portable unit can make sense when the opening fits, seals, and stays secure.',
        onScreen: 'Occasional + permitted vent',
        visual: 'Measure a sliding window, fit the panel, keep the hose short and straight.',
      },
      {
        time: '19-38s',
        label: 'Payoff 2',
        voiceover: 'For daily use, stable comfort, and an allowed wall route, a right-sized inverter mini-split is usually the stronger system path.',
        onScreen: 'Daily use + wall route',
        visual: 'Show wall-mounted indoor unit, protected line set, condensate path, and outdoor support.',
      },
      {
        time: '38-50s',
        label: 'CTA',
        voiceover: 'Compare portable models on DOE or SACC capacity, then verify the exact electrical and installation manual.',
        onScreen: 'Compare the same rating basis',
        visual: 'ASHRAE and DOE values separate into clearly labeled fields, followed by manual and nameplate checks.',
      },
    ],
  },
  {
    id: 'three-jobs',
    number: '03',
    title: 'Heat, humidity, and fumes are three different jobs',
    duration: '45 sec',
    outcome: 'Separate comfort equipment from moisture control and source capture.',
    poster: 'air-quality-layers.webp',
    posterAlt: 'Garage cutaway separating cooling, moisture removal, outdoor exhaust, and dust collection',
    posterWidth: 1024,
    posterHeight: 1536,
    hookFamily: 'Stakes and safety',
    beats: [
      {
        time: '0-2s',
        label: 'Hook',
        voiceover: 'Cooling polluted air does not make it safe.',
        onScreen: 'Cooling ≠ clean air',
        visual: 'Indoor air circulates while a separate source-capture path remains highlighted.',
      },
      {
        time: '2-5s',
        label: 'Confirmation',
        voiceover: 'Most comfort systems recirculate the air already inside the garage.',
        onScreen: 'Recirculation is not exhaust',
        visual: 'Blue recirculation loop stays indoors; orange exhaust path exits outdoors.',
      },
      {
        time: '5-18s',
        label: 'Payoff 1',
        voiceover: 'Use air conditioning for heat, and measure relative humidity before deciding whether Dry mode is enough.',
        onScreen: 'Temperature + relative humidity',
        visual: 'Thermometer and hygrometer appear beside the cooling and drain paths.',
      },
      {
        time: '18-34s',
        label: 'Payoff 2',
        voiceover: 'Capture wood dust at the tool. Use suitable local exhaust for welding, spraying, fuel, and solvent vapor.',
        onScreen: 'Control contaminants at the source',
        visual: 'Tool-level dust hose and separate local-exhaust hood activate before the comfort system.',
      },
      {
        time: '34-45s',
        label: 'CTA',
        voiceover: 'If source control is unresolved, the honest product recommendation is no match yet.',
        onScreen: 'No source control? Stop the recommendation',
        visual: 'Product cards pause behind a clear stop-condition panel.',
      },
    ],
  },
  {
    id: 'winter-proof',
    number: '04',
    title: 'Operating range is not winter capacity',
    duration: '40 sec',
    outcome: 'Avoid relying on a nominal heat-pump claim for sole freeze protection.',
    poster: 'garage-climate-zones.webp',
    posterAlt: 'The same garage shown in hot-dry, hot-humid, and snowy cold-climate conditions',
    posterWidth: 2048,
    posterHeight: 768,
    hookFamily: 'Risk reversal',
    beats: [
      {
        time: '0-2s',
        label: 'Hook',
        voiceover: 'Below-zero operation does not prove enough heat on the coldest night.',
        onScreen: 'Operating ≠ delivering enough heat',
        visual: 'Outdoor temperature falls while nominal BTU remains visually unchanged.',
      },
      {
        time: '2-5s',
        label: 'Confirmation',
        voiceover: 'Nominal capacity is not the same as capacity retained at your winter design temperature.',
        onScreen: 'Ask for low-temperature capacity',
        visual: 'Nominal label transitions into a missing low-temperature performance table.',
      },
      {
        time: '5-20s',
        label: 'Payoff 1',
        voiceover: 'Calculate the garage heat loss and request model-specific capacity and efficiency at the local design condition.',
        onScreen: 'Heat loss + capacity + COP',
        visual: 'Garage envelope inputs feed a winter heat-loss calculation.',
      },
      {
        time: '20-32s',
        label: 'Payoff 2',
        voiceover: 'Plan snow clearance, defrost drainage, elevation, and verified backup protection.',
        onScreen: 'Defrost water is part of the system',
        visual: 'Outdoor unit on a raised support with a clear drain and snow zone.',
      },
      {
        time: '32-40s',
        label: 'CTA',
        voiceover: 'Use the cold-weather product as a shortlist, not a guarantee.',
        onScreen: 'Shortlist first · verify before relying',
        visual: 'Cold-weather candidate card appears beside a verification checklist.',
      },
    ],
  },
]
