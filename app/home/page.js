"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Layout from "../components/Layout";
import { wrap } from "@popmotion/popcorn";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { ParallaxText } from "../components/Marquees/Marquee1";
import { ParallaxText2 } from "../components/Marquees/Marquee2";
import { Fjalla_One } from "next/font/google";
import Image from "next/image";
import time from "../../public/time.svg";
import location from "../../public/location.svg";
import food from "../../public/food.svg";
import Himage1 from '../../public/hero_slider/1.JPG'
import Himage2 from '../../public/hero_slider/2.JPG'
import Himage3 from '../../public/hero_slider/3.JPG'
import Himage4 from '../../public/hero_slider/4.JPG'
import Himage5 from '../../public/hero_slider/5.JPEG'
import Himage6 from '../../public/hero_slider/6.JPG'
import Himage7 from '../../public/hero_slider/7.JPG'
import Himage8 from '../../public/hero_slider/8.JPG'
import Himage9 from '../../public/hero_slider/9.JPG'
import Himage10 from '../../public/hero_slider/10.JPG'

import Wimage1 from '../../public/whatWeDo/1.JPEG'
import Wimage2 from '../../public/whatWeDo/2.JPG'
import Wimage3 from '../../public/whatWeDo/3.jpg'

import josephine from '../../public/team/josephine.jpg'
import petar from '../../public/team/petar.jpg'
import komie from '../../public/team/komie.jpg'

// import { IMAGES } from "./Images";
// import { MEMBERS } from "./member";

const Didot = localFont({ src: "./didotBold.otf" });
const Fjalla = Fjalla_One({ weight: "400", subsets: ["latin"] });
const Georgia = localFont({ src: "./georgia.ttf" });

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const textSliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0,
  }),
};

