import { ContactsHeader } from './ContactsHeader'
import { ContactsSocials } from './ContactsSocials'
import { ContactsInfo } from './ContactsInfo'
import { ContactsMap } from './ContactsMap'

export const ContactsPage = () => {
  return (
    <main className='p-(--basic-container) grid grid-cols-2 gap-base'>
      <div className='flex flex-col gap-30px'>
        <ContactsHeader />
        {/* Поправить размещение иконок - они не одинакового размера */}
        <ContactsSocials />
        <ContactsInfo />
      </div>
      {/* Так и оставить iframe или заменить? */}
      <ContactsMap />
    </main>
  )
}
