import type { FC } from 'react'
import { FilterOption } from '@shared/ui/FilterOption'

interface IFilterGroupProps {
  title: string
  items: string[]
  inputType: 'radio' | 'checkbox'
  name?: string
  defaultValue?: string
}

export const FilterGroup: FC<IFilterGroupProps> = ({
  title,
  items,
  inputType,
  name,
  defaultValue,
}) => (
  <fieldset className='flex flex-col gap-30px'>
    <h3 className='text-light-brown'>{title}</h3>
    <div className='flex flex-col gap-10px'>
      {items.map((el) => (
        <FilterOption
          key={el}
          title={el}
          inputType={inputType}
          name={name}
          defaultChecked={defaultValue === el}
        />
      ))}
    </div>
  </fieldset>
)
