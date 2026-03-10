import { FooterAbout } from './FooterAbout.tsx'
import { FooterAdress } from './FooterAdress.tsx'
import { FooterCatalog } from './FooterCatalog.tsx'
import { FooterContacts } from './FooterContacts.tsx'

export function Footer() {
  return (
    <footer className='w-full bg-dark-brown text-white/50 py-20 px-8 pt-8'>
      <div className='grid grid-cols-4 gap-16'>
        <FooterAbout />
        <FooterAdress />
        <FooterCatalog />

        <div className='text-right'>
          <FooterContacts />
        </div>
      </div>

      <div className='text-footer-title flex justify-center text-[90px] leading-none border-b mt-5'>
        ИМПЕРИЯ ЛЮСТР
      </div>

      <div className='text-footer-title ml-auto mb-16'>© Империя люстр 2026</div>
    </footer>
  )
}

export default Footer
