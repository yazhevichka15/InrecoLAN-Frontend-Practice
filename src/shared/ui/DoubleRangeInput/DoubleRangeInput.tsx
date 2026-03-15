import { useEffect, useRef, useState, type FC, type ChangeEvent } from 'react'

interface IDoubleRangeInput {
  min: number
  max: number
  step: number
}

export const DoubleRangeInput: FC<IDoubleRangeInput> = ({ min, max, step }) => {
  const [inputFrom, setInputFrom] = useState(min)
  const [inputTo, setInputTo] = useState(max)
  const [fromInputValue, setFromInputValue] = useState(String(min))
  const [toInputValue, setToInputValue] = useState(String(max))

  const slider = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setFromInputValue(String(inputFrom))
    setToInputValue(String(inputTo))
    if (slider.current) {
      if (inputFrom > inputTo) {
        slider.current.style.right = `${100 - ((inputFrom - min) / (max - min)) * 100}%`
        slider.current.style.left = `${((inputTo - min) / (max - min)) * 100}%`
      } else {
        slider.current.style.right = `${100 - ((inputTo - min) / (max - min)) * 100}%`
        slider.current.style.left = `${((inputFrom - min) / (max - min)) * 100}%`
      }
    }
  }, [inputFrom, inputTo, min, max])

  return (
    <div className='flex flex-col gap-20px'>
      <div className='flex h-30px'>
        <input
          type='number'
          className='w-full h-full border border-light-brown rounded-l-xs text-light-brown text-center focus:outline-dark-brown'
          min={min}
          max={max}
          step={step}
          value={fromInputValue}
          onChange={(e) => {
            const value = e.target.value
            setFromInputValue(value)
            const numValue = Number(value)
            if (!isNaN(numValue) && numValue >= min && numValue <= max) {
              setInputFrom(numValue)
            }
          }}
        />
        <input
          type='number'
          className='w-full h-full border border-light-brown rounded-r-xs text-light-brown text-center focus:outline-dark-brown'
          min={min}
          max={max}
          step={step}
          value={toInputValue}
          onChange={(e) => {
            const value = e.target.value
            setToInputValue(value)
            const numValue = Number(value)
            if (!isNaN(numValue) && numValue >= min && numValue <= max) {
              setInputTo(numValue)
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
            onChange={(e) => setInputFrom(Number(e.target.value))}
            min={min}
            max={max}
            step={step}
            defaultValue={min}
            value={inputFrom}
            className='absolute w-full h-5px -top-5px bg-none pointer-events-none range-input'
          />
          <input
            type='range'
            onChange={(e) => setInputTo(Number(e.target.value))}
            min={min}
            max={max}
            step={step}
            defaultValue={max}
            value={inputTo}
            className='absolute w-full h-5px -top-5px bg-none pointer-events-none range-input'
          />
        </div>
      </div>
    </div>
  )
}
