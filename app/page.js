'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import logo from '../public/logo.png'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'



export default function Home() {
const router = useRouter();
  const text1 = "Welcome to"
  const text2 =" Planet Longhorn."
  const text3 =  "The Largest International and Exchange Student Organization at the"
  const text4 = " University of Texas at Austin"
  const staggerIn = {
    hidden: {
      opacity: 0,
    },
    visible:{
      opacity: 1,
    }
  }

    // Add a useEffect to redirect after 5 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        router.push('/home'); // Redirect to /home
      }, 5000);
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);


  return (
    <main className={styles.main}>
<div className={styles.logoContainer}>
<Image quality={100} src={logo} alt='logo' style={{
            width: "100%",
            height: "auto",
          }}/>
</div>
<div > 
  <motion.span initial='hidden' animate='visible' transition={{staggerChildren: 0.03}} className={styles.welcomeText}>
    {text1.split("").map((char) => (
      <motion.span variants={staggerIn} className={styles.char}>{char}</motion.span>
    ))}
    {text2.split("").map((char) => (
      <motion.span className={styles.primary} variants={staggerIn} >{char}</motion.span>
    ))}
    <br/>
    {text3.split("").map((char) => (
      <motion.span variants={staggerIn} className={styles.char}>{char}</motion.span>
    ))}
    {text4.split("").map((char) => (
      <motion.span variants={staggerIn} className={styles.primary}>{char}</motion.span>
    ))}
  </motion.span>
</div>
    </main>
  )
}
