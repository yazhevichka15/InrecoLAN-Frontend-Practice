import { ContactsSocials } from './ContactsSocials'
import { ContactsInfo } from './ContactsInfo'
import { ContactsMap } from './ContactsMap'

export const ContactsPage = () => {
  return (
    <main className='p-(--basic-container) grid grid-cols-2 gap-base'>
      <div className='flex flex-col gap-30px'>
        <div className='flex justify-between items-center'>
          <h2>8(4922)44-93-30</h2>
          <h2 className='lowercase'>imperiya_lustr@mail.ru</h2>
        </div>
        <ContactsSocials />
        <ContactsInfo />
      </div>

      <ContactsMap />
    </main>
  )
}
