import React from 'react'
import { Title } from './Title'
import { Calculator } from './Calculator'
export const App = () => {
  return (
    <main className='main px-0 container-fluid d-flex flex-column align-items-center vh-100 vw-100'>
        <Title/>
        <Calculator/>
    </main>
  )
}
