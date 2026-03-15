import { useEffect, useRef, type FC } from 'react'

interface IDoubleRangeInput {
  min: number
  max: number
  step: number
  value: { min: number; max: number }
  onChange: (value: { min: number; max: number }) => void
}

export const DoubleRangeInput: FC<IDoubleRangeInput> = ({ min, max, step, value, onChange }) => {
  const slider = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (slider.current) {
      if (value.min > value.max) {
        slider.current.style.right = `${100 - ((value.min - min) / (max - min)) * 100}%`
        slider.current.style.left = `${((value.max - min) / (max - min)) * 100}%`
      } else {
        slider.current.style.right = `${100 - ((value.max - min) / (max - min)) * 100}%`
        slider.current.style.left = `${((value.min - min) / (max - min)) * 100}%`
      }
    }
  }, [value.min, value.max, min, max])

  return (
    <div className='flex flex-col gap-20px'>
      <div className='flex h-30px'>
        <input
          type='number'
          className='w-full h-full border border-light-brown rounded-l-xs text-light-brown text-center focus:outline-dark-brown'
          min={min}
          max={max}
          step={step}
          value={value.min}
          onChange={(e) => {
            const numValue = Number(e.target.value)
            if (!isNaN(numValue) && numValue >= min && numValue <= max) {
              onChange({ min: numValue, max: value.max })
            }
          }}
        />
        <input
          type='number'
          className='w-full h-full border border-light-brown rounded-r-xs text-light-brown text-center focus:outline-dark-brown'
          min={min}
          max={max}
          step={step}
          value={value.max}
          onChange={(e) => {
            const numValue = Number(e.target.value)
            if (!isNaN(numValue) && numValue >= min && numValue <= max) {
              onChange({ min: value.min, max: numValue })
            }
          }}
        />
      </div>
      <div>
        <div className='h-5px relative rounded-xs bg-gray'>
          <span className='h-full absolute rounded-5px bg-light-brown' ref={slider}></span>
        </div>
        <div className='relative'>
          <input
            type='range'
            onChange={(e) => onChange({ min: Number(e.target.value), max: value.max })}
            min={min}
            max={max}
            step={step}
            value={value.min}
            className='absolute w-full h-5px -top-5px bg-none pointer-events-none range-input'
          />
          <input
            type='range'
            onChange={(e) => onChange({ min: value.min, max: Number(e.target.value) })}
            min={min}
            max={max}
            step={step}
            value={value.max}
            className='absolute w-full h-5px -top-5px bg-none pointer-events-none range-input'
          />
        </div>
      </div>
    </div>
  )
}
