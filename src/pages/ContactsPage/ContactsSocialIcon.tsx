import { Link } from 'react-router-dom'

// Поправить тип и нейминг
interface IContactIconProps {
  socialLink: string
  iconSrc: string
  iconAlt: string
}

export function ContactsSocialIcon({ socialLink, iconSrc, iconAlt }: IContactIconProps) {
  return (
    <div className='w-11.75 h-9.25 bg-light-brown rounded-xs flex items-center justify-center'>
      <img src={iconSrc} alt={iconAlt} className='w-6.5 h-6.5' />
    </div>
  )
}
