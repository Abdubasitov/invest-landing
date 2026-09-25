import { useLanguage, locales } from '../i18n/LanguageContext'

export function Footer() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">ЖИ</span>
          <div><a href="#top">ЖАЛАЛАБАД ИНВЕСТ</a><p>{t.footer.tagline}</p></div>
        </div>
        <div>
          <h2>{t.footer.directionsTitle}</h2>
          <a href="#production">{t.nav.production}</a>
          <a href="#tourism">{t.nav.tourism}</a>
          <a href="#energy">{t.nav.energy}</a>
          <a href="#opportunities">{t.footer.projectsLink}</a>
        </div>
        <div><h2>{t.footer.contactsTitle}</h2><p>{t.footer.contactsText.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p></div>
        <div>
          <h2>{t.footer.languagesTitle}</h2>
          <div className="footer-languages">
            {locales.map((item) => (
              <button key={item.code} type="button" aria-current={locale === item.code ? 'true' : undefined} onClick={() => setLocale(item.code)}>{item.label}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom"><span>{t.footer.copyright}</span><a href="#top">{t.footer.toTop}</a></div>
    </footer>
  )
}
