import { type RegisterOptions, useFormContext } from 'react-hook-form'
import { cn } from '@shared/utils/cn'

interface IInputProps {
  type: string
  name: string
  placeholder: string
  validation: RegisterOptions
  className?: string
  inputClassName?: string
}

export const Input = ({
  type,
  name,
  placeholder,
  validation,
  className,
  inputClassName,
}: IInputProps) => {
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
    <div className={cn('flex flex-col gap-10px', className)}>
      <input
        className={inputClassName}
        type={type}
        placeholder={placeholder}
        {...register(name, finalValidation)}
      />
      {error && <span className='text-red text-[14px]'>{error.message as string}</span>}
    </div>
  )
}
