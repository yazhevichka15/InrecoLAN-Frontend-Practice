import { useForm, FormProvider } from 'react-hook-form'

import { Button } from '@shared/ui/Button'
import { Input } from '@shared/ui/Input'
import { emailValidation, passwordValidation } from '@shared/utils/inputValidations'

interface ILoginFormValues {
  email: string
  password: string
}

export const LoginForm = () => {
  const methods = useForm<ILoginFormValues>({
    mode: 'onSubmit',
  })

  const onSubmit = (data: ILoginFormValues) => {
    console.log(data)
    methods.reset()
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
    </FormProvider>
  )
}
