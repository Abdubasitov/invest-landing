import { useLanguage } from '../i18n/LanguageContext'
import { ArrowIcon, Badge, Reveal, SectionIntro } from './ui'

const tones = ['civic', 'civic', 'civic', 'civic', 'nature', 'nature', 'nature', 'nature', 'event', 'event', 'event', 'event'] as const
const sectorIndexOf = (i: number) => (i < 4 ? 0 : i < 8 ? 1 : 2)

export function Opportunities() {
  const { t } = useLanguage()

  return (
    <section className="opportunities section" id="opportunities">
      <div className="container">
        <SectionIntro eyebrow={t.opportunities.eyebrow} title={t.opportunities.title} lead={t.opportunities.lead} />
        <div className="opportunity-list">
          {t.opportunities.items.map((item, index) => (
            <Reveal delay={(index % 3) * 60} key={item.title}>
              <a className="opportunity" href="#footer">
                <span className="opportunity-top"><span className="opportunity-index">{String(index + 1).padStart(2, '0')}</span><ArrowIcon diagonal /></span>
                <h3>{item.title}</h3>
                <span className="opportunity-foot"><Badge tone={tones[index]}>{t.sectors[sectorIndexOf(index)].title}</Badge></span>
              </a>
            </Reveal>
          ))}
        </div>
        <a className="text-link" href="#footer">{t.opportunities.linkText} <ArrowIcon /></a>
      </div>
    </section>
  )
}
