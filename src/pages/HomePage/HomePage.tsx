// Заглушка
import Header from '../../widgets/header'
import HeroSection from '@widgets/homePage/HeroSection'
import AboutUsSection from '@widgets/homePage/AboutUsSection'
import CatalogSection from '@widgets/homePage/CatalogSection'
import ReviewsSection from '@widgets/homePage/ReviewsSection'
import VisitSection from '@widgets/homePage/VisitUsSection'

export const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUsSection />
      <CatalogSection />
      <ReviewsSection />
      <VisitSection />
    </>
  )
}
