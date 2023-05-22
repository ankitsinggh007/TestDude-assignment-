import React from 'react'
import classes from "./Tooltip.module.css"

function Tooltip({label}) {
    console.log(label,"label")
  return (
    <div className={classes.modal}>
            <span className={classes.icon} style={{backgroundImage:`url(${label.icon})` }}></span>
           <span className={classes.sample}>
           <span className={classes.question}>{label.question}</span>
            <span className={classes.ans}>{label.answer}</span>
           </span>
        </div>
  )
}

export default Tooltip