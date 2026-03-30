import { type RegisterOptions, useFormContext } from 'react-hook-form'

interface IInputProps {
  type: string
  name: string
  placeholder: string
  validation: RegisterOptions
}

export const Input = ({ type, name, placeholder, validation }: IInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  return (
    <div className='flex flex-col gap-10px'>
      <input type={type} placeholder={placeholder} {...register(name, validation)} />
      {error && <span className='text-red text-[14px]'>{error.message}</span>}
    </div>
  )
}
