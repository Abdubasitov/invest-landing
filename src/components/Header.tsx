import { useEffect, useState } from 'react'
import { useLanguage, locales } from '../i18n/LanguageContext'

export function Header() {
  const { locale, setLocale, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const navItems = [
    [t.nav.production, '#production'],
    [t.nav.tourism, '#tourism'],
    [t.nav.energy, '#energy'],
    [t.nav.roadmap, '#roadmap'],
    [t.nav.contact, '#footer'],
  ] as const

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const LanguageSwitch = ({ className }: { className: string }) => (
    <div className={className} aria-label="Language / Тил / Язык" role="group">
      {locales.map((item) => (
        <button
          key={item.code}
          type="button"
          aria-current={locale === item.code ? 'true' : undefined}
          onClick={() => { setLocale(item.code); setOpen(false) }}
        >
          {item.label}
        </button>
      ))}
    </div>
  )

  return (
    <header className={`header${scrolled || open ? ' header--solid' : ''}`}>
      <a className="brand" href="#top" aria-label="Жалалабад Инвест" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">ЖИ</span>
        <span className="brand-text"><span>ЖАЛАЛАБАД ИНВЕСТ</span></span>
      </a>
      <nav className={`nav${open ? ' nav--open' : ''}`} aria-label="Основная навигация">
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <LanguageSwitch className="mobile-languages" />
      </nav>
      <div className="header-actions">
        <LanguageSwitch className="languages" />
        <a className="header-cta" href="#footer">{t.nav.cta}</a>
        <button className="menu-button" type="button" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      {open && <button className="nav-backdrop" type="button" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />}
    </header>
  )
}
