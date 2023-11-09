import React from 'react'
import Layout from '../components/Layout'
import styles from './page.module.css'
import localFont from 'next/font/local'
import { ParallaxText } from "../components/Marquees/Marquee1";
import Image from 'next/image';
import hero from "../../public/events/events.JPG";

const myFont = localFont({ src: "../DidotRegular.ttf" });

const page = () => {
  return (
    <Layout>
    <div className={styles.teamContainer}>
        <div className={styles.team_hero_container}>
          <div className={styles.team_hero_left_container}>
            <h2 className={myFont.className}>Events</h2>
            <ul className={styles.social_links}>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>LinkTree</li>
            </ul>
          </div>
          <div className={styles.team_hero_right_container}>
            <Image
              src={hero}
              alt="hero"
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div>
        <ParallaxText baseVelocity={-5} style={{ color: "#E9AC82" }}>
        Uniting Longhorns around the World.
      </ParallaxText>
        </div>
       <div className={styles.events_description}>
        Page still under construction. Come back later!
       </div>
      </div>
    </Layout>
  )
}

export default page
