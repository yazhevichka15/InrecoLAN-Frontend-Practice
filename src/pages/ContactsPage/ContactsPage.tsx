import { ContactsHeader } from './ContactsHeader'
import { ContactsSocials } from './ContactsSocials'
import { ContactsInfo } from './ContactsInfo'
import { Map } from '@shared/ui/Map'

export const ContactsPage = () => {
  return (
    <main className='p-(--basic-container) grid grid-cols-2 gap-base'>
      <div className='flex flex-col gap-30px'>
        <ContactsHeader />
        <ContactsSocials />
        <ContactsInfo />
      </div>
      {/* Так и оставить iframe или заменить? */}
      <Map />
    </main>
  )
}
