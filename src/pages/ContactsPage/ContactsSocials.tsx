// Ссылки - пока заглушки
import { ContactsSocialIcon } from './ContactsSocialIcon'

export function ContactsSocials() {
  return (
    <div className='flex gap-20px mb-30px'>
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/vk-white.webp'
        iconAlt='VK icon'
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/telegram-white.webp'
        iconAlt='Telegram icon'
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/whatsapp-white.webp'
        iconAlt='WhatsApp icon'
      />
      <ContactsSocialIcon
        socialLink='https://ya.ru/'
        iconSrc='/icons/social/max-white.webp'
        iconAlt='MAX icon'
      />
    </div>
  )
}
