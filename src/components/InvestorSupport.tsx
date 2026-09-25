import { useLanguage } from '../i18n/LanguageContext'
import { ButtonLink, Reveal, SectionIntro } from './ui'

export function InvestorSupport() {
	const { t } = useLanguage()

	return (
		<>
			<section className='support section' id='roadmap'>
				<div className='container'>
					<SectionIntro
						eyebrow={t.roadmap.eyebrow}
						title={t.roadmap.title}
						lead={t.roadmap.lead}
					/>
					<ol className='timeline'>
						{t.roadmap.steps.map((step, index) => (
							<Reveal as='li' delay={index * 60} key={step.title}>
								<i>{String(index + 1).padStart(2, '0')}</i>
								<p>{step.title}</p>
								<small>{step.text}</small>
							</Reveal>
						))}
					</ol>
				</div>
			</section>
			<section className='final-cta' id='contact'>
				<img
					src='/images/sary-chelek-road.jpg'
					alt={t.gallery.images[3].title}
					loading='lazy'
				/>
				<div className='final-cta-overlay' />
				<div className='container final-cta-content'>
					<p className='eyebrow eyebrow--light'>{t.finalCta.eyebrow}</p>
					<h2>{t.finalCta.title}</h2>
					<p>{t.finalCta.text}</p>
					<div>
						<ButtonLink href='#footer'>{t.finalCta.primary}</ButtonLink>
						<ButtonLink href='#opportunities' secondary>
							{t.finalCta.secondary}
						</ButtonLink>
					</div>
				</div>
			</section>
		</>
	)
}
