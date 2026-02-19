import { ContactsSection } from './ContactsSection'

export function ContactsInfo() {
  return (
    <>
      <ContactsSection
        sectionHeader='Офис'
        details='г. Владимир, ул. Студёная гора, д. 34'
        description='Проезд общественным транспортом: остановки «Садовая площадь» и «Студёная Гора», автобусы:
        1с, 6с, 9с, 12с, 15, 16с, 17, 22, 25, 26с, 27с, 28, 152; троллейбусы: 1, 2, 5, 7, 8;
        маршрутки: 5а, 36. Возле офиса есть бесплатная парковка для автомобилей.'
        hasMapIcon={true}
      />

      <ContactsSection
        sectionHeader='График работы'
        details='Пн-пт с 9.00 до 20.00, сб-вс с 10.00 до 18.00'
        description='Мы ждём вас в нашем магазине ежедневно без перерыва и без выходных.'
        hasCalendarIcon={true}
      />

      <ContactsSection
        sectionHeader='Нашли ошибку?'
        details='Нашли баг или неточность? Остались вопросы? Напишите нам и мы скоро свяжемся с вами!'
        description='Для оформления заказа или уточнения какой-либо информации рекомендуется написать/позвонить на номера 8(910)-773-94-63 по Telegram или WhatsApp'
        sectionTheme='dark'
      />
    </>
  )
}
