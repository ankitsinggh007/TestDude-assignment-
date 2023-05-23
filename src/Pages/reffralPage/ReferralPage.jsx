import React from 'react'
import classes from "./ReferralPage.module.css"
function RefrralPage() {
  return (
    <div className={classes.main}>
    <div className={classes.section1}> </div>
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
      <span className={classes.label}>Friends who enrolled<span style={{color:'#626262',fontWeight: '100'}}>(3)</span> </span>
      
      <div className={classes.container}>

      </div>
    </div>
    </div>
  )
}

export default RefrralPage