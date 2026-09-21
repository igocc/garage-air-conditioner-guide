import {
  ArrowRight,
  CheckCircle,
  Drop,
  Lightning,
  Package,
  ShieldCheck,
  Toolbox,
  Wrench,
} from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

type KitId = 'mini-split' | 'portable' | 'window'
type ItemStatus = 'Included in example box' | 'Site-required' | 'Conditional' | 'Recommended upgrade' | 'Third-party material'

type KitItem = {
  name: string
  status: ItemStatus
  detail: string
  icon: typeof Package
}

const kits: Record<KitId, { title: string; intro: string; includedNote: string; items: KitItem[] }> = {
  'mini-split': {
    title: 'Mini-split installation system',
    intro: 'A permanent comfort system needs a refrigerant route, electrical scope, condensate strategy, weatherproof support, commissioning, and future service access.',
    includedNote: 'One current 12,000 BTU GARVEE example lists a 13 ft. copper connection pipe, power wire, communication wire, drain hose, remote, manual, and installation accessories. Other SKUs can differ.',
    items: [
      { name: 'Exact-SKU line set and control wiring', status: 'Included in example box', detail: 'Verify the lengths, fittings, wire type, and whether any extension is allowed before choosing indoor and outdoor locations.', icon: Package },
      { name: 'Outdoor support and vibration control', status: 'Site-required', detail: 'Use a stable pad, stand, or approved wall support with the clearances required by the exact outdoor unit.', icon: ShieldCheck },
      { name: 'Dedicated circuit and disconnect', status: 'Third-party material', detail: 'A qualified professional confirms voltage, conductor, breaker, MCA, MOCP, disconnect, permits, and local requirements.', icon: Lightning },
      { name: 'Gravity drain or condensate pump', status: 'Conditional', detail: 'Gravity is preferred when a continuous downward route exists. A pump adds service and failure points when gravity is not possible.', icon: Drop },
      { name: 'Line-hide and penetration sealing', status: 'Recommended upgrade', detail: 'Protect insulation and wiring from weather and damage. Seal the wall assembly without trapping water.', icon: Wrench },
      { name: 'Matched refrigerant system and labels', status: 'Site-required', detail: 'Confirm the indoor and outdoor units, refrigerant type, charge, A2L instructions when applicable, approved tools, and locally adopted requirements as one system.', icon: ShieldCheck },
      { name: 'Vacuum, leak test, commissioning record', status: 'Site-required', detail: 'Non-quick-connect systems generally require model-specific refrigerant work, verification, and a documented startup.', icon: Toolbox },
    ],
  },
  portable: {
    title: 'Portable AC operating system',
    intro: 'The machine can move, but the heat path cannot be improvised. Hose routing, opening fit, air leakage, condensate, security, and combustion safety determine the result.',
    includedNote: 'A current GARVEE portable example lists a window kit, drain hose, and remote. The listing also shows exhaust-hose connection parts. Exact contents and dimensions remain SKU-specific.',
    items: [
      { name: 'Exhaust hose and window kit', status: 'Included in example box', detail: 'Measure the actual opening and compare every panel and hose dimension before purchase.', icon: Package },
      { name: 'Rigid sealed opening', status: 'Site-required', detail: 'Use a stable insert that resists weather and hot-air leakage without interfering with the garage door or emergency access.', icon: ShieldCheck },
      { name: 'Hose insulation and short routing', status: 'Recommended upgrade', detail: 'Keep the hose short and straight. Insulation can reduce radiant heat returning to the room when permitted by the manual.', icon: Wrench },
      { name: 'Continuous drain route', status: 'Conditional', detail: 'High humidity, Dry mode, or heating operation may require an approved hose and a safe discharge point.', icon: Drop },
      { name: 'Combustion and makeup-air review', status: 'Conditional', detail: 'Single-hose exhaust can depressurize the room. Resolve risk around natural-draft gas appliances before use.', icon: Toolbox },
      { name: 'Dedicated receptacle check', status: 'Site-required', detail: 'Avoid extension cords unless the manufacturer explicitly permits them. Confirm circuit capacity and plug access.', icon: Lightning },
    ],
  },
  window: {
    title: 'Window AC installation system',
    intro: 'A window unit succeeds only when the opening, structure, support, weather seal, outdoor airflow, electrical supply, security, and drainage all agree with the manual.',
    includedNote: 'A current GARVEE window example includes a window installation kit. The page specifies an opening about 19 in. high and 28-41 in. wide for that SKU. Those dimensions do not generalize to every model.',
    items: [
      { name: 'Model-specific mounting kit', status: 'Included in example box', detail: 'Inventory every rail, bracket, panel, and fastener before lifting the unit into place.', icon: Package },
      { name: 'Structural support', status: 'Site-required', detail: 'The window frame and any support must carry the equipment without relying on foam panels or sash friction alone.', icon: ShieldCheck },
      { name: 'Weather seal and rigid infill', status: 'Third-party material', detail: 'Block rain and air leakage while preserving the manufacturer-required drainage and ventilation paths.', icon: Wrench },
      { name: 'Security restraint', status: 'Recommended upgrade', detail: 'Prevent the sash from opening and protect accessible fasteners without creating an emergency-egress conflict.', icon: ShieldCheck },
      { name: 'Outdoor clearance and drainage slope', status: 'Site-required', detail: 'Do not bury the condenser side in a wall opening or enclosure. Follow the exact outward-slope instructions.', icon: Drop },
      { name: 'Correct voltage and circuit', status: 'Site-required', detail: 'Large window units can require 208/230 V. Confirm plug, receptacle, breaker, and circuit before delivery.', icon: Lightning },
    ],
  },
}

