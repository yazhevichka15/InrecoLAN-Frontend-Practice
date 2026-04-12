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
      const minPercent = ((value.min - min) / (max - min)) * 100
      const maxPercent = ((value.max - min) / (max - min)) * 100

      const left = Math.min(minPercent, maxPercent)
      const right = 100 - Math.max(minPercent, maxPercent)

      slider.current.style.marginLeft = `${left}%`
      slider.current.style.marginRight = `${right}%`
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
        <div className='h-5px grid rounded-xs bg-gray'>
          <span className='h-full [grid-area:1/1] rounded-5px bg-light-brown' ref={slider}></span>
        </div>
        <div className='grid'>
          <input
            type='range'
            onChange={(e) => onChange({ min: Number(e.target.value), max: value.max })}
            min={min}
            max={max}
            step={step}
            value={value.min}
            className='[grid-area:1/1] w-full h-5px bg-none pointer-events-none range-input'
          />
          <input
            type='range'
            onChange={(e) => onChange({ min: value.min, max: Number(e.target.value) })}
            min={min}
            max={max}
            step={step}
            value={value.max}
            className='[grid-area:1/1] w-full h-5px bg-none pointer-events-none range-input'
          />
        </div>
      </div>
    </div>
  )
}
