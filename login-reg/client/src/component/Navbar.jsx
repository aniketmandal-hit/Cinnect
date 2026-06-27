
import logo from '../assets/navlogo.png'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext.jsx'
import { useContext } from 'react'
import   axios  from 'axios'
import { toast } from "react-toastify";


const Navbar = () => {
    const navigate = useNavigate()
    const {backendUrl, setIsLoggedin, UserData, setUserData} = useContext(AppContent)
   
    //otp verification page
      const sentVerificationOtp = async() =>{
        try {
        axios.defaults.withCredentials = true
        const {data} = await axios.post(backendUrl + '/api/auth/send-verify-Otp')
        if(data.success){
          navigate('/verify-email')
          toast.success(data.message)
        } else{
          toast.error(data.message)
        }
        } catch (error) {
          toast.error(error.message)
        }
        
    }
      //logout 
    const logout = async()=>{
      try {
         axios.defaults.withCredentials = true;
      const {data} = await axios.post(backendUrl + '/api/auth/logout')
      if(data.success){
        setIsLoggedin(false)
        setUserData(false)
        navigate('/')
      }
      } catch (error) {
        toast.error(error.message)
        
      }
     
    } 

  return (
    <div className='flex absolute top-2  h-auto w-full items-center justify-between  top-0% p-7 pr-17 pl-17'>
        <div className='h-20 w-20 rounded-full overflow-hidden'>
      <img className=" object-cover w-full h-full  " src={logo} alt="not showing" />
      </div>
      {UserData ?
      <div className="rounded-full flex items-center caret-transparent justify-center text-xl font-semibold  text-cyan-200 relative group  h-10 w-10  bg-gray-900">
        {UserData.Username[0].toUpperCase()} 
        
        <div className='hidden  top-0 rounded right-0 pt-10 cursor-pointer z-10 text-sm  absolute group-hover:block'>
          
        <ul  className='list-none  bg-gray-200 text-sm m-0 text-black p-2'>
          {!UserData.isAccountVerified && <li onClick={sentVerificationOtp} className='py-1 px2 caret-transparent cursor-pointer hover:bg-gray-500'>Verify account</li>}
          <li onClick={
            logout
          } className='py-1 px2 caret-transparent cursor-pointer hover:bg-gray-500'>Logout</li>
        </ul>
      </div>

      </div>
      :
       <button onClick={()=>{
        navigate('/login')
      }} className='text-white  bg-gray-500 rounded-full p-2 w-20 cursor-pointer active:scale-105 '>Login
      </button> }
      
      
    </div>
  )
}

export default Navbar
