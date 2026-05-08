import { HeroSection } from './HeroSection'
import { AboutUsSection } from './AboutUsSection'
import { CatalogSection } from './CatalogSection'
import { ReviewsSection } from './ReviewsSection'
import { VisitUsSection } from './VisitUsSection'
import { MapSection } from './MapSection'

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <CatalogSection />
      <ReviewsSection />
      <VisitUsSection />
      <MapSection />
    </>
  )
}
