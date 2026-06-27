import React from 'react'
import logo from '../assets/navLogo.png'
import { useNavigate } from 'react-router-dom'


const VerifyEmail = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-linear-to-br from-purple-700 to-emerald-800'>
       <div
              onClick={() => {
                navigate("/");
              }}
              className="absolute flex-none cursor-pointer h-20 w-20 rounded-full overflow-hidden top-5 left-5 bg-amber-50"
            >
              <img
                className="overflow-hidden object-cover h-full w-full"
                src={logo}
                alt=""
              />
            </div>
      <form className='flex items-center flex-col h-auto w-auto p-5 bg-linear-to-br rounded-3xl from-purple-500 to-emerald-300 '> 
        <h1 className='font-bold  text-2xl mb-4'>Verify otp</h1>
        <p className='font-semibold text-sm'>Enter the 6-digit code sent on your email id</p>

      </form>
    </div>
  )
}

export default VerifyEmail
