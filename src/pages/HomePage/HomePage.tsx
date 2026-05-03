// Заглушка
import HeroSection from '@widgets/HomePage/heroSection'
import AboutUsSection from '@widgets/HomePage/aboutUsSection'
import CatalogSection from '@widgets/HomePage/CatalogSection'
import ReviewsSection from '@widgets/HomePage/ReviewsSection'
import VisitSection from '@widgets/HomePage/VisitUsSection'
import MapSection from '@widgets/HomePage/MapSection'

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <CatalogSection />
      <ReviewsSection />
      <VisitSection />
      <MapSection />
    </>
  )
}
