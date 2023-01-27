import React from 'react'

export const TipButton = ({value}) => {
  return (
    <div className='col-6 py-2 px-2 justify-content-center'>
        <button value={value} spellCheck={false} className='fs-4 btn col-12 btn-primary'>{value}%</button>
    </div>
  )
}