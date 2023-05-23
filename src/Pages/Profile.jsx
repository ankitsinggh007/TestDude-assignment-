import React from 'react'

import classes from './Profile.module.css'
import Tooltip from '../components/Tooltip/Tooltip'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'
import { NavLink } from 'react-router-dom'
function Profile() {


    const user_details={
        wallet_Balance:500,
        total_Referrals:7,
        referral_Earning:`2,500`,
        referral_code:`EDCH54`
    }

    const instruction=[{
        icon:icon1,
        question:`Invite your Friends`,
        answer:`Share the link tutedude.com with
        your friends`,
    },
    {
        icon:icon2,
        question:`Friend purchases any course`,
        answer:`Using your REFERRAL CODE in the payments page`,
    },
    {
        icon:icon3,
        question:`You get ₹ 200 as referral money`,
        answer:`On total purchase the friend makes, into your wallet`,
    },
    {
        icon:icon4,
        question:`Your Friend gets ₹ 200 Off `,
        answer:`On his overall fee on successful purchase using your referral code `,
    },
    {
        icon:icon5,
        question:`Transfer money from wallet`,
        answer:`When the wallet balance reaches
        ₹200 or more, you can withdraw it`,
    },
]




  return (
    <div className={classes.main} >

        <div className={classes.section1}>
            <span>location to somewhere</span>
        </div>        
        

        <div className={classes.section2}>
            <div className={classes.container}>
                <div className={classes.item}>
                    <span className={classes.label}>Referral Earning</span>
                    <span className={classes.value}>₹ {user_details.referral_Earning}</span>
                </div>
                <div className={classes.item}>
                    <span className={classes.label}>Total Referrals</span>
                    <span className={classes.value}>{user_details.total_Referrals}</span>
                </div>
                <div className={classes.item}>
                    <span className={classes.label}>Wallet Balance</span>
                    <span className={classes.value}>₹ {user_details.wallet_Balance}</span>
                </div>
                <button className={classes.btn}>
                Withdraw Balance
                </button>

            </div>

            <div className={classes.container1}>
                <span className={classes.label}>Your Referral Code </span>
                <span className={classes.value}>
                    {user_details.referral_code}

                </span>

            </div>

        </div>

        <div className={classes.section3}>

            <span className={classes.title}>How does it work ?</span>
            <div className={classes.container1}>

            {

                instruction.map((ele,index)=>{
                    return(
                        <Tooltip key={index} label={ele}/>
                    )
                })
            }



            </div>
        </div>

        <div className={classes.section4}>

            <NavLink to ='/referandearn'>Friends Who Enrolled</NavLink>
            
            <NavLink to ='/terms'>Terms & Conditions</NavLink>

        </div>






    </div>
  )
}

export default Profile