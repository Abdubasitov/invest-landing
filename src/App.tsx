import { AiConsultant } from './components/AiConsultant'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InvestorSupport } from './components/InvestorSupport'
import { Opportunities } from './components/Opportunities'
import { Railway } from './components/Railway'
import { RegionGallery } from './components/RegionGallery'
import { RegionOverview } from './components/RegionOverview'
import { Sectors } from './components/Sectors'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RegionOverview />
        <Sectors />
        {/* InvestmentMap will be inserted here in the next product phase. */}
        <Opportunities />
        <Railway />
        <RegionGallery />
        <InvestorSupport />
      </main>
      <Footer />
      <AiConsultant />
    </>
  )
}
