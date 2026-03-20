import '../styles/carousel-styles.css'

export const BrandsCarouselItem = ({ brand, ariaHidden = false }) => {
  return (
    <div className='item' aria-hidden={ariaHidden}>
      <img src={brand.imgSrc} alt={brand.name} draggable='false' />
    </div>
  )
}
