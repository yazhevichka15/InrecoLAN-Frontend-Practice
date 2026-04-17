import { Button } from '@shared/ui/Button'
import { useForm, FormProvider } from 'react-hook-form'
import { Input } from '@shared/ui/Input'
import { CharacteristicsBlock } from '@widgets/CharacteristicsBlock'

const categories = [
  { id: 'chandeliers', name: 'Люстры' },
  { id: 'lamps', name: 'Светильники' },
  { id: 'sconces', name: 'Бра' },
  { id: 'spotlights', name: 'Точечные светильники' },
  { id: 'backlights', name: 'Подсветки' },
  { id: 'table-lamps', name: 'Настольные лампы' },
  { id: 'floor-lamps', name: 'Торшеры' },
  { id: 'track-systems', name: 'Трековые системы' },
  { id: 'night-lamps', name: 'Ночники' },
  { id: 'outdoor-lamps', name: 'Уличные светильники' },
  { id: 'accessories', name: 'Комплектующие' },
]
const brands = [
  'ZORTEX',
  'TKLIGHTING',
  'ODEON LIGHT',
  'COMNILUX',
  'LED4U',
  'CRYSTALLUX',
  'BENETTI',
  'EUROSVET',
  'BOGATES',
  'FREA',
  'LIGHTSTAR',
]

interface IFormValues {
  name: string
  category: string
  brand: string
  code: string
  price: number
  stock_warehouse: number
  stock_store: number
  description: string
  photo?: FileList
  design_characteristics: Array<{ name: string; value: string }>
  operational_characteristics: Array<{ name: string; value: string }>
}

export function ProductAdditionForm() {
  const methods = useForm<IFormValues>({
    defaultValues: {
      name: '',
      category: '',
      brand: '',
      code: '',
      price: 0,
      stock_warehouse: 0,
      stock_store: 0,
      description: '',
      design_characteristics: [{ name: '', value: '' }],
      operational_characteristics: [{ name: '', value: '' }],
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit = (data: IFormValues) => {
    console.log('Данные товара:', data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-30px'>
        <div className='flex gap-base justify-between'>
          <div className='flex flex-col gap-30px w-full'>
            <label className='flex flex-col gap-10px text-light-brown' htmlFor=''>
              Название товара
              <Input
                type='text'
                name='name'
                placeholder='Название товара'
                validation={{ required: 'Название обязательно' }}
                inputClassName='h-14.5'
              />
            </label>
            <label className='flex flex-col gap-10px text-light-brown' htmlFor=''>
              Категория
              <select name='' id='' className='h-14.5 drop-down-list'>
                {categories.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </label>
            <label className='flex flex-col gap-10px text-light-brown' htmlFor=''>
              Бренд
              <select name='' id='' className='h-14.5 drop-down-list'>
                {brands.map((brand) => (
                  <option value={brand} key={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>
            <label className='flex flex-col gap-10px text-light-brown' htmlFor=''>
              Код товара
              <Input
                type='text'
                name='code'
                placeholder='Код товара'
                validation={{ required: 'Код товара обязателен' }}
                inputClassName='h-14.5'
              />
            </label>
            <label className='flex flex-col gap-10px text-light-brown' htmlFor=''>
              Цена
              <Input
                type='number'
                name='price'
                placeholder='Цена'
                validation={{
                  required: 'Укажите цену',
                  min: { value: 0, message: 'Цена не может быть отрицательной' },
                }}
                inputClassName='h-14.5'
              />
            </label>
            <div className='flex justify-between gap-base'>
              <label className='flex flex-col gap-10px text-light-brown w-full' htmlFor=''>
                Количество на складе
                <Input
                  type='text'
                  name='stock_warehouse'
                  placeholder=''
                  validation={{
                    required: 'Укажите количество товара',
                    min: { value: 0, message: 'Количество не может быть отрицательным' },
                  }}
                  inputClassName='h-14.5'
                />
              </label>
              <label className='flex flex-col gap-10px text-light-brown w-full' htmlFor=''>
                Количество в магазине
                <Input
                  type='text'
                  name='stock_store'
                  placeholder=''
                  validation={{
                    required: 'Укажите количество товара',
                    min: { value: 0, message: 'Количество не может быть отрицательным' },
                  }}
                  inputClassName='h-14.5'
                />
              </label>
            </div>
          </div>
          <div className='flex flex-col gap-30px w-full'>
            <label className='flex-1 flex flex-col gap-10px text-light-brown h-full'>
              Фото
              <Input
                type='file'
                name='photo'
                placeholder='Добавьте фото товара'
                validation={{
                  required: 'Фото товара обязательно',
                }}
                className='h-full'
                inputClassName='h-full'
              />
            </label>
            <label className='flex-1 flex flex-col gap-10px text-light-brown h-full'>
              Описание
              <div className='flex flex-col gap-10px h-full'>
                <textarea
                  placeholder='Добавьте описнаие товара'
                  className='h-full p-5'
                  {...register('description', {
                    required: 'Описание товара обязательно',
                    minLength: { value: 20, message: 'Минимум 20 символов' },
                    maxLength: { value: 500, message: 'Максимум 500 символов' },
                  })}
                ></textarea>
                {errors.description && (
                  <span className='text-red text-[14px]'>
                    {errors.description.message as string}
                  </span>
                )}
              </div>
            </label>
          </div>
        </div>
        <hr />
        <CharacteristicsBlock title='Коструктивные' />
        <hr />
        <CharacteristicsBlock title='Эксплуатационные' />

        <Button title='Сохранить' theme='dark' type='submit' className='h-19.5' />
      </form>
    </FormProvider>
  )
}
