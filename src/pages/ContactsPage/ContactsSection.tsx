import { MapPin, CalendarDays } from 'lucide-react'
import type { FC } from 'react'

import { cn } from '@shared/utils/cn'

interface IContactSection {
  sectionHeader: string
  details: string
  description: string
  sectionTheme?: 'light' | 'dark'
  hasMapIcon?: boolean
  hasCalendarIcon?: boolean
}

export const ContactsSection: FC<IContactSection> = ({
  sectionHeader,
  details,
  description,
  sectionTheme = 'light',
  hasMapIcon = false,
  hasCalendarIcon = false,
}) => {
  const sectionClass = cn('w-full p-40px flex flex-col gap-20px rounded-xs', {
    'bg-beige': sectionTheme === 'light',
    'border border-solid border-dark-brown': sectionTheme === 'dark',
  })

  return (
    <section className={sectionClass}>
      <h3 className='normal-case'>{sectionHeader}</h3>
      <div className='flex items-center gap-10px'>
        {hasMapIcon && <MapPin size={14} />}
        {hasCalendarIcon && <CalendarDays size={14} />}
        <p>{details}</p>
      </div>
      <p className='text-light-brown'>{description}</p>
    </section>
  )
}
