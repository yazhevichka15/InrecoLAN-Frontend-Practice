import { ContactsSocialIcon } from './ContactsSocialIcon'

export function ContactsSocials() {
  return (
    <div className='flex gap-20px mb-30px'>
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/vk-white.svg'
        iconAlt=''
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/telegram-white.svg'
        iconAlt=''
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/whatsapp-white.svg'
        iconAlt=''
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/max-white.svg'
        iconAlt=''
      />
    </div>
  )
}
