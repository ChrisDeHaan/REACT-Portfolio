import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Nav'

import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <main className='col-10 mx-auto'>
        <Outlet/>
      </main>
    </>
  )
}

export default App
