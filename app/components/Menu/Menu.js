import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import { scrollToElement } from "../../utils/scroll";

const Menu = () => {
  return (
    <div>
      <div className={styles.footerLinks}>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/sports">Sports</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li
            // onClick={() => scrollToElement("donation")}
            style={{ cursor: "pointer" }}
          >
            <Link href="/galleries">Galleries</Link>
          </li>
          <li
            // onClick={() => scrollToElement("footer")}
            style={{ cursor: "pointer" }}
          ><Link href="/#footer">Contact Us</Link>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
