import React from 'react'
import { TipButton } from './TipButton'
import { TipButtonCustom } from './TipButtonCustom';

const tipAmounts = [5,10,15,20,50];
export const TipList = ({ handler }) => {

  const handleChange = (ev) => {
    handler(ev.target.value,'tipPercent');
  }

  return (
    <div className='row px-4 justify-content-center'>
        <p className='row px-2 m-0 text-1 pb-2 pt-4'>Select Tip %</p>
        <div className='row px-0 justify-content-center align-items-center'>
            {
                tipAmounts.map((amount,index) => {
                    return <TipButton value={amount} key={index} handler={handleChange}/>
                })
            }
            <TipButtonCustom handler={handleChange}/>
        </div>
    </div>
  )
}
