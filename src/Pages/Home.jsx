import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </> 
  )
}

export default Home