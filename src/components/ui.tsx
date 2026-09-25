import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d={diagonal ? 'M5 15 15 5M7 5h8v8' : 'M3 10h14M12 5l5 5-5 5'} />
    </svg>
  )
}

export function SectionIntro({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
    </div>
  )
}

export function ButtonLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <a className={`button${secondary ? ' button--secondary' : ''}`} href={href}>{children}<ArrowIcon /></a>
}

export function Badge({ children, tone }: { children: ReactNode; tone?: 'nature' | 'event' | 'civic' }) {
  return <span className={`badge${tone ? ` badge--${tone}` : ''}`}>{children}</span>
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }: { children: ReactNode; delay?: number; as?: ElementType; className?: string; [key: string]: unknown }) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`} style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }} {...rest}>
      {children}
    </Tag>
  )
}
