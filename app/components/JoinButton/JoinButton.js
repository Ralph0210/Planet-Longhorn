import React from 'react'
import styles from './joinButton.module.css'



const JoinButton = () => {
  return (
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
  )
}

export default JoinButton

