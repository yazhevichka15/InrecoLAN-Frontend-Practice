import { Link } from 'react-router-dom'
import { ImageSlider } from 'shared/ui/ImageSlider'
import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <section className='h-[80vh] overflow-hidden'>
      <div className='h-full'>
        <ImageSlider />
      </div>

      <div className='relative h-full -mt-[80vh]'>
        <div className='flex justify-between items-end h-full p-12'>
          <div>
            <h1 className='text-6xl text-white'>
              Идеальный свет <br /> для вашего дома
            </h1>
            <p className='mt-4 max-w-sm text-base text-white'>
              Поможем подобрать люстру под ваш
              <br /> интерьер, чтобы в доме было светло,
              <br /> уютно и комфортно каждый день.
            </p>
          </div>

          <Link to='/catalog' className='flex items-center gap-4 text-white'>
            <span>Перейти в каталог</span>
            <img src='/assets/Arrow.webp' alt='Перейти в каталог' className='w-16' />
          </Link>
        </div>
      </div>
    </section>
  )
}
