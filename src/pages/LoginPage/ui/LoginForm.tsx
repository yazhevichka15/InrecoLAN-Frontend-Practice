import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'

import { type ILoginCredentials, loginThunk } from '@features/auth'
import { Button } from '@shared/ui/Button'
import { Input } from '@shared/ui/Input'
import { emailValidation, passwordValidation } from '@shared/lib/utils/inputValidations'
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch'

export const LoginForm = () => {
  const navigate = useNavigate()

  const methods = useForm<ILoginCredentials>({
    mode: 'onSubmit',
  })

  const dispatch = useAppDispatch()
  const [error, setError] = useState('')

  const onSubmit = async (data: ILoginCredentials) => {
    setError('')

    const result = await dispatch(loginThunk(data))

    if (loginThunk.fulfilled.match(result)) {
      methods.reset()
      navigate('/account')
    } else {
      setError((result.payload as string) || 'Ошибка авторизации')
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
