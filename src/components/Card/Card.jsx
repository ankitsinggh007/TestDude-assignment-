import React from 'react'

import classes from "./Card.module.css"
import { formatDate } from '../../utils/DateFormate';
function Card({Enrolled}) {
  const skill=['java','ui/ux','java','python','React.js','Node.js','Express.js','Mongo db','Javascript','HTML','CSS3'];
  
 
  
  
  
  
  return (
    <div className={classes.main}>
        <div className={classes.header}>
            <span className={classes.name} >{Enrolled.name}</span>
            <span className={classes.date}>{formatDate(Enrolled.date)}</span>
        </div>
        <div className={classes.subContainer}>
          <span className={classes.title}>Courses Enrolled({Enrolled.course.length})</span>
          <div className={classes.tag}>
            {
              skill.map((ele,index)=>{
                return(
                  <p key={index}>{ele}</p>
                )
              })

            }
          </div>

        </div>
        <div className={classes.footer} >
          <span className={classes.label}>Referral Amount </span>
          <span className={classes.value}>₹185 </span>
        </div>

    </div>
  )
}

export default Card