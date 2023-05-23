import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Assignment from './pages/Assignment.jsx'
import Chat from './pages/Chat.jsx'
import Profile from './pages/Profile.jsx'
import Home from './Pages/Home'
import RefrralPage from './Pages/ReffralPage/ReferralPage'
import Card from './components/Card/Card'
function App() {

  return (
  //  <Routes>

  //   <Route path='/' element={<Home/>}>

  //   <Route path='/assignment' element={<Assignment/>}/>
  //   <Route path='/chat' element={<Chat/>}/>
  //   <Route path='/profile' element={<Profile/>}/>
  //   <Route path='/referandearn' element={<RefrralPage/>}/>
  //   </Route>

  //  </Routes>
  <Card></Card>
  )
}

export default App
