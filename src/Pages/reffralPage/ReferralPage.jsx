import React from 'react'
import classes from "./ReferralPage.module.css"
function RefrralPage() {
  return (
    <>
    <div className={classes.section1}> </div>
    <div className={classes.section2}>

      <div className={classes.refer}>
      <span className={classes.refer_code}>Your Referral Code </span>
    <span className={classes.refer_box}>EDCH54</span>
      </div>
      <div className={classes.balance}>
        <span className={classes.balance_label}>Wallet Balance</span>
        <span className={classes.balance_amount}>₹ 500</span>
      </div>
    </div>
    </>
  )
}

export default RefrralPage