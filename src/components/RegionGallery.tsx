import { useLanguage } from '../i18n/LanguageContext'
import { imageSources } from '../data/imageSources'
import { ArrowIcon, Reveal, SectionIntro } from './ui'

export function RegionGallery() {
  const { t } = useLanguage()

  return (
    <section className="gallery section" aria-labelledby="gallery-title">
      <div className="container">
        <SectionIntro eyebrow={t.gallery.eyebrow} title={t.gallery.title} lead={t.gallery.lead} />
        <h2 className="sr-only" id="gallery-title">{t.gallery.title}</h2>
        <div className="gallery-grid">
          {imageSources.map((item, index) => {
            const label = t.gallery.images[index]
            return (
              <Reveal as="figure" className={`gallery-item gallery-item--${index + 1}`} delay={index * 60} key={item.image}>
                <img src={item.image} alt={label.title} loading="lazy" />
                <figcaption>
                  <span>{label.title}</span>
                  <a href={item.sourceUrl} target="_blank" rel="noreferrer" aria-label={`${t.gallery.sourceLabel}: ${label.title}`}>{item.author} · {item.license}<ArrowIcon diagonal /></a>
                </figcaption>
              </Reveal>
            )
          })}
        </div>
        <p className="gallery-note">{t.gallery.note}</p>
      </div>
    </section>
  )
}
