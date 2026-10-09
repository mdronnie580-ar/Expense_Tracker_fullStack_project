import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faCircleUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div className='bg-gray-600  h-screen w-full flex flex-col p-1 justify-center items-center'>
        <div className='h-full  w-full rounded-lg bg-white  flex flex-col md:flex-row'>
        <aside className='w-full md:w-1/4  gap-5 flex flex-col px-2 py-4 bg-zinc-700 text-white'>
                <h1 className='text-2xl text-green-300 font-semibold'>Expense Tracker</h1>
                <div>
                    <ul className='flex flex-row md:flex-col md:justify-start  text-lg text-white font-semibold justify-between'>
                        <li className='hover:bg-blue-600  px-4 py-2 rounded-sm flex flex-row justify-center items-center md:justify-start'> <FontAwesomeIcon icon={faHome} /> <span className='ml-2'> Dashboard</span> </li>
                        <Link to = "/Expense"><li className='hover:bg-blue-600 px-4 gap-2 py-2 rounded-sm flex flex-row justify-center items-center md:justify-start' > <FontAwesomeIcon icon={faArrowTrendUp} /> Expense </li></Link>
                        <Link to= "/" > <li className='hover:bg-blue-600 px-4 py-2 gap-2 rounded-sm flex flex-row justify-center items-center md:justify-start'><FontAwesomeIcon icon={faHome} /> Logout</li> </Link>
                        
                    </ul>
                </div>
        </aside>
        <main className='bg-gray-100 w-full flex-1 p-3 md:p-6 overflow-auto flex flex-col gap-5'>
            {/* header sections */}
            <div className=' h-1/4 p-8 flex flex-col justify-center items-center text-2xl hover:shadow-xl rounded-lg bg-blue-600 text-gray-300'>
                <h1>Good Morning Ronnie!</h1>
                <p>Here's your expense overview.</p>
            </div>
            {/*expense details sections*/}
            <div className=' h-auto p-5 flex flex-col md:flex-row justify-center items-center gap-5 text-white'>
                {/*balance section */}
                <div className=' w-full flex flex-col justify-center items-center px-15 py-10 text-xl font-semibold rounded-lg bg-green-500 hover:shadow-2xl'>
                    <h3>Balance</h3>
                    <h4>$ <span>2050</span></h4>
                </div>
                {/*Expense section */}
                <div className='px-15 py-10  w-full flex flex-col justify-center items-center text-xl font-semibold rounded-lg bg-red-500  hover:shadow-2xl'>
                    <h3> <Link to="/Expense">Expense </Link> </h3>
                    <h4>$ <span>1250</span></h4>
                </div >
                {/*income section */}
                <div className=' w-full flex flex-col justify-center items-center px-15 py-10 text-xl font-semibold rounded-lg bg-purple-500  hover:shadow-2xl'>
                    <h3>Income</h3>
                    <h4>$ <span>3700</span></h4>
                </div>
                {/* Transction */}
                <div className='  w-full flex flex-col justify-center items-center px-15 py-10 text-xl font-semibold rounded-lg bg-orange-500  hover:shadow-2xl'>
                    <h3>Transction</h3>
                    <h4>$ <span>12</span></h4>
                </div>
            </div>
        </main>
    </div>
    </div>
  )
}

export default Dashboard