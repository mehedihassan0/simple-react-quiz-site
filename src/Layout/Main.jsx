import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
   <div className='relative'>
     <Header/>
     <Outlet/>
   </div>
  )
}

export default Main