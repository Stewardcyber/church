"use client"
import { useState } from "react";
import styles from "../../../styles/prayer.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Image from 'next/image';
import load from "../../../public/images/loader.gif"

const Page = () => {

  const [firstName,setfirstName]=useState('')
  const [lastName,setlastName]=useState('')
  const [email,setemail]=useState('')
  const [message,setmessage]=useState('')
  const [loading,setloading]=useState(false)
  const submithandler=async(e)=>{
    
    e.preventDefault()
     

    if(!firstName || !lastName || !email || !message){
      return toast.error("Plz Fill all details carefuly !",{
        position:"bottom-right"
      })
    }
    setloading(true)
    const res = await axios.post("/api", {
  name: `${firstName} ${lastName}`,
  email: "info@potterstemplechurch.or.tz", // Updated email address
  message: `Prayer Topic: ${message}`,
  typeofprayer: "Prayer Request"
});
  
    if(res.data.success){
      setloading(false)
      toast.success(`Your request for prayer is forwarded right away to the prayer team. Christians all over the Potters Temple Church Family will immediately join you in prayer`,{
        position:"bottom-right"
      });
    }else{
      setloading(false)

      toast.error(`${res.data.message}`,{
        position:"bottom-right"
      });
    }

    setfirstName('')
    setlastName('')
    setemail('')
    setmessage('')
  }
  return (
    <div className={styles.prayerContainer}>
      <h2 className={styles.sectionTitles}>SUBMIT YOUR PRAYER</h2>
      <p className={styles.description}>
      The Bible declares in Psalm 37:5 “Commit your way to the Lord, Trust also in Him, and He will 
answer your prayer.
      </p>
      <p className={styles.description}>
      When we pursue God in Spirit and Truth, He takes great pleasure in fulfilling our heart's 
desire.
      </p>

      <form className={styles.prayerForm}>
        <div className={styles.formGroup}>
          <label  className={styles.lbl} htmlFor="fname">First Name</label>
          <input onChange={(e)=>{setfirstName(e.target.value)}} className={styles.inp} value={firstName} type="text" id="fname" name="fname" />
        </div>
        <div className={styles.formGroup}>
          <label  className={styles.lbl} htmlFor="lname">Last Name</label>
          <input onChange={(e)=>{setlastName(e.target.value)}} className={styles.inp} value={lastName} type="text" id="lname" name="lname" />
        </div>
        <div className={styles.formGroup}>
          <label   className={styles.lbl} htmlFor="email">Your Email</label>
          <input onChange={(e)=>{setemail(e.target.value)}} className={styles.inp}  value={email} type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label   className={styles.lbl} htmlFor="message">Prayer Topic</label>
          <select  onChange={(e) => { setmessage(e.target.value) }} className={styles.select} value={message} id="message" name="message">
  <option value="">Select an option</option>
  <option value="Abuse">Abuse</option>
  <option value="Addictions">Addictions</option>
  <option value="Addictions for Loved One">Addictions for Loved One</option>
  <option value="Adoption">Adoption</option>
  <option value="Anxiety / Worry">Anxiety / Worry</option>
  <option value="Automobile">Automobile</option>
  <option value="Bankruptcy">Bankruptcy</option>
  <option value="Breakthrough">Breakthrough</option>
  <option value="Business">Business</option>
  <option value="Child Custody">Child Custody</option>
  <option value="Church">Church</option>
  <option value="Church Finances">Church Finances</option>
  <option value="Conception">Conception</option>
  <option value="Current World Situation">Current World Situation</option>
  <option value="Deliverance">Deliverance</option>
  <option value="Depression / Emotional">Depression / Emotional</option>
  <option value="Discouragements / Disappointments">Discouragements / Disappointments</option>
  <option value="Education">Education</option>
  <option value="Faith & Agreement">Faith & Agreement </option>
  <option value="Family">Family</option>
  <option value="Fear">Fear</option>
  <option value="Finances">Finances</option>
  <option value="General">General</option>
  <option value="Government">Government</option>
  <option value="Guidance / Wisdom">Guidance / Wisdom</option>
  <option value="Healing">Healing</option>
  <option value="Job">Job</option>
  <option value="Legal Situation">Legal Situation</option>
  <option value="Marriage Restoration">Marriage Restoration</option>
  <option value="My Home Church">My Home Church</option>
  <option value="My Ministry">My Ministry</option>
  <option value="Neighbor">Neighbor</option>
  <option value="Physical Ailment">Physical Ailment</option>
  <option value="Property and Provision">Property and Provision</option>
  <option value="Protection">Protection</option>
  <option value="Rebellious Children">Rebellious Children</option>
  <option value="Rent">Rent</option>
  <option value="Salvation">Salvation</option>
  <option value="Salvation for Children">Salvation for Children</option>
  <option value="Salvation for Loved One">Salvation for Loved One</option>
  <option value="Sexual Perversion">Sexual Perversion</option>
  <option value="Strength">Strength</option>
  <option value="Suicide">Suicide</option>
  <option value="Suicide for Love One">Suicide for Love One</option>
  <option value="Travel Mercies">Travel Mercies</option>
  <option value="Visa">Visa</option>
</select>
        </div>
        {loading?<Image src={load} className={styles.loader} />:<button type="submit" onClick={submithandler} className={styles.submitButton}>Send Message</button>}
      </form>
      
    
      <ToastContainer />
    </div>
  );
};

export default Page;
