import React from 'react'
import { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom'
import axios from "axios"
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
          const response = await axios.post("http://localhost:3000/api/auth/signup",{
            name,
            email,
            password,
          });
          setName("");
          setEmail("");
          setPassword("");
          navigate("/Dashboard")
        }catch(err){
          console.log(err);
        }
  }
  return (
    <div className=' h-screen w-full bg-gray-400 flex justify-center items-center'>
       <div className=' shadow-lg hover:shadow-2xl gap-5 bg-white flex flex-col justify-center items-center p-10 rounded-xl'>
         <h1 className=' text-lg px-15 py-3 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold '>  Signup Form</h1>
        <div className='flex flex-col  w-full p-2 gap-5 '>
            <input className='border px-2 py-2 rounded-lg outline-none' type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input className= "border px-2 py-2 rounded-lg outline-none " type="gamil" placeholder='Enter Email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input  className='border px-2 py-2 rounded-lg outline-none' type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
            <Link to = "/Dashboard" onClick={handleSubmit}><input className='text-lg px-8 py-2 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold' type="submit" value= "signup" /></Link>
            <h4 className='text-sm font-medium text-gray-600'>All ready have an account ? <Link className='text-blue-600 font-medium' to= "/Login" >signin now</Link></h4>
       </div>
    </div>
  )
}

export default Signup