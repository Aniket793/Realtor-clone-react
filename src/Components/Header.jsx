import React from 'react'
import { useLocation,useNavigate } from 'react-router'

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  function pathMatchRoute(route){
    if(route === location.pathname)
    return true;
  }
  console.log(location.pathname)
  return (
    <>
    <div className='flex justify-between px-3 mx-auto bg-white border-b shadow-md sticky top-0 z=50'>
        <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/646/755/small/real-estate-logo-design-vector.jpg" alt="logo" className='h-16' onClick={()=>{
              navigate("/")
            }}
            />
        </div>

        <div>
          <ul className='flex space-x-10 '>
            <li className={`py-5 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500 cursor-pointer"}`} onClick={()=>{
              navigate("/");
            }}>Home</li>

            <li className={`py-5 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/Offers") && "text-black border-b-red-500 cursor-pointer"}`} onClick={()=>{
              navigate("/offers");
            
            }}>Offers</li>


            <li className={`py-5 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/signin") && "text-black border-b-red-500 cursor-pointer"}` } onClick={()=>{
              navigate("/signIn")
            }}>SignIn</li>
          </ul>
        </div>
        </div>
        </>
  )
}
