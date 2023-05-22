import React from 'react'
import classes from './Navbar.module.css'
import logo from '../assets/logo.svg'
function navbar() {
  return (
    <div className={classes.navbar}>
        <span className={classes.logo}>
        <img src={logo} alt="TuteDude" />
        </span>
       <div className={classes.section}>
       <span  >My Assignment</span>
        <span >Chat with Mentor</span>
        <span >ProfileName</span>

       </div>

    </div>
  )
}

export default navbar