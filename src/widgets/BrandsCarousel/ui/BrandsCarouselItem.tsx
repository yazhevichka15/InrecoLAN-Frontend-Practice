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
    // Как идея - можно еще добавить ссылку на официальный сайт бренда
    <div className='item'>
      <img src={brand.imgSrc} alt={brand.name} />
    </div>
  )
}
