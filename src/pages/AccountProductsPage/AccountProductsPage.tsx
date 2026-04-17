import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@shared/ui/Button'

export function AccountProductsPage() {
  let navigate = useNavigate()
  return (
    <div className='col-span-10 pt-50px pb-100px'>
      <h2 className='mb-30px'>Управление товарами</h2>
      <div className='mt-30px flex justify-between gap-base'>
        <div className='flex-3 flex flex-col gap-30px'>
          <h3 className='text-light-brown'>Категории товаров</h3>
          <ul className='flex flex-col gap-10px'>
            <li>
              <Link to='/account/products/category/chandeliers'>Люстры</Link>
            </li>
            <li>
              <Link to='/account/products/category/lamps'>Светильники</Link>
            </li>
            <li>
              <Link to='/account/products/category/spotlights'>Точечные светильники</Link>
            </li>
            <li>
              <Link to='/account/products/category/sconces'>Бра</Link>
            </li>
            <li>
              <Link to='/account/products/category/backlights'>Подсветки</Link>
            </li>
            <li>
              <Link to='/account/products/category/table-lamps'>Настольные лампы</Link>
            </li>
            <li>
              <Link to='/account/products/category/floor-lamps'>Торшеры</Link>
            </li>
            <li>
              <Link to='/account/products/category/track-systems'>Трековые системы</Link>
            </li>
            <li>
              <Link to='/account/products/category/night-lamps'>Ночники</Link>
            </li>
            <li>
              <Link to='/account/products/category/outdoor-lamps'>Уличные светильники</Link>
            </li>
            <li>
              <Link to='/account/products/category/accessories'>Комплектующие</Link>
            </li>
          </ul>
        </div>
        <div className='flex-7 flex flex-col gap-50px'>
          <div className='flex flex-col gap-30px'>
            <h3 className='text-light-brown'>Найти товар</h3>
            <div className='flex flex-col gap-10px'>
              <input type='text' placeholder='Поиск' className='h-14.5' />
              <Button title='Найти' theme='dark' type='button' className='h-14.5' />
            </div>
          </div>
          <div className='flex flex-col gap-30px'>
            <h3 className='text-light-brown'>Добавить товар</h3>

            <Button
              title='Добавить товар'
              theme='dark'
              type='button'
              className='h-14.5'
              onClick={() => navigate('new')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
