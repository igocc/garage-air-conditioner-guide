import { ArrowRight, CheckCircle, Warning } from '@phosphor-icons/react'
import { useState } from 'react'
import { asset } from '../lib/assets'
import { products, type ProductCategory } from '../productContent'

type Filter = 'All' | ProductCategory
const filters: Filter[] = ['All', 'Portable', 'Mini-split', 'Climate-specific']

export function ProductRecommendations() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? products : products.filter((product) => product.category === filter)

  return (
    <section className="products-section" id="products" aria-labelledby="products-title">
      <div className="shell">
        <div className="products-heading">
          <div>
            <p className="section-kicker">Real GARVEE product snapshot</p>
            <h2 id="products-title">Products that fit a constraint, not a fantasy</h2>
          </div>
          <div className="snapshot-note">
            <strong>Snapshot: Sep 21, 2026</strong>
            <p>Prices and specifications below were captured from official U.S. product pages. Confirm the live page and exact variant before purchase.</p>
          </div>
        </div>

        <div className="product-filters" aria-label="Filter product recommendations">
          {filters.map((item) => (
            <button
              aria-pressed={filter === item}
              key={item}
              onClick={() => setFilter(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {visible.map((product) => (
            <article className="product-card" id={`product-${product.id}`} key={product.id}>
              <div className="product-card__media">
                <span>{product.id}</span>
                <img
                  src={asset(product.image)}
                  alt={`${product.name}, official GARVEE product image`}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="product-card__body">
                <div className="product-card__topline">
                  <span>{product.badge}</span>
                  <strong>{product.price}</strong>
                </div>
                <h3>{product.name}</h3>
                <p className="product-sku">SKU {product.sku} · captured price</p>

                <dl className="product-specs">
                  <div><dt>Capacity</dt><dd>{product.capacity}</dd></div>
                  <div><dt>Power</dt><dd>{product.voltage}</dd></div>
                  <div><dt>Coverage</dt><dd>{product.coverage}</dd></div>
                  {product.efficiency ? <div><dt>Efficiency</dt><dd>{product.efficiency}</dd></div> : null}
                </dl>

                <div className="product-fit">
                  <CheckCircle size={19} weight="fill" aria-hidden="true" />
                  <p>{product.fit}</p>
                </div>
                <div className="product-watch">
                  <Warning size={19} weight="fill" aria-hidden="true" />
                  <p>{product.watch}</p>
                </div>

                <a className="button product-cta" href={product.href} target="_blank" rel="noreferrer">
                  Check live product page
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="no-fit-banner">
          <strong>A valid answer can be “no compatible product.”</strong>
          <p>No exterior heat-rejection path, hazardous fumes, uncontrolled fine dust, or sole-source cold-weather protection without rated data should stop the product recommendation.</p>
        </div>
      </div>
    </section>
  )
}
