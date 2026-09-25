import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { IconCompass } from './icons'

export function AiConsultant() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [asked, setAsked] = useState<string | null>(null)

  return (
    <div className="ai-consultant">
      {open && (
        <div className="ai-panel" role="dialog" aria-label={t.ai.title}>
          <div className="ai-panel-head">
            <div><strong>{t.ai.title}</strong><span>{t.ai.subtitle}</span></div>
            <button type="button" aria-label={t.ai.close} onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="ai-panel-body">
            {!asked ? (
              <>
                <p>{t.ai.intro}</p>
                <ul className="ai-questions">
                  {t.ai.questions.map((q) => (
                    <li key={q}><button type="button" onClick={() => setAsked(q)}>{q}</button></li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="ai-answer">
                <p className="ai-answer-q">{asked}</p>
                <p className="ai-answer-a">{t.ai.answer}</p>
                <button type="button" className="ai-answer-back" onClick={() => setAsked(null)}>{t.ai.back}</button>
              </div>
            )}
          </div>
          <a className="ai-panel-cta" href="#footer" onClick={() => setOpen(false)}>{t.ai.cta}</a>
        </div>
      )}
      <button type="button" className="ai-launcher" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <IconCompass />
        <span>{t.ai.launcher}</span>
      </button>
    </div>
  )
}
