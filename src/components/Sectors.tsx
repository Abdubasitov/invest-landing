import { useLanguage } from '../i18n/LanguageContext'
import { ArrowIcon, Reveal, SectionIntro } from './ui'
import { IconBolt, IconCompass, IconFactory, IconMountain } from './icons'

const sectorMeta = [
  { icon: IconFactory, anchor: 'production', image: '/images/arslanbob.jpg' },
  { icon: IconMountain, anchor: 'tourism', image: '/images/sary-chelek.jpg' },
  { icon: IconBolt, anchor: 'energy', image: '/images/toktogul.jpg' },
] as const

export function Sectors() {
  const { t } = useLanguage()

  return (
    <section className="sectors section" id="sectors">
      <div className="container">
        <SectionIntro eyebrow={t.sectorsCommon.eyebrow} title={t.sectorsCommon.title} lead={t.sectorsCommon.lead} />
        <div className="sector-list">
          {t.sectors.map((sector, index) => {
            const meta = sectorMeta[index]
            const Icon = meta.icon
            return (
              <Reveal as="article" className={`sector${index % 2 ? ' sector--reverse' : ''}`} id={meta.anchor} key={meta.anchor}>
                <div className="sector-image-wrap"><img src={meta.image} alt={sector.title} loading="lazy" /></div>
                <div className="sector-copy">
                  <span className="sector-tag"><i><Icon /></i><span>{t.sectorsCommon.directionLabel} {String(index + 1).padStart(2, '0')}</span></span>
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                  <a href="#opportunities">{t.sectorsCommon.projectsLink} <ArrowIcon /></a>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="map-slot">
          <div className="map-slot-text">
            <p className="eyebrow">{t.sectorsCommon.mapEyebrow}</p>
            <h3>{t.sectorsCommon.mapTitle}</h3>
            <p>{t.sectorsCommon.mapText}</p>
          </div>
          <i aria-hidden="true"><IconCompass /></i>
        </Reveal>
      </div>
    </section>
  )
}
