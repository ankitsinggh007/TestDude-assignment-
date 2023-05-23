import React from 'react'
import Navbar from '../components/Navbar/Navbar'
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