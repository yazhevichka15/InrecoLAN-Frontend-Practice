import type { FC } from 'react'
import '../styles/carousel-styles.css'

interface IBrandsCarouselItemProps {
  brand: {
    name: string
    imgSrc: string
  }
}

export const BrandsCarouselItem: FC<IBrandsCarouselItemProps> = ({ brand }) => {
  return (
    <div className='item'>
      <img src={brand.imgSrc} alt={brand.name} />
    </div>
  )
}
