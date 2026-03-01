import type { FC } from 'react'

interface IRangeInputProps {
  min: number
  max: number
}

export const RangeInput: FC<IRangeInputProps> = ({ min, max }) => (
  <div>
    <div>
      <input type='number' />
    </div>
    <input
      type='range'
      min={min}
      max={max}
      step='1'
      value='30'
      className='w-full accent-light-brown'
    />
  </div>
)
