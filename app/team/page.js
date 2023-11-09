"use client";
import React, { useState } from "react";
import Layout from "../components/Layout";
import localFont from "next/font/local";
import styles from "./page.module.css";
import hero from "../../public/team/hero.jpg";
import Image from "next/image";
import { TEAM } from "./team";
import JoinButton from "../components/JoinButton/JoinButton";
import { Icon } from "@iconify/react";
import { ParallaxText } from "../components/Marquees/Marquee1";

const myFont = localFont({ src: "../DidotRegular.ttf" });

const Page = () => {
  const [currentMember, setCurrentMember] = useState(0);

  // Function to handle clicking the "Next" button
  const handleNextClick = () => {
    // Update the currentMember index to the next one
    setCurrentMember((prevIndex) => (prevIndex + 1) % TEAM.length);
  };

  // Function to handle clicking the "Previous" button
  const handlePreviousClick = () => {
    // Update the currentMember index to the previous one
    setCurrentMember(
      (prevIndex) => (prevIndex - 1 + TEAM.length) % TEAM.length
    );
  };

  const transformValue = `translateX(-${currentMember * 36.5}rem)`;
  return (
    <Layout>
      <div className={styles.teamContainer}>
        <div className={styles.team_hero_container}>
          <div className={styles.team_hero_left_container}>
            <h2 className={myFont.className}>Team</h2>
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
        {/* <div className={styles.team_description}>
          <h3>Teams Page</h3>
          <p>
            Planet Longhorn is a student-led organization at The University of
            Texas at Austin. Our mission is clear: create a global family that
            transcends borders. Join us and be part of a worldwide network of
            friends and memories that last a lifetime.
          </p>
        </div> */}

        <div className={styles.team_carousel_container}>
          <div className={styles.team_carousel_firstDiv}>
            <h3>Meet The team</h3>

            <div className={styles.team_carousel_button}>
              <button onClick={handlePreviousClick}>
                <Icon icon="bxs:up-arrow" rotate={3} />
              </button>
              <button onClick={handleNextClick}>
                <Icon icon="bxs:up-arrow" rotate={1} />
              </button>
            </div>
          </div>

          <div className={styles.team_carousel}>
            {TEAM.map((member, index) => {
              return (
                <div
                  key={index}
                  style={{
                    transform: transformValue,
                    transition: "0.3s ease-in-out",
                  }}
                  className={styles.team_carousel_member}
                >
                  <div className={styles.team_carousel_member_photo}>
                    <Image
                      src={member.imageSrc}
                      alt="member"
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "1rem",
                      }}
                    />
                  </div>
                  <p>{member.job}</p>
                  <span>{member.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ width: "20rem", paddingLeft:'1.4%' }}>
          <JoinButton />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
