import { useLanguage } from '../i18n/LanguageContext'
import { Reveal, SectionIntro } from './ui'
import { IconArea, IconBolt, IconBuilding, IconLand, IconMapPin, IconMountain, IconRoute, IconUsers } from './icons'

const figureIcons = [IconArea, IconUsers, IconBuilding, IconMapPin] as const
const advantageIcons = [IconBolt, IconRoute, IconLand, IconMountain] as const

export function RegionOverview() {
  const { t } = useLanguage()

  return (
    <>
      <section className="stats" aria-labelledby="stats-title">
        <div className="container">
          <h2 className="sr-only" id="stats-title">{t.stats.figures.map((f) => f.label).join(', ')}</h2>
          <Reveal className="stats-card">
            <div className="stats-grid">
              {t.stats.figures.map((figure, index) => {
                const Icon = figureIcons[index]
                return (
                  <article className="stat" key={figure.label}>
                    <div className="stat-row"><i><Icon /></i><strong>{figure.value}</strong></div>
                    <span>{figure.label}</span>
                  </article>
                )
              })}
            </div>
            <p className="stats-note">{t.stats.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="statement section">
        <div className="container">
          <Reveal className="statement-grid">
            <p className="eyebrow">{t.statement.eyebrow}</p>
            <p className="statement-text">{t.statement.text}</p>
          </Reveal>
        </div>
      </section>

      <section className="advantages section">
        <div className="container">
          <SectionIntro eyebrow={t.advantages.eyebrow} title={t.advantages.title} />
          <div className="advantages-grid">
            {t.advantages.items.map((item, index) => {
              const Icon = advantageIcons[index]
              return (
                <article className="advantage" key={item.title}>
                  <i><Icon /></i>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
