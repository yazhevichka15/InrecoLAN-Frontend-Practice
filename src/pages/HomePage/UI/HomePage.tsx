// Заглушка
import { HeroSection } from '@pages/HomePage/Widgets/HeroSection'
import { AboutUsSection } from '@pages/HomePage/Widgets/AboutUsSection'
import { CatalogSection } from '@pages/HomePage/Widgets/CatalogSection'
import { ReviewsSection } from '@pages/HomePage/Widgets/ReviewsSection'
import { VisitSection } from '@pages/HomePage/Widgets/VisitUsSection'
import { MapSection } from '@pages/HomePage/Widgets/MapSection'

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