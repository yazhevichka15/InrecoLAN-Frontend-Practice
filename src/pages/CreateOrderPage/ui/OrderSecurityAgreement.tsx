import { type RegisterOptions, useFormContext } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface IOrderSecurityAgreementProps {
  name: string
  validation: RegisterOptions
}

export const OrderSecurityAgreement = ({ name, validation }: IOrderSecurityAgreementProps) => {
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
          Я прочитал(-а) и согласен(-на) с{' '}
          <Link to='/test-security' className='text-light-brown'>
            Условиями обработки персональных данных
          </Link>
          , а также с{' '}
          <Link to='/test-security' className='text-light-brown'>
            Условиями продажи
          </Link>
        </span>
      </label>

      {error && <p className='text-red text-[14px] self-center'>{error.message as string}</p>}
    </>
  )
}
