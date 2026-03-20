import '../styles/carousel-styles.css'

export const BrandsCarouselItem = ({ brand }) => {
  return (
    <div className='item'>
      <img src={brand.imgSrc} alt={brand.name} draggable='false' />
    </div>
  )
}
