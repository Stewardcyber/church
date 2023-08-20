"use client"
import React from 'react'
import styles from "../../styles/home.module.css"
import { useRouter } from 'next/navigation'

function Page() {
  const router=useRouter();

  return (
    <div className={`${styles.home} `}>
 <div className={styles.part_1}>
  <h1> Potters Temple Church.</h1>
  <h3>
  We live to worship, honor God and making disciples
  </h3>
  <div className={styles.buttons}>
    <button onClick={()=>{router.push("/about")}} className={styles.btn}>
      About Us
    </button>
    <button onClick={()=>{router.push("/prayer")}}  className={styles.btn}>
    Prayer
    </button>
  </div>
 </div>

      </div>
  )
}

export default Page
