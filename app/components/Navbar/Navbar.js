'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import styles from './Navbar.module.css'
import { motion } from 'framer-motion'
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon'
import localFont from 'next/font/local'
import Menu from '../Menu/Menu'
import { scrollToElement } from '../../utils/scroll'

const myFont = localFont({ src: './DidotRegular.ttf' })

const Navbar = () => {
  const pathname = usePathname();
  const [isChecked, setIsChecked] = useState(false);
  const [active, setActive] = useState("");
  

  return (
    <div className={`${styles.navbarContainer} ${myFont.className}`}>
    <div className={styles.logoContainer}>
      <Image
        src={logo}
        alt="logo"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
    <div className={styles.nav}>
      <nav>
        <ul className={styles.ul}>
          <li
            className={`${styles.li} ${
              pathname == "/home" ? styles.homeactive : ""
            }`}
            onClick={() => setActive("home")}
          >
            <Link href="/home" className={styles.link}>
              Home
            </Link>
          </li>
          <li
            className={`${styles.li} ${
              pathname == "/team" ? styles.eventsactive : ""
            }`}
            onClick={() => setActive("team")}
          >
            <Link href="/team" className={styles.link}>
              Team
            </Link>
          </li>
          <li
            className={`${styles.li} ${
              pathname == "/events" ? styles.peopleactive : ""
            }`}
            onClick={() => setActive("events")}
          >
            <Link href="/events" className={styles.link}>
              Events
            </Link>
          </li>
          {/* <li
            className={`${styles.li} ${
              pathname == "/sports" ? styles.iniactive : ""
            }`}
            onClick={() => setActive("sports")}
          >
            <Link href="/sports" className={styles.link}>
              Sports
            </Link>
          </li> */}
          {/* <li
             className={`${styles.li} ${
              pathname == "/galleries" ? styles.eventsactive : ""
            }`}
            onClick={() => setActive("galleries")}
          >
            <a href="/galleries" className={styles.link}>
            Galleries
            </a>
          </li> */}
          <li
            className={`${styles.li} ${styles.link}`}
            onClick={() => scrollToElement("footer")}
            style={{ cursor: "pointer" }}
          >
            Contact Us
          </li>

          <motion.li whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }} 
              // className={`${styles.li}`}
              >
            <motion.a
              target="-blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSePWZRsdPBlzB8T-2FO99-nZRwawLw4qEgNjHqjtJOpqIhsTw/viewform?usp=sf_link"
              className={styles.joinLink}
            >
              Join
            </motion.a>
          </motion.li>
        </ul>
      </nav>
    </div>

    <nav className={styles.mobileNav}>
            <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
              target="-blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSePWZRsdPBlzB8T-2FO99-nZRwawLw4qEgNjHqjtJOpqIhsTw/viewform?usp=sf_link"
              className={styles.joinLink}
            >
              Join
            </motion.a>
      <HamburgerIcon isChecked={isChecked} setIsChecked={setIsChecked} />
      {isChecked && <Menu />}
    </nav>
  </div>
  )
}

export default Navbar