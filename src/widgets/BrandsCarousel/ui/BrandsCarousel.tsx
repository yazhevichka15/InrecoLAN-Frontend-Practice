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
    <div className='scroller' data-speed='fast' data-animated='true'>
      <div className='scroller__inner'>
        {brands.map((brand, index) => (
          <BrandsCarouselItem
            key={`${brand.id}-${index}`}
            brand={brand}
            ariaHidden={index >= brandsImages.length}
          />
        ))}
      </div>
    </div>
  )
}
