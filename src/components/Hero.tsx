import { useLanguage } from '../i18n/LanguageContext'
import { ArrowIcon } from './ui'
import { IconBolt, IconFactory, IconMountain } from './icons'

const sectorMeta = [
  { icon: IconFactory, anchor: 'production' },
  { icon: IconMountain, anchor: 'tourism' },
  { icon: IconBolt, anchor: 'energy' },
] as const

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-backdrop" src="/images/sary-chelek.jpg" alt={t.gallery.images[0].title} fetchPriority="high" />
      <div className="hero-backdrop-overlay" aria-hidden="true" />
      <div className="hero-content container">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--light">{t.hero.eyebrow}</p>
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="hero-lead">{t.hero.lead}</p>
        </div>
        <div className="hero-sectors" aria-label={t.sectorsCommon.title}>
          {t.sectors.map((sector, index) => {
            const meta = sectorMeta[index]
            const Icon = meta.icon
            return (
              <a className="hero-sector-card" href={`#${meta.anchor}`} key={meta.anchor}>
                <i><Icon /></i>
                <span>{sector.title}</span>
                <ArrowIcon diagonal />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