const memberSliderVariants = {
  incoming: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    scale: 1,
    opacity: 0,
  }),
  active: { y: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    y: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const MEMBERS = [
  {
    id: 0,
    imageSrc:
      josephine,
      name: 'Josephine',
      
      text: 'I made some of my BEST FRIENDS in Planet Longhorn',
      bgcolor: '#FFC6C6',
      country: "Netherland"
  },
  {
    id: 1,
    imageSrc:
      petar,
      name: 'Petar',
      text: 'Me too',
      bgcolor: '#D6CABD',
      country: "Macedonia",
  },
  {
    id: 2,
    imageSrc:
      komie,
      name: 'Komie',
      text: '"I did not get arrested"',
      bgcolor: '#BECAED',
      country:"Houston"
  }
]

const IMAGES = [
  {
    id: 0,
    imageSrc:
      Himage1,
      text: 'Austin bouldering project'
  },
  {
    id: 1,
    imageSrc:
   Himage2,
      text: 'Wurstfest'
  },
  {
    id: 2,
    imageSrc:
     Himage3,
      text: 'white lies party'
  },
  {
    id: 3,
    imageSrc:
      Himage4,
      text: 'boat party'
  },
  {
    id: 4,
    imageSrc:
     Himage5,
      text: 'sixth street'
  }
]

const WHATWEDO = [
  {
    id: 0,
    imageSrc:
      Wimage1,
  },
  {
    id: 1,
    imageSrc:
      Wimage2,
  },
  {
    id: 2,
    imageSrc:
      Wimage3,
  },
]

const Home = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const [[imageCount2, direction2], setImageCount2] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);
  const activeImageIndex2 = wrap(0, MEMBERS.length, imageCount2);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };
  const swipeToImage2 = (swipeDirection) => {
    setImageCount2([imageCount2 + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      swipeToImage(1); // Move to the next image
    }, 3000); // Change image every 2 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [imageCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      swipeToImage2(1); // Move to the next image
    }, 10000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [imageCount2]);

  const expand = {
    hidden: { opacity: 1, width: "0%" },
    visible: { opacity: 1, width: "100%" },
  };

  return (
    <Layout>
      {/* hero section */}
      <div className={styles.hero}>
        <h1 className={`${styles.title} ${Didot.className}`}>
          Planet <br />
          Longhorn
        </h1>
        <div className={styles.slider_container}>
          <div className={styles.slider}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={imageCount}
                style={{
                  backgroundImage: IMAGES[activeImageIndex].imageSrc,
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
                className={styles.image}
              ><motion.div className={styles.heroImage}>
                <Image src={IMAGES[activeImageIndex].imageSrc} sizes="100vh" style={{width:'auto', height:'100%', objectFit: 'cover'}}/>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.hero_right_container}>
          <p className={styles.heroText}>At</p>
          <div className={styles.slider_text_container}>
            <div className={styles.text_slider}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.p
                  key={imageCount}
                  style={{
                    backgroundColor: "#C15002",
                  }}
                  custom={direction}
                  variants={textSliderVariants}
                  initial="incoming"
                  animate="active"
                  exit="exit"
                  transition={sliderTransition}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                  // className={styles.image}
                  className={styles.imageText}
                >
                  {IMAGES[activeImageIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <ul className={styles.social_links}>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>LinkTree</li>
          </ul>
        </div>
      </div>
      <ParallaxText
        baseVelocity={-5}
        style={{ fontSize: "6.4rem", color: "#E9AC82" }}
      >
        Uniting Longhorns around the World.
      </ParallaxText>

      {/* About us section */}

      <div className={styles.about_us_container}>
        <div className={styles.about_us_left_container}>
          <h3 className={` ${Fjalla.className} ${styles.about_us_h3}`}>Our</h3>
          <h2 className={` ${Fjalla.className} ${styles.about_us_h2}`}>
            Vision
          </h2>
          <p className={` ${Georgia.className} ${styles.about_us_p}`}>
            Planet Longhorn is a student-led organization at The University of
            Texas at Austin. Our mission is clear:{" "}
            <span className={styles.importantText}>
              create a global family that transcends borders.
            </span>{" "}
            <br />
            <br />
            Join us and be part of a worldwide network of friends and memories
            that last a lifetime.
          </p>
        </div>
        <div className={styles.about_us_right_container}>
          <h4 className={` ${Fjalla.className} ${styles.about_us_h4}`}>
            What We Do
          </h4>
          <p className={` ${Georgia.className} ${styles.about_us_p2}`}>
            We help international students with{" "}
            <span className={styles.importantText}>
              housing and transportation while serving as a vibrant social hub.
            </span>{" "}
            From thrilling adventures in and around Texas to celebrating
            American traditions.
          </p>
          <div className={styles.slider_container_about_us}>
            <div className={styles.slider_about_us}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={imageCount2}
                  style={{
                    backgroundImage: `url(${WHATWEDO[activeImageIndex2].imageSrc})`,
                  }}
                  custom={direction2}
                  variants={textSliderVariants}
                  initial="incoming"
                  animate="active"
                  exit="exit"
                  transition={sliderTransition}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                  className={styles.image}
                >
                  <motion.div className={styles.heroImage}>
                    <Image src={WHATWEDO[activeImageIndex2].imageSrc} sizes="100vh" style={{width:'auto', height:'100%', objectFit: 'cover', borderRadius:"1rem 0 0 1rem"}}/>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* about us image gallery */}
      <div className={styles.au_image_gallery_container}>
        <ul className={styles.au_image_list}>
          <li className={styles.li}>Socials</li>
          <li className={styles.li}>Sports</li>
          <li className={styles.li}>Meetings</li>
          <li className={styles.li}>Activities</li>
        </ul>
        <div className={styles.au_image_gallery}></div>
      </div>


      {/* membership */}
      <div className={styles.membership_container}>
      <h4 className={` ${Fjalla.className} ${styles.become_member_h4}`}>
            If you are into those...
          </h4>
          <h3 className={` ${Fjalla.className} ${styles.become_member_h3}`}>
            Become a Member!
          </h3>
        <div className={styles.benefits}>
          <h5 className={Fjalla.className}>Membership Benefits</h5>
          <ul className={Georgia.className}>
            <li>Free or discounted rates on all events</li>
            <li>
              Get points for coming to events, top 10 members get free dinner
              with officers before formal
            </li>
            <li>Explore Austin and meet people from all around the world</li>
          </ul>
        </div>
        <div className={styles.pricing}>
          <h5 className={Fjalla.className}>Membership Pricing</h5>
          <ul className={Georgia.className}>
            <li>one semester: $35</li>
            <li>one year: $70</li>
          </ul>
        </div>
        <div className={styles.joinButton}>
          <a>Join Now</a>
          <p>
            or follow us on <a>instagram</a>
          </p>
        </div>
      </div>

      {/* become a member section */}
      <div className={styles.become_member_container}>
        <div className={styles.become_member_left_container}>
        <h3 className={` ${Fjalla.className} ${styles.become_member_h3}`} style={{color: 'white'}}>
            Meet Our Top Members!
          </h3>
        </div>
        <div className={styles.become_member_slider_container}>
          <div className={styles.become_member_slider}>
            <AnimatePresence initial={false} custom={direction2}>
              <motion.div
                key={imageCount2}
                style={{
                  backgroundColor: MEMBERS[activeImageIndex2].bgcolor,
                }}
                custom={direction2}
                variants={memberSliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className={styles.image}
              >{MEMBERS[activeImageIndex2].country}
                <motion.div
                className={styles.become_member_image}
                key={imageCount2}
                custom={direction2}
                variants={memberSliderVariants}
                transition={{duration: 2}}
              >
                <Image
                priority
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  src={MEMBERS[activeImageIndex2].imageSrc}
                />
                
                <motion.p
                custom={direction2}
                key={imageCount2}
                variants={memberSliderVariants}
                transition={{duration:2.5}}
                className={styles.member_name}
                >{MEMBERS[activeImageIndex2].name}</motion.p>
                <motion.p
                custom={direction2}
                key={imageCount2}
                variants={memberSliderVariants}
                className={`${styles.member_text} ${Georgia.className}`}
                transition={{duration:3}}>{MEMBERS[activeImageIndex2].text}</motion.p>
              </motion.div>
              </motion.div>
              
            </AnimatePresence>
          </div>
        </div>
      </div>


      {/* up coming */}
      <div>
        <ParallaxText2 baseVelocity={-5} className={styles.upcoming}>
          Up Coming
        </ParallaxText2>
      </div>

      {/* gm */}
      <div className={styles.gm_container}>
        <h4 className={` ${Fjalla.className} ${styles.gm_h4}`}>
          Come to Our General Meeting!
        </h4>
        <div className={styles.gm_details}>
          <div className={styles.icon_text}>
            <Image src={time} />
            <p>Tuesday 6pm</p>
          </div>
          <motion.div
            variants={expand}
            initial="hidden"
            whileInView="visible"
            className={styles.line}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <div className={styles.icon_text}>
            <Image src={location} />
            <p>UTC 0.104</p>
          </div>
          <motion.div
            variants={expand}
            initial="hidden"
            whileInView="visible"
            className={styles.line}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <div className={styles.icon_text}>
            <Image src={food} />
            <p>Free Food</p>
          </div>
          <motion.div
            variants={expand}
            initial="hidden"
            whileInView="visible"
            className={styles.line}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
