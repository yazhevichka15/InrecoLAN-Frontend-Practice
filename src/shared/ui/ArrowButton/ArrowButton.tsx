export const ArrowButton = ({ title, theme, onClick }) => {
  return (
    <div className='w-full justify-between flex items-center '>
      <button onClick={onClick} className='uppercase select-none'>
        {title}
      </button>
      <svg width='120' height='14'>
        <line
          x1='1'
          y1='7'
          x2='115'
          y2='7'
          stroke='var(--color-light-brown)'
          stroke-width='2'
          stroke-linecap='round'
        />

        <line
          x1='110'
          y1='2'
          x2='115'
          y2='7'
          stroke='var(--color-light-brown)'
          stroke-width='2'
          stroke-linecap='round'
        />
        <line
          x1='110'
          y1='12'
          x2='115'
          y2='7'
          stroke='var(--color-light-brown)'
          stroke-width='2'
          stroke-linecap='round'
        />
      </svg>
    </div>
  )
}
