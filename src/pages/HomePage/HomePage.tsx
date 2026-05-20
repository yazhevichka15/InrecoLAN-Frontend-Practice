// Заглушка
import HeroSection from '@widgets/homePage/heroSection'
import AboutUsSection from '@widgets/homePage/aboutUsSection'
import CatalogSection from '@widgets/homePage/CatalogSection'
import ReviewsSection from '@widgets/homePage/ReviewsSection'
import VisitSection from '@widgets/homePage/VisitUsSection'
import MapSection from '@widgets/homePage/MapSection'

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
