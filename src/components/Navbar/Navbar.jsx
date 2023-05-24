import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/arrow.png'
function navbar() {
  console.log(arrow,"arrow");
  return (
    <div className={classes.navbar}>
        <span className={classes.logo}>
        <img src={logo} alt="TuteDude" />
        </span>
       <div className={classes.section}>
       <span  >My Assignment</span>
        <span >Chat with Mentor</span>
        <span >ProfileName</span>
      <div className={classes.dropdown}>my assignment 
      
      </div>
      <img src={arrow} ></img>
       </div>

    </div>
  )
}

export default navbar