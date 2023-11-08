import React from 'react'
import './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import logo from '../../../public/logo.png'
import localFont from 'next/font/local'

const myFont = localFont({ src: './DidotRegular.ttf' })

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={myFont.className}>Copyright © 2023 Planet Longhorn. All Rights Reserved.</p>
      <div className={styles.leftContainer}>
        <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" sizes="100vw" style={{width:'100%', height:'auto'}}/>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <ul>
          Navigation
          <li>
            <Link href="#" className={myFont.className}>Home</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>Events</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>Sports</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>People</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>Galleries</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>Join</Link>
          </li>
        </ul>

        <ul>
          Contact Us
          <li>
            <Link href="#" className={myFont.className}>Instagram</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>Linktree</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>WhatsApp</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>GroupMe</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>Email</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>Planet Fest Instagram</Link>
          </li>
          <li>
            <Link href="#" className={myFont.className}>Hornslink</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer