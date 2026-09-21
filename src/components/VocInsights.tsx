import { ArrowRight, Info, WarningCircle } from '@phosphor-icons/react'
import {
  garageActivityClusters,
  miniSplitBarriers,
  portableEducationPath,
  vocThemeSignals,
} from '../content'

export function VocInsights() {
  return (
    <section className="voc-section" id="voc" aria-labelledby="voc-title">
      <div className="shell">
        <div className="voc-heading">
          <div>
            <p className="section-kicker">What the attached VOC deck adds</p>
            <h2 id="voc-title">The first product search is rarely the final decision</h2>
          </div>
          <div className="voc-boundary">
            <Info size={24} weight="duotone" aria-hidden="true" />
            <p><strong>Deck-reported qualitative research.</strong> The deck describes 35 Reddit discussions: 34 private-garage threads and one parking-structure thread handled separately. Its raw URL and coding appendix was not supplied, so the rates below are not independently reproduced.</p>
          </div>
        </div>

        <div className="voc-signal-grid">
          {vocThemeSignals.map((signal) => (
            <article key={signal.label}>
              <div>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </div>
              <div className="voc-meter" aria-label={`${signal.label}, deck reports approximately ${signal.value}`}>
                <span style={{ width: `${signal.width}%` }} />
              </div>
              <p>{signal.meaning}</p>
            </article>
          ))}
        </div>

        <div className="education-path">
          <div className="education-path__heading">
            <span>Recurring education path</span>
            <h3>From “Can I buy a portable?” to a building-aware answer</h3>
            <p>This sequence is a synthesis of the deck's qualitative pattern, not a claim that every shopper follows the same funnel.</p>
          </div>
          <ol>
            {portableEducationPath.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
                {index < portableEducationPath.length - 1 ? <ArrowRight size={16} aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </div>

        <div className="voc-detail-grid">
          <div>
            <div className="voc-subheading">
              <span>What the garage becomes</span>
              <h3>Four activity clusters, four definitions of success</h3>
            </div>
            <div className="activity-clusters">
              {garageActivityClusters.map(([title, detail]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="voc-subheading">
              <span>Why the stronger system still loses</span>
              <h3>Four barriers that capacity cannot solve</h3>
            </div>
            <div className="barrier-list">
              {miniSplitBarriers.map((barrier) => (
                <div key={barrier.title}>
                  <WarningCircle size={21} weight="duotone" aria-hidden="true" />
                  <div>
                    <strong>{barrier.title}</strong>
                    <p>{barrier.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
