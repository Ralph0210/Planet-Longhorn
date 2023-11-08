"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Layout from "../components/Layout";
import { wrap } from "@popmotion/popcorn";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import localFont from "next/font/local";
import { ParallaxText } from "../components/Marquees/Marquee1";
import { ParallaxText2 } from "../components/Marquees/Marquee2";
import { Fjalla_One } from "next/font/google";
import Image from "next/image";
import time from "../../public/time.svg";
import location from "../../public/location.svg";
import food from "../../public/food.svg";
import Himage1 from "../../public/hero_slider/1.JPG";
import Himage2 from "../../public/hero_slider/2.JPG";
import Himage3 from "../../public/hero_slider/3.JPG";
import Himage4 from "../../public/hero_slider/4.JPG";
import Himage5 from "../../public/hero_slider/5.JPEG";
import Himage6 from "../../public/hero_slider/6.JPG";
import Himage7 from "../../public/hero_slider/7.JPG";
import Himage8 from "../../public/hero_slider/8.JPG";
import Himage9 from "../../public/hero_slider/9.JPG";
import Himage10 from "../../public/hero_slider/10.JPG";

import Wimage1 from "../../public/whatWeDo/1.JPEG";
import Wimage2 from "../../public/whatWeDo/2.JPG";
import Wimage3 from "../../public/whatWeDo/3.jpg";

import AUimage1 from "../../public/au_image_gallery/1.JPG";
import AUimage2 from "../../public/au_image_gallery/2.JPG";
import AUimage3 from "../../public/au_image_gallery/3.jpg";
import AUimage4 from "../../public/au_image_gallery/4.jpg";
import AUimage5 from "../../public/au_image_gallery/5.JPG";
import AUimage6 from "../../public/au_image_gallery/6.jpeg";
import AUimage7 from "../../public/au_image_gallery/7.jpeg";
import AUimage8 from "../../public/au_image_gallery/8.jpeg";
import AUimage9 from "../../public/au_image_gallery/9.JPG";
import AUimage10 from "../../public/au_image_gallery/10.JPG";
import AUimage11 from "../../public/au_image_gallery/11.jpg";
import AUimage12 from "../../public/au_image_gallery/12.jpg";

import insta1 from "../../public/insta/insta1.jpg";

import josephine from "../../public/team/josephine.jpg";
import petar from "../../public/team/petar.jpg";
import komie from "../../public/team/komie.jpg";

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
    imageSrc: josephine,
    name: "Josephine",

    text: "I made some of my BEST FRIENDS in Planet Longhorn",
    bgcolor: "#FFC6C6",
    country: "Netherland",
  },
  {
    id: 1,
    imageSrc: petar,
    name: "Petar",
    text: "Me too",
    bgcolor: "#D6CABD",
    country: "Macedonia",
  },
  {
    id: 2,
    imageSrc: komie,
    name: "Komie",
    text: '"Helo"',
    bgcolor: "#BECAED",
    country: "Houston",
  },
];

const IMAGES = [
  {
    id: 0,
    imageSrc: Himage1,
    text: "Austin bouldering project",
  },
  {
    id: 1,
    imageSrc: Himage2,
    text: "Wurstfest",
  },
  {
    id: 2,
    imageSrc: Himage3,
    text: "white lies party",
  },
  {
    id: 3,
    imageSrc: Himage4,
    text: "boat party",
  },
  {
    id: 4,
    imageSrc: Himage5,
    text: "sixth street",
  },
];

const WHATWEDO = [
  {
    id: 0,
    imageSrc: Wimage1,
  },
  {
    id: 1,
    imageSrc: Wimage2,
  },
  {
    id: 2,
    imageSrc: Wimage3,
  },
];

