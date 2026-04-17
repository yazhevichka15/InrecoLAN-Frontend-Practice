import { Button } from '@shared/ui/Button'
import { Input } from '@shared/ui/Input'
import { Trash2 } from 'lucide-react'
import type { FC } from 'react'

interface ICharacteristicProps {
  index: number
  onRemove: () => void
}

export const Characteristic: FC<ICharacteristicProps> = ({ onRemove }) => {
  return (
    <div className='flex justify-between gap-base'>
      <label className='flex-1'>
        <Input
          type='text'
          name='characteristic_name'
          placeholder='Добавьте характеристику товара'
          validation={{
            required: 'Характеристика обязательна',
          }}
          inputClassName='h-14.5'
        />
      </label>
      <div className='flex-1 flex gap-base'>
        <label className='flex-1'>
          <Input
            type='text'
            name='characteristic_value'
            placeholder='Добавьте значение'
            validation={{
              required: 'Значение обязательно',
            }}
            inputClassName='h-14.5'
          />
        </label>
        <Button
          title='X'
          type='button'
          theme='light'
          className='w-29.25 h-14.5'
          Icon={Trash2}
          onClick={onRemove}
        />
      </div>
    </div>
  )
}
