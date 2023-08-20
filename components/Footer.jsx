import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/footer.module.css';
import Link from 'next/link';
import logo from "../public/images/logo.jpg"
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <p>Copyright &copy; 2023 Potters Temple Church.</p>
        </div>
        <div className={styles.right}>
      <Image alt="logo" src={logo} width={60} height={60}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
