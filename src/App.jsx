import { useState } from 'react'
import {Outlet} from 'react-router-dom'

import Navbar from './components/Nav'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default App
