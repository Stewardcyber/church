"use client"

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from '../styles/navbar.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from "../public/images/logo.jpg";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarContent} }`}>
        <div className={styles.navbarBrand}>
          <Image onClick={() => router.push("/")} className={styles.logo_im} src={logo} alt="logo" />
        </div>

        <div className={`${styles.navbarLinks} ${isMenuOpen?styles.respLinks:""}`}>
          <span onClick={() =>{setIsMenuOpen(false); router.push("/")}} className={styles.navbarLink}>
            HOME
          </span>
          <span onClick={() => {setIsMenuOpen(false);router.push("/about")}} className={styles.navbarLink}>
            ABOUT
          </span>
          <span onClick={() => {setIsMenuOpen(false);router.push("/ministeries")}} className={styles.navbarLink}>
            MINISTRIES
          </span>
          <span onClick={() => {setIsMenuOpen(false);router.push("/prayer")}} className={styles.navbarLink}>
            PRAYER
          </span>
          <span onClick={() => {setIsMenuOpen(false);router.push("/events")}} className={styles.navbarLink}>
            EVENTS
          </span>
          <span onClick={() => {setIsMenuOpen(false);router.push("/partner")}} className={styles.navbarLink}>
            PARTNER
          </span>
          <span onClick={() => {setIsMenuOpen(false);router.push("/contact")}} className={styles.navbarLink}>
            CONTACT
          </span>
        </div>
        { /* Hamburger Icon */ }
        <div onClick={toggleMenu}>
          {isMenuOpen ? <HiX  className={styles.menuIcon}  /> : <HiMenu   className={styles.menuIcon}/>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
