import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/arrow.png'
import { NavLink } from 'react-router-dom';
function navbar() {
  return (
    <div className={classes.navbar}>
        <span className={classes.logo}>
        <img src={logo} alt="TuteDude" />
        </span>
       <div className={classes.section}>
       <NavLink to='/assignmnet' className={({isActive})=>isActive?classes.active:classes.link} >My Assignment</NavLink>
        <NavLink to='/chat' className={({isActive})=>isActive?classes.active:classes.link}  >Chat with Mentor</NavLink>
        <NavLink to='/profile' className={({isActive})=>isActive?classes.active:classes.link} >ProfileName</NavLink>
      <div className={classes.dropdown}>my assignment 
      
      </div>
      <img src={arrow} ></img>
       </div>

    </div>
  )
}

export default navbar