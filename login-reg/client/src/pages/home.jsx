import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Header from '../component/Header.jsx'

const home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default home
