import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../../pages/Signup'
import Login from '../../pages/Login'
import Home from '../../pages/Home'
import Users from '../../subpages/Users'

const Approuter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Signup />} />
          <Route path="/login" element={<Login />} />          
          <Route path="/home/*" element={<Home />} /> 
        </Routes>
        {/* <Routes>
        </Routes> */}
        
      </BrowserRouter>
    </>
  )
}

export default Approuter
