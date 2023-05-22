import React from 'react'
import classes from './Profile.module.css'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'
import Tooltip from '../components/Tooltip/Tooltip'
import { Link } from 'react-router-dom'
function Profile() {

    const instruction=[
        {
        icon:icon1,
        question:'Invite your Friends',
        answer:`Share the link tutedude.com with
        your friends`
    },
    {
        icon:icon2,
        question:'You get ₹ 200 as referral money',
        answer:`On total purchase the friend makes, into your wallet`
    },
    {
        icon:icon3,
        question:'Transfer money from wallet',
        answer:`When the wallet balance reaches
        ₹200 or more, you can withdraw it`
    },
    {
        icon:icon4,
        question:`Friend purchases any course`,
        answer:`Using your REFERRAL CODE in the payments page`
    },
    {
        icon:icon5,
        question:`Your Friend gets ₹ 200 Off `,
        answer:`On his overall fee on successful purchase using your referral code `
    }
]



  return (
<div>
<div className={classes.route}>UI/UX Refer & Earn </div>

 <div className={classes.section}>
    <div className={classes.refTag}>
    <div className={classes.referral}>
    <div className={classes.earning}><span>Referral Earning</span><span className={classes.amount}>$2700</span></div>
    <div className={classes.earning}><span>Total Referrals</span><span className={classes.amount}>1</span></div>
    <div className={classes.earning}><span>Wallet Balance</span><span className={classes.amount}>$200</span></div>
    </div>
    <button className={classes.btn}>Withdraw Balance</button>
    </div>
    
    <div className={classes.referral_box}>

        <span>Your Referral Code </span>
        <span className={classes.referral_input} ></span>

    </div>


</div>   

<div className={classes.demo}>

    <span className={classes.title}>How does it work ?</span>

    <div className={classes.tooltip}>
        {
            instruction.map((ele,index)=>{
                return(
                    <Tooltip key={index} label={ele}/>
                )
            })
        }

    </div>

</div>
<br/>
<br/>

<div className={classes.links}>
<Link to='/referandearn' >Friends Who Enrolled</Link>
<br/>
<Link to='/' >Terms & Conditions</Link>
</div>
</div>
  )
}

export default Profile