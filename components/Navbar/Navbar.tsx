import React, { useState } from 'react'
import Link from 'next/link'
// STYLES
import styles from '../../styles/components/Navbar.module.scss';

const Navbar = () => {
  // STATE & VARIABLES
  const [isHidden, setIsHidden] = useState(true)

  return (
      <nav className={styles.navbar}>
        <h4 id={styles['nav-logo']}>
          <Link href="/">
            Handyman in Newcastle
          </Link>
        </h4>
        <ul className={isHidden ? `${styles['nav-items']} ${styles.active}` : `${styles['nav-items']}`}>
          <li><Link href="/our-work">Work</Link></li>
          <button className="btn secondary" type="button"><Link href="/contact">Contact Us</Link></button>
        </ul>
        <button 
          className={styles['nav-burger']}
          type="button"
          onClick={() => setIsHidden(!isHidden)}
        >
          <img src="./assets/images/svg/burger.svg" alt="toggle menu icon" />
        </button>
      </nav>
  );
}

export default Navbar;
