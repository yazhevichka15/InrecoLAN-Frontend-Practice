import { MapPin, CalendarDays } from 'lucide-react'

export function ContactsInfo() {
  return (
    <>
      <section className='w-[900px] h-[205px] p-40px bg-beige flex flex-col gap-20px'>
        <h3 className='normal-case'>Офис</h3>
        <div className='flex items-center gap-10px'>
          <MapPin size={14} />
          <p>г. Владимир, ул. Студёная гора, д. 34</p>
        </div>
        <p className='text-light-brown'>
          Проезд общественным транспортом: остановки «Садовая площадь» и «Студёная Гора», автобусы:
          1с, 6с, 9с, 12с, 15, 16с, 17, 22, 25, 26с, 27с, 28, 152; троллейбусы: 1, 2, 5, 7, 8;
          маршрутки: 5а, 36. Возле офиса есть бесплатная парковка для автомобилей.
        </p>
      </section>

      <section className='w-[900px] h-[205px] p-40px bg-beige flex flex-col gap-20px'>
        <h3 className=''>Офис</h3>
        <div className='flex items-center gap-10px'>
          <MapPin size={14} />
          <p>г. Владимир, ул. Студёная гора, д. 34</p>
        </div>
        <p className='text-light-brown'>
          Проезд общественным транспортом: остановки «Садовая площадь» и «Студёная Гора», автобусы:
          1с, 6с, 9с, 12с, 15, 16с, 17, 22, 25, 26с, 27с, 28, 152; троллейбусы: 1, 2, 5, 7, 8;
          маршрутки: 5а, 36. Возле офиса есть бесплатная парковка для автомобилей.
        </p>
      </section>

      <section className='w-[900px] h-[205px] p-40px bg-beige flex flex-col gap-20px'>
        <h3 className=''>Офис</h3>
        <div className='flex items-center gap-10px'>
          <CalendarDays size={14} />
          <p>г. Владимир, ул. Студёная гора, д. 34</p>
        </div>
        <p className='text-light-brown'>
          Проезд общественным транспортом: остановки «Садовая площадь» и «Студёная Гора», автобусы:
          1с, 6с, 9с, 12с, 15, 16с, 17, 22, 25, 26с, 27с, 28, 152; троллейбусы: 1, 2, 5, 7, 8;
          маршрутки: 5а, 36. Возле офиса есть бесплатная парковка для автомобилей.
        </p>
      </section>
    </>
  )
}
