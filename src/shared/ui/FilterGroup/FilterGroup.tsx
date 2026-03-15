import type { FC } from 'react'
import { FilterOption } from '@shared/ui/FilterOption'
import { type UseFormRegister } from 'react-hook-form'

interface IFilterGroupProps {
  title: string
  items: string[]
  inputType: 'radio' | 'checkbox'
  name: string
  register: UseFormRegister<any>
}

export const FilterGroup: FC<IFilterGroupProps> = ({ title, items, inputType, name, register }) => (
  <fieldset className='flex flex-col gap-30px'>
    <h3 className='text-light-brown'>{title}</h3>
    <div className='flex flex-col gap-10px'>
      {items.map((el) => (
        <FilterOption
          key={el}
          title={el}
          inputType={inputType}
          name={name}
          register={register}
          value={el}
        />
      ))}
    </div>
  </fieldset>
)
