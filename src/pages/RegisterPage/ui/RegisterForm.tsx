import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { type IRegisterCredentials, register } from '@shared/api/endpoints/register'
import { EUserRole } from '@entities/user'

import { RegisterRadioGroup } from './RegisterRadioGroup'
import { RegisterSecurityAgreement } from './RegisterSecurityAgreement'

import { Button } from '@shared/ui/Button'
import { Input } from '@shared/ui/Input'
import * as validations from '@shared/utils/inputValidations'

interface IRegisterFormValues {
  firstName: string
  secondName: string
  email: string
  birthday: string
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

  const [error, setError] = useState('')

  const onSubmit = async (data: IRegisterFormValues) => {
    // Временный маппинг. На бэкенде сейчас нет некоторых полей, которые есть на макете
    const payload: IRegisterCredentials = {
      email: data.email,
      name: data.firstName,
      surname: data.secondName,
      password: data.password,
      birthday: '2000-01-01',
      userRole: EUserRole.client,
    }

    try {
      await register(payload)
      methods.reset()
    } catch (err: any) {
      setError(err.details || err.message)
    }
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

      {error && <div className='text-center text-red'>{error}</div>}
    </FormProvider>
  )
}
