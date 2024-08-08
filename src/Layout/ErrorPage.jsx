import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex justify-center items-center text-3xl m-8 p-8 gap-4'>
    <h1>You are in wrong page , please go   </h1>{"  "} <Link to='/' className='underline'> back to home</Link>
    </div>
  )
}

export default ErrorPage