const Home = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const [[imageCount2, direction2], setImageCount2] = useState([0, 0]);
  const [active, setActive] = useState("socials");
  const scrollContainerRef = useRef(null);

  // Reset the scroll position to 0 when 'active' changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [active]);

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

  const expand2 = {
    hidden: { opacity: 1, width: "30%" },
    visible: { opacity: 1, width: "50%" },
  };
  const expand3 = {
    hidden: { opacity: 1, width: "40%" },
    visible: { opacity: 1, width: "50%" },
  };

  const expand2Mobile = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const scroll = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
  };

  const controls = useAnimation();
  const [textToDisplay, setTextToDisplay] = useState([]);

  useEffect(() => {
    controls.start({ opacity: 0, x: 20 }); // Animate text out
    setTimeout(() => {
      switch (active) {
        case "socials":
          setTextToDisplay([
            AUimage1,
            "Even if you are shy",
            AUimage2,
            "Come Meet People Worldwide",
            AUimage3,
            "Explore Austin with Us",
          ]);
          break;
        case "sports":
          setTextToDisplay([
            AUimage5,
            "or just play casually",
            AUimage4,
            "Join Our serious IM team!",
            AUimage6,
            "come cheer for our games!",
          ]);
          break;
        case "meetings":
          setTextToDisplay([
            AUimage7,
            "enjoy our free pizza",
            AUimage8,
            "Learn other cultures from our members",
            AUimage9,
            "free pizza everywhere",
          ]);
          break;
        case "activities":
          setTextToDisplay([
            AUimage10,
            "we party at nighttime",
            AUimage11,
            "we party in the daytime",
            AUimage12,
            "we volunteer sometime",
          ]);
          break;
        default:
          setTextToDisplay("Default Text");
      }
      controls.start({ opacity: 1, x: 0 }); // Animate text in
    }, 300); // Adjust the delay as needed
  }, [active]);

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
                  backgroundPosition: "center",
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
              >
                <motion.div className={styles.heroImage}>
                  <Image
                    src={IMAGES[activeImageIndex].imageSrc}
                    sizes="100vh"
                    style={{
                      width: "auto",
                      height: "100%",
                      // objectFit: "cover",
                      // backgroundPosition:'50%'
                    }}
                  />
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
      <ParallaxText baseVelocity={-5} style={{ color: "#E9AC82" }}>
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
                    <Image
                      src={WHATWEDO[activeImageIndex2].imageSrc}
                      sizes="100vh"
                      style={{
                        width: "auto",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "1rem 0 0 1rem",
                      }}
                    />
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
          <li
            className={
              active === "socials" ? `${styles.active} ${styles.li}` : styles.li
            }
            value="socials"
            onClick={() => setActive("socials")}
          >
            Socials
          </li>
          <li
            className={
              active === "sports" ? `${styles.active} ${styles.li}` : styles.li
            }
            onClick={() => setActive("sports")}
            value="sports"
          >
            Sports
          </li>
          <li
            className={
              active === "meetings"
                ? `${styles.active} ${styles.li}`
                : styles.li
            }
            onClick={() => setActive("meetings")}
            value="meetings"
          >
            Meetings
          </li>
          <li
            className={
              active === "activities"
                ? `${styles.active} ${styles.li}`
                : styles.li
            }
            onClick={() => setActive("activities")}
            value="activities"
          >
            Activities
          </li>
        </ul>
        <div className={styles.au_image_gallery}>
          <AnimatePresence>
            <motion.div
              className={styles.au_image_container}
              key={active}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 0 }}
              transition={{ ease: "easeOut", duration: 0.8 }}
            >
              <motion.div
                className={styles.au_image_1}
                variants={expand2}
                initial="hidden"
                whileHover="visible"
                transition={{ ease: "easeOut", duration: 0.8 }}
              >
                <Image
                  src={textToDisplay[0]}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
                <h2 className={styles.au_image_h2}>{textToDisplay[1]}</h2>
              </motion.div>
              <motion.div
                className={styles.au_image_2}
                variants={expand3}
                initial="hidden"
                whileHover="visible"
                transition={{ ease: "easeOut", duration: 0.8 }}
              >
                <Image
                  src={textToDisplay[2]}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
                <h2 className={styles.au_image_h2}>{textToDisplay[3]}</h2>
              </motion.div>
              <motion.div
                className={styles.au_image_3}
                variants={expand2}
                initial="hidden"
                whileHover="visible"
                transition={{ ease: "easeOut", duration: 0.8 }}
              >
                <Image
                  src={textToDisplay[4]}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "1rem",
                  }}
                />
                <h2 className={styles.au_image_h2}>{textToDisplay[5]}</h2>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className={styles.au_image_gallery_mobile}
          ref={scrollContainerRef}
        >
          <motion.div
            variants={scroll}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.9 }}
          >
            <div className={styles.mobile_image_text_container}>
              <div className={styles.mobile_image}>
                <Image
                  src={textToDisplay[2]}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <motion.p
                className={styles.mobile_image_text}
                variants={expand2Mobile}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3 }}
                viewport={{ amount: 0.9 }}
              >
                {textToDisplay[3]}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={scroll}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.9 }}
          >
            <div className={styles.mobile_image_text_container}>
              <div className={styles.mobile_image}>
                <Image
                  src={textToDisplay[0]}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <motion.p
                className={styles.mobile_image_text}
                variants={expand2Mobile}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3 }}
                viewport={{ amount: 0.9 }}
              >
                {textToDisplay[1]}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={scroll}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            viewport={{ amount: 0.9 }}
          >
            <div className={styles.mobile_image_text_container}>
              <div className={styles.mobile_image}>
                <Image
                  src={textToDisplay[4]}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <motion.p
                className={styles.mobile_image_text}
                variants={expand2Mobile}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.3 }}
                viewport={{ amount: 0.9 }}
              >
                {textToDisplay[5]}
              </motion.p>
            </div>
          </motion.div>
        </div>
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
          <a
            className={styles.joinNow}
            target="-blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSePWZRsdPBlzB8T-2FO99-nZRwawLw4qEgNjHqjtJOpqIhsTw/viewform?usp=sf_link"
          >
            Join Now
          </a>
          <p>
            or follow us on{" "}
            <a
              target="-blank"
              href="https://www.instagram.com/planet.longhorn/"
              className={styles.animateCharcter}
            >
              instagram
            </a>
          </p>
        </div>
      </div>

      {/* become a member section */}
      <div className={styles.become_member_container}>
        <div className={styles.become_member_left_container}>
          <h3
            className={` ${Fjalla.className} ${styles.become_member_h3}`}
            style={{ color: "white" }}
          >
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
                className={styles.image}
              >
                {MEMBERS[activeImageIndex2].country}
                <motion.div
                  className={styles.become_member_image}
                  key={imageCount2}
                  custom={direction2}
                  variants={memberSliderVariants}
                  transition={{ duration: 2 }}
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
                    transition={{ duration: 2.5 }}
                    className={styles.member_name}
                  >
                    {MEMBERS[activeImageIndex2].name}
                  </motion.p>
                  <motion.p
                    custom={direction2}
                    key={imageCount2}
                    variants={memberSliderVariants}
                    className={`${styles.member_text} ${Georgia.className}`}
                    transition={{ duration: 3 }}
                  >
                    {MEMBERS[activeImageIndex2].text}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* up coming */}
      <div className={styles.upcomingContainer}>
        <ParallaxText2 baseVelocity={-5} className={styles.upcoming}>
          Up Coming
        </ParallaxText2>
        <div className={styles.instaContainer}>
          <Image
            href="https://www.instagram.com/p/CzU6cTzqsLK/?img_index=1"
            src={insta1}
            style={{ height: "auto", width: "100%" }}
          />
          {/* <p>Come to our general meetings and cultural presentation on Tuesday at 6:00pm!</p> */}
        </div>
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
