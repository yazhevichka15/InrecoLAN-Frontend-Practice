import { type RegisterOptions, useFormContext } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface IRegisterSecurityAgreementProps {
  name: string
  validation: RegisterOptions
}

export const RegisterSecurityAgreement = ({
  name,
  validation,
}: IRegisterSecurityAgreementProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]

  return (
    <>
      <label className='-m-30px flex gap-20px self-center text-[14px] '>
        <input type='checkbox' {...register(name, validation)} />

        <span>
          Я прочитал и согласен с условиями{' '}
          <Link to='/test-security' className='text-light-brown'>
            Политики безопасности на сайте «Империя люстр»
          </Link>
        </span>
      </label>

      {error && <p className='text-red text-[14px] self-center'>{error.message as string}</p>}
    </>
  )
}