const supportProducts = [
  ['Dehumidifiers', 'Persistent humidity may need independent control. Verify minimum operating temperature, auto-defrost, heat added to the room, drainage, and freeze risk.', 'https://www.garvee.com/collections/dehumidifiers?filter.v.availability=true'],
  ['Industrial fans', 'Use air movement for occupied comfort or drying, not as a substitute for hazardous-fume control.', 'https://www.garvee.com/collections/industrial-fans?filter.v.availability=true'],
  ['Exhaust blowers', 'General exhaust products exist, but the exact unit must be suitable for the contaminant and installation.', 'https://www.garvee.com/collections/fans?filter.v.availability=true'],
  ['Evaporative coolers', 'Only for hot-dry spaces that stay open to outdoor air and can tolerate added moisture.', 'https://www.garvee.com/collections/evaporative-coolers?filter.v.availability=true'],
] as const

export function CompleteKit() {
  const [active, setActive] = useState<KitId>('mini-split')
  const reduceMotion = useReducedMotion()
  const kit = kits[active]

  return (
    <section className="kit-section" id="kit" aria-labelledby="kit-title">
      <div className="shell">
        <div className="kit-heading">
          <h2 id="kit-title">The box is not the system</h2>
          <p className="section-lede">Build the complete path for the equipment you choose. Status labels distinguish verified in-box parts from site work, optional upgrades, and installer-supplied materials.</p>
        </div>

        <div className="kit-tabs" aria-label="Choose an equipment system">
          {(Object.keys(kits) as KitId[]).map((id) => (
            <button aria-pressed={active === id} key={id} onClick={() => setActive(id)} type="button">
              {id === 'mini-split' ? 'Mini-split' : id === 'portable' ? 'Portable AC' : 'Window AC'}
            </button>
          ))}
        </div>

        <motion.div
          className="kit-workspace"
          key={active}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="kit-summary">
            <Package size={38} weight="duotone" aria-hidden="true" />
            <h3>{kit.title}</h3>
            <p>{kit.intro}</p>
            <div>
              <strong>Verified example, not a universal box list</strong>
              <p>{kit.includedNote}</p>
            </div>
          </div>

          <div className="kit-items">
            {kit.items.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.name}>
                  <Icon size={24} weight="duotone" aria-hidden="true" />
                  <div>
                    <span data-status={item.status}>{item.status}</span>
                    <h4>{item.name}</h4>
                    <p>{item.detail}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </motion.div>

        <div className="support-products">
          <div>
            <h3>Related GARVEE environment products</h3>
            <p>These are current category links, not automatic add-ons. Select them only when the measured problem requires a separate job.</p>
          </div>
          <div className="support-product-links">
            {supportProducts.map(([name, detail, href]) => (
              <a href={href} key={name} target="_blank" rel="noreferrer">
                <CheckCircle size={19} weight="fill" aria-hidden="true" />
                <span><strong>{name}</strong><small>{detail}</small></span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
