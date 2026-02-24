import type { FC } from 'react'

interface IFilterOptionProps {
  title: string
  inputType: 'radio' | 'checkbox'
  name?: string
  defaultChecked?: boolean
}

export const FilterOption: FC<IFilterOptionProps> = ({
  title,
  inputType,
  name,
  defaultChecked,
}) => (
  <label className='flex items-center justify-between cursor-pointer'>
    <span>{title}</span>
    <input
      type={inputType}
      name={name}
      defaultChecked={defaultChecked}
      className='border border-[var(--color-light-brown)] accent-[var(--color-light-brown)] cursor-pointer'
    />
  </label>
)
