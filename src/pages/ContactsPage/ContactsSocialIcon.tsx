import { Link } from 'react-router-dom'

interface IContactsSocialIcon {
  socialLink: string
  iconSrc: string
  iconAlt: string
}

export function ContactsSocialIcon({ socialLink, iconSrc, iconAlt }: IContactsSocialIcon) {
  return (
    <Link
      to={socialLink}
      className='w-12 h-10 flex items-center justify-center bg-light-brown rounded-xs cursor-pointer'
    >
      <img src={iconSrc} alt={iconAlt} className='w-6.75 h-6.75' />
    </Link>
  )
}
