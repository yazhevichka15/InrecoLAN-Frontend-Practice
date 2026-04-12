import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { type ILoginCredentials, login } from '@shared/api'

import { Button } from '@shared/ui/Button'
import { Input } from '@shared/ui/Input'
import { emailValidation, passwordValidation } from '@shared/utils/inputValidations'

export const LoginForm = () => {
  const methods = useForm<ILoginCredentials>({
    mode: 'onSubmit',
  })

  const [error, setError] = useState('')

  const onSubmit = async (data: ILoginCredentials) => {
    try {
      await login(data)
      methods.reset()
    } catch (err: any) {
      setError(err.details || err.message)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-30px text-[20px]'
      >
        <Input {...emailValidation} />
        <Input {...passwordValidation} />
        <Button type='submit' title='Авторизоваться' theme='dark' className='h-80px' />
      </form>

      {error && <div className='text-red'>{error}</div>}
    </FormProvider>
  )
}
