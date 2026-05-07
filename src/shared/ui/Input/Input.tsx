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
    getValues,
  } = useFormContext()

  const error = errors[name]

  const finalValidation: RegisterOptions = {
    ...validation,
    validate:
      name === 'confirmPassword'
        ? (value) => value === getValues('password') || 'Пароли не совпадают'
        : undefined,
  }

  return (
    <div className='flex flex-col gap-10px'>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, finalValidation)}
        className='border-2 border-solid border-light-brown text-light-brown px-20px py-30px outline-0'
      />
      {error && <span className='text-red text-[14px]'>{error.message as string}</span>}
    </div>
  )
}
