import { useLanguage } from '../i18n/LanguageContext'
import { RailwayMap } from './RailwayMap'
import { Reveal } from './ui'

export function Railway() {
  const { t } = useLanguage()

  return (
    <section className="railway section" aria-labelledby="railway-title">
      <div className="container">
        <p className="eyebrow eyebrow--gold">{t.railway.eyebrow}</p>
        <h2 id="railway-title">{t.railway.title}</h2>
        <Reveal>
          <RailwayMap />
        </Reveal>
        <div className="railway-copy">
          <span>{t.railway.copyTitle.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</span>
          <p>{t.railway.copyText}</p>
        </div>
      </div>
    </section>
  )
}
