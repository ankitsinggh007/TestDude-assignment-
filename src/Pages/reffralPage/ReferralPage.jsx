import React from 'react'
import classes from "./ReferralPage.module.css"
import Card from '../../components/Card/Card'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Path from '../../components/Path.jsx'
import {AiOutlineArrowLeft} from 'react-icons/ai'
function RefrralPage() {
  const Enrolled=[
    {
    name:`Dhiraj Saxsena`,
    course:['UI/UX','Photoshop','Illustrator','Python','MERN','Java'],
    date:'14/09/22',
    referral_amount:185
  },
  {
    name:`Subhash Mishra`,
    course:['UI/UX','Photoshop','Illustrator','Python','MERN','Java','C++'],
    date:'15/09/22',
    referral_amount:485
  },
  {
    name:`Prafull Kumar`,
    course:['UI/UX','Photoshop','Illustrator','Python','MERN','Java','C++'],
    date:'15/09/22',
    referral_amount:485
  },
  {
    name:`Prafull Kumar`,
    course:['UI/UX','Photoshop','Illustrator','Python','MERN','Java','C++'],
    date:'15/09/22',
    referral_amount:485
  },
  
]
  const navigate=useNavigate();

const location=useLocation();
  return (
    <div className={classes.main}>
      <Path path={location.pathname}/>
      <button className={classes.btn} onClick={()=>navigate(-1)}><AiOutlineArrowLeft style={{fontWeigh:"2px",marginRight:"5px"}}/>  go back</button>
    <div className={classes.section2}>

      <div className={classes.container1}>
      <span className={classes.label}>Your Referral Code </span>
    <span className={classes.value}>EDCH54</span>
      </div>
      <div className={classes.container2}>
        <div className={classes.subContainer}>
        <span className={classes.item}>Wallet Balance</span>
        <span className={classes.value}>₹ 500</span>
        </div>
      </div>
    </div>

    <div className={classes.section3}>
      <span className={classes.label}>Friends who enrolled<span style={{color:'#626262',fontWeight: '100'}}>({Enrolled.length})</span> </span>
      
      <div className={classes.container} >
    {
      Enrolled.map((ele,index)=>{
        return(
          <Card key={index}  Enrolled={ele}/>
        )
      })
    }
      </div>
    </div>

    <div className={classes.section4}>
      <NavLink to='/terms' className={({isActive})=>isActive?classes.active:classes.link} >Terms and condition</NavLink>
    </div>
    </div>
  )
}

export default RefrralPage