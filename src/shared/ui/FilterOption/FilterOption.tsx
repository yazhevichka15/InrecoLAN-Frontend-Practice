import type { FC } from 'react'
import { type UseFormRegister } from 'react-hook-form'

interface IFilterOptionProps {
  title: string
  inputType: 'radio' | 'checkbox'
  name: string
  register: UseFormRegister<any>
  value: string
}

export const FilterOption: FC<IFilterOptionProps> = ({
  title,
  inputType,
  name,
  register,
  value,
}) => (
  <label className='flex items-center justify-between cursor-pointer'>
    <span>{title}</span>
    <input type={inputType} value={value} {...register(name)} />
  </label>
)
