import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Nav'

function App() {


  return (
    <>
    <div className='row col-11 mx-auto'>
      <div className='col-4'>
        <p className='display-6'>Christopher DeHaan</p>
      </div>
      <div className='col-8 '>
        <Navbar />
      </div>
    </div>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
