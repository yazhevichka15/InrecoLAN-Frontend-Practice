import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@shared/ui/Button'
import { Input } from '@shared/ui/Input'
import { email_validation } from '@shared/utils/inputValidations'

interface IForgotPasswordFormValues {
  email: string
}

export const ForgotPasswordForm = () => {
  const methods = useForm<IForgotPasswordFormValues>({
    mode: 'onSubmit',
  })

  const onSubmit = (data: IForgotPasswordFormValues) => {
    console.log(data)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-30px text-[20px]'
      >
        <Input {...email_validation} />
        <Button type='submit' title='Отправить' theme='dark' className='h-80px' />
      </form>
    </FormProvider>
  )
}
