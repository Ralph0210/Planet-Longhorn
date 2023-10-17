'use client'

import React, {useState, useEffect} from 'react'
import styles from './page.module.css'
import Layout from '../components/Layout'
import { wrap } from "@popmotion/popcorn"
import { motion, AnimatePresence } from "framer-motion"
import localFont from 'next/font/local'

import { IMAGES } from "./Images"



const Didot = localFont({ src: './didotBold.otf' })

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const Home = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])

  const activeImageIndex = wrap(0, IMAGES.length, imageCount)

  const swipeToImage = swipeDirection => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
  }

  const dragEndHandler = dragInfo => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      swipeToImage(1); // Move to the next image
    }, 3000); // Change image every 2 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [imageCount]);

  return (
    <Layout>
    <main className={styles.main}>
    <h1 className={`${styles.title} ${Didot.className}`}>Planet <br/>Longhorn</h1>
      <div className="slider-container">
        <div className="slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image"
            />
          </AnimatePresence>
        </div>
      </div>
      <div className='hero_left_container'>
        <p className={styles.heroText}>At</p>
      </div>
    </main>
    </Layout>
  )
}

export default Home