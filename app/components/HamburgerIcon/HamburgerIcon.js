'use client'

import React, { useState} from 'react';
import styles from './HamburgerIcon.module.css';

function HamburgerIcon({isChecked, setIsChecked}) {

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

  return (
    <label className={styles.label} htmlFor="check">
      <input type="checkbox" id="check" className={styles.input} checked={isChecked}
        onChange={handleCheckboxChange} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default HamburgerIcon;





