import type { FC } from 'react'
import type { IBrand } from '../model/IBrand'
import '../styles/carousel-styles.css'

interface IBrandsCarouselItemProps {
  brand: IBrand
}

export const BrandsCarouselItem: FC<IBrandsCarouselItemProps> = ({ brand }) => {
  return (
    // Как идея - можно еще добавить ссылку на официальный сайт бренда
    <div className='item'>
      <img src={brand.imgSrc} alt={brand.name} />
    </div>
  )
}
