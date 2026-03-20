import { useMemo } from 'react'

import { BrandsCarouselItem } from './BrandsCarouselItem'
import { getBrands } from '../api/getBrands'
import '../styles/carousel-styles.css'

export const BrandsCarousel = () => {
  const brandsImages = getBrands()

  const brands = useMemo(() => {
    return [...brandsImages, ...brandsImages]
  }, [brandsImages])

  return (
    <div className='carousel'>
      <div className='carousel-track'>
        {brands.map((brand, index) => (
          <BrandsCarouselItem key={`${brand.id}-${index}`} brand={brand} />
        ))}
      </div>
    </div>
  )
}
