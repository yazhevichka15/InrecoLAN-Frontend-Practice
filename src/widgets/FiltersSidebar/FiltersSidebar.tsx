import { FilterGroup } from '@shared/components/FilterGroup'
import { Button } from '@shared/components/Button'
import { RangeInput } from '@shared/components/RangeInput'

const categoriesItems = [
  'Люстры',
  'Светильники',
  'Точечные светильники',
  'Подсветки',
  'Настольные лампы',
  'Торшеры',
  'Трековые системы',
  'Ночники',
  'Уличные светильники',
  'Комплектующие',
]

const roomTypeItems = ['Встроенный', 'Накладной', 'Подвесной']

const colorItems = ['Белый', 'Чёрный', 'Золотой']

export function FiltersSidebar() {
  return (
    <div className='px-(--basic-container-x) py-50px flex gap-50px flex-col col-span-3 border-r border-light-brown'>
      <h2>Фильтры</h2>
      <FilterGroup
        title='Категория'
        items={categoriesItems}
        name='category'
        inputType='radio'
        defaultValue={categoriesItems[0]}
      />
      <FilterGroup
        title='Тип помещения'
        items={roomTypeItems}
        name='room'
        inputType='radio'
        defaultValue={roomTypeItems[0]}
      />
      <FilterGroup title='Основной цвет' items={colorItems} name='color' inputType='checkbox' />

      <RangeInput min={20} max={40} />

      <div className='flex flex-col gap-20px'>
        <Button theme='dark' title='Применить' className='w-full h-9.25' />
        <Button theme='light' title='Сбросить' className='w-full h-9.25' />
      </div>
    </div>
  )
}
