import { FilterGroup } from '@shared/ui/FilterGroup'
import { Button } from '@shared/ui/Button'
import { DoubleRangeInput } from '@shared/ui/DoubleRangeInput'
import { useRef } from 'react'

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
  const form = useRef<HTMLFormElement>(null)
  return (
    <form
      ref={form}
      className='px-(--basic-container-x) py-50px flex gap-50px flex-col col-span-3 border-r border-light-brown'
    >
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

      <fieldset className='flex flex-col gap-30px'>
        <h3 className='text-light-brown'>Мощность, Вт</h3>
        <DoubleRangeInput min={24} max={40} step={1} />
      </fieldset>
      <fieldset className='flex flex-col gap-30px'>
        <h3 className='text-light-brown'>Количество ламп, шт</h3>
        <DoubleRangeInput min={1} max={10} step={1} />
      </fieldset>

      <div className='flex flex-col gap-20px'>
        <Button theme='dark' title='Применить' className='w-full h-9.25' type='button' />
        <Button
          theme='light'
          title='Сбросить'
          className='w-full h-9.25'
          type='button'
          onClick={() => form.current?.reset()}
        />
      </div>
    </form>
  )
}
