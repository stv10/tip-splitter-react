import React, { useState } from 'react'

export const InputBill = ({text, icon, limit}) => {
  const [value, setValue] = useState('');

  function handleChange(event) {
    if(event.target.value <= limit) setValue(event.target.value);
  }
  return (
    <div className='row pt-4 px-4'>
        <p className='px-2 m-0 text-1'>{text}</p>
        <input value={value} onChange={handleChange} type="number" className={'fs-4 text-end mod-input form-control border-0 rounded-3 px-2 ' + icon}/>
    </div>
  )
}
