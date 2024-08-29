// src/components/ResponsiveNavbar.jsx
import React, { useState } from 'react';
import styles from './ResponsiveNavbar.module.css';

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>UltraShip</div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#students">Students</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
