"use client"
import React from 'react';
import styles from '../../../styles/partner.module.css';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Image from 'next/image';
import load from "../../../public/images/loader.gif"
const Partner = () => {
  
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [message,setmessage]=useState('')
  const [loading,setloading]=useState(false)
  const submithandler=async(e)=>{
    
    e.preventDefault()
     

    if(!name || !email || !message){
      return toast.error("Plz Fill all details carefuly !",{
        position:"bottom-right"
      })
    }
    setloading(true)
    const res=await axios.post("/api",{
      name,email,message:`Seed :${message}`,"typeofprayer":"Partner Request"
    })
  
    if(res.data.success){
    setloading(false)
      toast.success(`Thank you for your support may our Heavenly Father bless you. Psalms 20:1-5`,{
        position:"bottom-right"
      });
    }else{
    setloading(false)
      toast.error(`${res.data.message}`,{
        position:"bottom-right"
      });
    }

    setname('')
    setemail('')
    setmessage('')
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>PARTNER WITH US</h1>

      <div className={styles.partnerContainer}>

        <p className={styles.partnerDescription}>
          Our calling is divine, our purpose is urgent, Together with you, we can win the world for Christ.
          Your generous giving will serve the purpose, and the God we serve will surely bless you.
          (Psalms 20:1-5)
        </p>
 

        <form className={styles.prayerForm}>
        <div className={styles.formGroup}>
          <label  className={styles.lbl} htmlFor="name">Your Name</label>
          <input onChange={(e)=>{setname(e.target.value)}} className={styles.inp} value={name} type="text" id="name" name="name" />
        </div>
        <div className={styles.formGroup}>
          <label   className={styles.lbl} htmlFor="email">Your Email</label>
          <input onChange={(e)=>{setemail(e.target.value)}} className={styles.inp}  value={email} type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label   className={styles.lbl} htmlFor="message">Your Seed</label>
          <select onChange={(e) => { setmessage(e.target.value) }} className={styles.select} value={message} id="message" name="message">
  <option value="">Select an option</option>
  <option value="Crusades">Crusades</option>
  <option value="Church Planting">Church Planting</option>
  <option value="The Needy, Poor &amp; the Vulnerable">The Needy, Poor &amp; the Vulnerable</option>
</select>
        </div>
        {loading?<Image src={load} className={styles.loader} />:<button type="submit" onClick={submithandler} className={styles.submitButton}>Send Message</button>}
      </form>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Partner;

