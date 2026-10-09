import React from 'react'
import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import axios from "axios"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword]  = useState("");
  const Navigate = useNavigate();
  // handlelogin 
  const handleLogin = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3000/api/auth/login",{email, password});
      localStorage.setItem("userId", response.data.user.id);
      console.log(response.data);
      alert("login successfull");
      Navigate("/Dashboard")
      
    }catch(err){
      console.log(err);
      alert(err.response?.data?.message || "login faild")
    }
    setEmail("");
    setPassword("");
  }
  return (
    <div className=' h-screen w-full bg-gray-400 flex justify-center items-center'>
       <div className=' shadow-lg hover:shadow-2xl gap-5 bg-white flex flex-col justify-center items-center p-10 rounded-xl'>
         <h1 className=' text-lg px-15 py-3 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold '> Login Form </h1>
        <div className='flex flex-col  w-full p-2 gap-5 '>
            <input className= "border px-2 py-2 rounded-lg outline-none " type="text" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input  className='border px-2 py-2 rounded-lg outline-none' type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
            <div className='text-lg px-8 py-2 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold'> <button onClick={handleLogin}>Login</button></div>
            <h4 className='text-sm font-medium text-gray-600'>Not  have an account ? <Link to= "/signup" className='text-blue-600 font-medium' > signup </Link></h4>
       </div>
    </div>
  )
}

export default Login