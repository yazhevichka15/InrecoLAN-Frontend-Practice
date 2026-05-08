import type { FC } from 'react'
import { Map } from '@shared/ui/Map'

export const MapSection: FC = () => {
  return (
    <section className='py-16'>
      <div className='px-8'>
        <div className='flex justify-between mb-10'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl text-[#3A2E2A]'>Адрес</h3>
            <div className='w-20 h-px bg-[#8C6F63]' />
            <p className='text-sm text-gray-600'>г. Владимир, ул. Студёная гора, д. 34</p>
          </div>

          <div className='flex flex-col gap-2 items-center'>
            <h3 className='text-xl text-[#3A2E2A]'>Телефон</h3>
            <div className='w-20 h-px bg-[#8C6F63]' />
            <p className='text-sm text-gray-600'>8(4922)44-93-30</p>
          </div>

          <div className='flex flex-col gap-2 items-end'>
            <h3 className='text-xl text-[#3A2E2A]'>Почта</h3>
            <div className='w-20 h-px bg-[#8C6F63]' />
            <p className='text-sm text-gray-600'>imperiya_lustr@mail.ru</p>
          </div>
        </div>

        <div className='border-4 border-blue-500'>
          <Map height={400} />
        </div>
      </div>
    </section>
  )
}
