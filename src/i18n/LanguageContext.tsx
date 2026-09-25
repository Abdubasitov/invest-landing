import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { dict, locales, type Dict, type Locale } from './translations'

const STORAGE_KEY = 'jalalabad-invest-locale'

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ru'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ru' || saved === 'ky' || saved === 'en') return saved
  } catch {
    /* localStorage unavailable — fall through to default */
  }
  const nav = window.navigator.language?.toLowerCase() ?? ''
  if (nav.startsWith('ky')) return 'ky'
  if (nav.startsWith('en')) return 'en'
  return 'ru'
}

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale())

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = dict[locale].meta.title
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', dict[locale].meta.description)
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore persistence failures (private mode, disabled storage) */
    }
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale: setLocaleState, t: dict[locale] }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

export { locales }
export type { Locale }
