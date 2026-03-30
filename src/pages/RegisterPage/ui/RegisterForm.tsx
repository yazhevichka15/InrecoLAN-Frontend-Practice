import { useForm, FormProvider } from 'react-hook-form'

import { RegisterRadioGroup } from './RegisterRadioGroup'
import { RegisterSecurityAgreement } from './RegisterSecurityAgreement'

import { Button } from '@shared/ui/Button'
import { Input } from '@shared/ui/Input'
import * as validations from '@shared/utils/inputValidations'

interface IRegisterFormValues {
  firstName: string
  secondName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  newsLetter: 'yes' | 'no'
  securityAgreement: boolean
}

export const RegisterForm = () => {
  const methods = useForm<IRegisterFormValues>({
    mode: 'onSubmit',
    defaultValues: {
      newsLetter: 'no',
      securityAgreement: false,
    },
  })

  const onSubmit = (data: IRegisterFormValues) => {
    console.log(data)
    methods.reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='flex flex-col gap-50px text-[20px]'
      >
        <div className='grid grid-cols-2 gap-base'>
          <fieldset className='flex flex-col gap-30px'>
            <legend className='mb-30px'>
              <h2>Контактные данные</h2>
            </legend>
            <Input {...validations.firstNameValidation} />
            <Input {...validations.secondNameValidation} />
            <Input {...validations.emailValidation} />
            <Input {...validations.phoneValidation} />
          </fieldset>

          <fieldset className='flex flex-col gap-30px'>
            <legend className='mb-30px'>
              <h2>Пароль</h2>
            </legend>
            <Input {...validations.passwordValidation} />
            <Input {...validations.confirmPasswordValidation} />
          </fieldset>
        </div>

        <fieldset>
          <legend className='mb-30px'>
            <h2>Рассылка</h2>
          </legend>
          <RegisterRadioGroup
            title='Получать новости на Email'
            name='newsLetter'
            options={[
              { value: 'yes', label: 'Да' },
              { value: 'no', label: 'Нет' },
            ]}
          />
        </fieldset>

        <Button type='submit' title='Зарегистрироваться' theme='dark' className='h-80px'></Button>

        <RegisterSecurityAgreement
          name='securityAgreement'
          validation={validations.requredFieldValidation}
        />
      </form>
    </FormProvider>
  )
}
