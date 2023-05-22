import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Assignment from './pages/Assignment.jsx'
import Chat from './pages/Chat.jsx'
import Profile from './pages/Profile.jsx'
import Home from './Pages/Home'
function App() {

  return (
   <Routes>

    <Route path='/' element={<Home/>}>

    <Route path='/assignment' element={<Assignment/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Route>

   </Routes>
  )
}

export default App
