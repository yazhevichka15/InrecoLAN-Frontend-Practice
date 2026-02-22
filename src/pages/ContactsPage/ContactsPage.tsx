import { SubHeader } from '@widgets/SubHeader'
import { Map } from '@shared/ui/Map'

import { ContactsHeader } from './ContactsHeader'
import { ContactsSocials } from './ContactsSocials'
import { ContactsInfo } from './ContactsInfo'

export const ContactsPage = () => {
  return (
    <>
      <SubHeader
        mainTitle='Контакты'
        subTitle='Для связи'
        description='Поможем подобрать люстру под ваш интерьер, чтобы в доме было светло, уютно и комфортно каждый день.'
      />

      <main className='p-(--basic-container) grid grid-cols-2 gap-base'>
        <div className='flex flex-col gap-30px'>
          <ContactsHeader />
          {/* После конвертации в webp одна иконка визуально ломается, стоит поискать другую */}
          <ContactsSocials />
          <ContactsInfo />
        </div>
        {/* Так и оставить iframe или заменить? */}
        <Map />
      </main>
    </>
  )
}
