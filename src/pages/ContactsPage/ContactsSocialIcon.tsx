import { Link } from 'react-router-dom'
import type { FC } from 'react'

interface IContactsSocialIcon {
  socialLink: string
  iconSrc: string
  iconAlt: string
}

export const ContactsSocialIcon: FC<IContactsSocialIcon> = ({ socialLink, iconSrc, iconAlt }) => {
  return (
    <Link
      to={socialLink}
      className='w-50px h-40px flex items-center justify-center bg-light-brown rounded-xs cursor-pointer'
    >
      <img src={iconSrc} alt={iconAlt} className='w-6.75 h-6.75' />
    </Link>
  )
}
