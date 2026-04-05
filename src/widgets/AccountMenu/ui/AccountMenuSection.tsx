import type { FC } from 'react'
import { Link } from 'react-router-dom'

import type { IAccountMenuSection } from '../model/IAccountMenuSection'

interface IAccountMenuSectionProps {
  section: IAccountMenuSection
}

export const AccountMenuSection: FC<IAccountMenuSectionProps> = ({ section }) => {
  return (
    <section className='flex flex-col gap-10px'>
      <h3 className='mb-20px normal-case text-light-brown'>{section.title}</h3>

      {section.items.map((item) => (
        <Link key={item.id} to={item.to}>
          {item.title}
        </Link>
      ))}
    </section>
  )
}
