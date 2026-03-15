import { FilterGroup } from '@shared/ui/FilterGroup'
import { Button } from '@shared/ui/Button'
import { DoubleRangeInput } from '@shared/ui/DoubleRangeInput'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'

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

interface IFormValues {
  category: string
  room: string
  color: string[]
  power: { min: number; max: number }
  lamps: { min: number; max: number }
}

export function FiltersSidebar() {
  const { register, handleSubmit, reset, setValue, watch } = useForm<IFormValues>({
    defaultValues: {
      category: categoriesItems[0],
      room: roomTypeItems[0],
      color: [],
      power: { min: 24, max: 40 },
      lamps: { min: 1, max: 10 },
    },
  })

  const powerValue = watch('power')
  const lampsValue = watch('lamps')

  const onSubmit = (data: IFormValues) => {
    console.log('Применить:', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='px-(--basic-container-x) py-50px flex gap-50px flex-col col-span-3 border-r border-light-brown'
    >
      <h2>Фильтры</h2>
      <FilterGroup
        title='Категория'
        items={categoriesItems}
        name='category'
        inputType='radio'
        register={register}
      />
      <FilterGroup
        title='Тип помещения'
        items={roomTypeItems}
        name='room'
        inputType='radio'
        register={register}
      />
      <FilterGroup
        title='Основной цвет'
        items={colorItems}
        name='color'
        inputType='checkbox'
        register={register}
      />

      <fieldset className='flex flex-col gap-30px'>
        <h3 className='text-light-brown'>Мощность, Вт</h3>
        <DoubleRangeInput
          min={24}
          max={40}
          step={1}
          value={powerValue}
          onChange={(newValue) => setValue('power', newValue)}
        />
      </fieldset>
      <fieldset className='flex flex-col gap-30px'>
        <h3 className='text-light-brown'>Количество ламп, шт</h3>
        <DoubleRangeInput
          min={1}
          max={10}
          step={1}
          value={lampsValue}
          onChange={(newValue) => setValue('lamps', newValue)}
        />
      </fieldset>

      <div className='flex flex-col gap-20px'>
        <Button theme='dark' title='Применить' className='w-full h-9.25' type='submit' />
        <Button
          theme='light'
          title='Сбросить'
          className='w-full h-9.25'
          type='button'
          onClick={() => reset()}
        />
      </div>
    </form>
  )
}
