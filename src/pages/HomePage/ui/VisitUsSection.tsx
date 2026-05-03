export const VisitUsSection = () => {
  return (
    <section className='py-20 px-12'>
      <div className='flex gap-16'>
        <div className='flex flex-col justify-between max-w-md'>
          <div className='mb-8'>
            <p className='font-handwrite text-xl text-footer-list'>приходите</p>
            <h2 className='text-4xl font-bold'>в гости</h2>
          </div>

          <p className='text-sm text-gray-600'>
            «Империя люстр» — это не просто каталог, а мир света, который нужно видеть своими
            глазами. Приходите к нам в салон за атмосферой и идеальным выбором!
          </p>
        </div>

        <div className='flex flex-1 gap-8'>
          <img src='/assets/VisitUs1.webp' alt='Шоурум люстр' className='w-1/2 object-cover' />
          <img src='/assets/VisitUs2.webp' alt='Шоурум люстр' className='w-1/2 object-cover' />
        </div>
      </div>
    </section>
  )
}
