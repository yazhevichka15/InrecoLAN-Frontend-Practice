import type { FC } from 'react'
import { Characteristic } from '@shared/ui/Characteristic'
import { Button } from '@shared/ui/Button'
import { useForm, useFieldArray, FormProvider } from 'react-hook-form'

interface ICharacteristicsBlockProps {
  title: string
}

interface IFormValues {
  characteristics: {
    name: string
    value: string
  }[]
}

export const CharacteristicsBlock: FC<ICharacteristicsBlockProps> = ({ title }) => {
  const methods = useForm<IFormValues>({
    defaultValues: {
      characteristics: [{ name: '', value: '' }],
    },
  })

  const { control } = methods
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'characteristics',
  })

  const addCharacteristic = () => {
    append({ name: '', value: '' })
  }
  return (
    <FormProvider {...methods}>
      <div className='flex flex-col gap-30px'>
        <h3>{title} характеристики</h3>
        <div className='flex flex-col gap-30px'>
          {fields.map((field, index) => (
            <Characteristic key={field.id} index={index} onRemove={() => remove(index)} />
          ))}
        </div>

        <Button
          title='Добавить характеристику'
          theme='light'
          type='button'
          className='h-14.5'
          onClick={addCharacteristic}
        />
      </div>
    </FormProvider>
  )
}
