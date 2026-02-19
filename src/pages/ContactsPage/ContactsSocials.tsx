// Ссылки - пока заглушки
import { ContactsSocialIcon } from './ContactsSocialIcon'

export function ContactsSocials() {
  return (
    <div className='flex gap-20px mb-30px'>
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/vk-white.svg'
        iconAlt='VK icon'
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/telegram-white.svg'
        iconAlt='Telegram icon'
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/whatsapp-white.svg'
        iconAlt='WhatsApp icon'
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/max-white.svg'
        iconAlt='MAX icon'
      />
    </div>
  )
}
