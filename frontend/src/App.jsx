import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Expanse from './pages/Expanse'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/*authtication*/}
        <Route path='/' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
      {/*Main App */}
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Expense' element={<Expanse/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App