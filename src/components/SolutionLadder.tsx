import { ArrowRight, Check, Warning } from '@phosphor-icons/react'
import { sidePaths, upgradeLadder } from '../content'

export function SolutionLadder() {
  return (
    <section className="ladder-section" id="paths" aria-labelledby="ladder-title">
      <div className="shell">
        <div className="ladder-heading">
          <div>
            <p className="section-kicker">The full solution spectrum</p>
            <h2 id="ladder-title">The decision is a ladder, not a two-product fight</h2>
          </div>
          <p className="section-lede">Move upward only when the use frequency, climate, comfort target, permission, and installation path justify the extra permanence.</p>
        </div>

        <div className="upgrade-ladder">
          {upgradeLadder.map((item, index) => (
            <article key={item.title}>
              <div className="upgrade-ladder__topline">
                <span>{item.step}</span>
                {index < upgradeLadder.length - 1 ? <ArrowRight size={20} aria-hidden="true" /> : null}
              </div>
              <h3>{item.title}</h3>
              <div className="ladder-fit">
                <Check size={18} weight="bold" aria-hidden="true" />
                <p>{item.fit}</p>
              </div>
              <div className="ladder-limit">
                <Warning size={18} weight="fill" aria-hidden="true" />
                <p>{item.limit}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="side-paths-heading">
          <span>Side paths the main ladder misses</span>
          <h3>Sometimes the right answer is a different job entirely</h3>
        </div>
        <div className="side-paths">
          {sidePaths.map((path) => (
            <article key={path.title}>
              <span>{path.role}</span>
              <h4>{path.title}</h4>
              <p>{path.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
