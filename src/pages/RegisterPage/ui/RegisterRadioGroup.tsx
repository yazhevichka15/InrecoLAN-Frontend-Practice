import { useFormContext } from 'react-hook-form'

interface IRegisterRadioGroupProps {
  title?: string
  name: string
  options: Array<{ value: string; label: string }>
}

export const RegisterRadioGroup = ({ title, name, options }: IRegisterRadioGroupProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  return (
    <>
      <div className='flex gap-base'>
        <span>{title}</span>

        {options.map(({ value, label }) => (
          <label key={value} className='flex items-center gap-5px'>
            <input type='radio' value={value} {...register(name)} />
            {label}
          </label>
        ))}
      </div>

      {error && <span className='text-red text-[14px]'>{error.message as string}</span>}
    </>
  )
}
