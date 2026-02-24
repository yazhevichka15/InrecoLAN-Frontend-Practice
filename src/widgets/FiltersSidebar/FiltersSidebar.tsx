import { FilterOption } from '@shared/components/FilterOption'

export function FiltersSidebar() {
  return (
    <div className='p-[var(--basic-container)] flex gap-[var(--spacing-50px)] flex-col col-span-3 border-r-1 border-[var(--color-light-brown)]'>
      <h2>Фильтры</h2>
      <FilterOption title='Красный' inputType='checkbox' />
      <FilterOption title='Красный' inputType='checkbox' />
      <FilterOption title='Красный' inputType='radio' name='r1' />
      <FilterOption title='Красный' inputType='radio' name='r1' />
    </div>
  )
}
