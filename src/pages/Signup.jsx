import React from 'react'
import { useState } from 'react'
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

export default function SignUp() {
  const [ name,setName ] = useState('');
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ showPassword , setShowPassword ] = useState(false);
  return (


    <>
    <div className=''>
      <h1 className='text-3xl font-bold text-center mt-9'>Sign-Up</h1>
    </div>

    <div className='flex justify-center item-center px-6 py-12 max-w-6xl mx-auto'>
      <div className=' md:w-[67%] lg[50%]'>
        <img src=" data:image/jpeg;base64,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" alt="" className='w-[100vh] md:w-[40%] lg:w-[67%] rounded-2xl'/>
      </div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20 ml-10 py-auto text-center' >
        <form action="">
        <input className='p-3 my-5 sm:p-2 w-full border-2 rounded-md border-gray-300 transition ease-in-out' type="text" placeholder='Full name' onChange={(e)=>{
            setUsername(e.target.value)
            console.log(name)
          }}/ >
          <input className='p-3 my-5 sm:p-2 w-full border-2 rounded-md border-gray-300 transition ease-in-out' type="text" placeholder='Email Address' onChange={(e)=>{
            setUsername(e.target.value)
            console.log(username)
          }}/ >
          <br />
          <input className='p-3 my-5 sm:p-2 w-full border-2 border-gray-300 transition ease-in-out rounded-md'  type={showPassword ? "text" : "password"} placeholder='password' onChange={(e)=>{
            setPassword(e.target.value);
          }} />{showPassword ? (
            <AiFillEyeInvisible className='absolute right-[180px] top-[387px]' onClick={()=>{
              setShowPassword(false);
            }} ></AiFillEyeInvisible>
          ) : <AiFillEye className='absolute right-[180px] top-[387px]' onClick={()=>{
            setShowPassword(true);
          }}></AiFillEye>}
         
        </form>
      <div className='flex justify-between'>
        <div>
          <p className='inline'>Have an account?</p>
          <a href="/signin" className='text-blue-300 hover:text-blue-600 transition-duration-2000 ease-in-out'>Sign-In</a>
          </div>
          <div>
            <a href="/ForgotPassword" className='text-blue-300 hover:text-blue-600 transition-duration-2000 ease-in-out'>Forgot Password?</a>
          </div>
        </div>
        
        <div className=''>
          <button className='bg-blue-600 w-full border-2 hover:border-gray-600 h-9 my-5 rounded-lg '> Sign in</button>
        </div>
        <div className='flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
          <p>OR</p>
        </div>

        <div>
          <button className='bg-red-500 w-full my-3 h-9 border-2 hover:border-gray-600 rounded-lg items-center justify-center flex'>
            <FcGoogle classname=''></FcGoogle>Continue i with google</button>
        </div>
      </div>
      
    </div>
    </>
  )
}
