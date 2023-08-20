"use client"
import React, { useState } from 'react';
import styles from "../../../styles/contact.module.css";

const regions = [
  {
    name: 'SOUTHERN',
    addresses: ['Katavi', 'Rukwa', 'Mbeya', 'Iringa', 'Njombe']
  },
  {
    name: 'CENTRAL',
    addresses: ['Morogoro-Head Office', 'Dodoma', 'Tabora', 'Singida']
  },
  {
    name: 'LAKE ZONE',
    addresses: ['Mara', 'Simiyu', 'Mwanza', 'Shinyanga', 'Geita', 'Kigoma', 'Kagera']
  },
  {
    name: 'NORTHERN',
    addresses: ['Arusha', 'Manyara', 'Kilimanjaro', 'Tanga']
  },
  {
    name: 'COASTAL',
    addresses: ['Dar es salaam', 'Pwani', 'Mtwara', 'Lindi', 'Ruvuma', 'Unguja', 'Pemba']
  }
];

const RegionNode = ({ region, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.regionNode}>
      <div className={styles.regionHeader} onClick={handleToggle}>
        <div className={styles.regionName}>{region.name} </div>
        <div className={styles.toggleIcon}> {isOpen ? ' -' : ' +'}</div>
      </div>
      {isOpen && (
        <ul className={styles.addressList}>
          {region.addresses.map((address, index) => (
                   <p key={index} style={{"color":"#8d161a"}} className={styles.cont}>{address}</p>
          ))}
        </ul>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.sectionTitle}>CONTACT US</h2>

      <div className={styles.sectionContainer}>
        <div className={styles.leftSection}>
          <h3 className={styles.hed}>Head Offices</h3>
          <p className={styles.cont}>POTTER'S TEMPLE CHURCH</p>
          <p className={styles.cont}>MSAMVU, PLOT NO. 70</p>
          <p className={styles.cont}>MWANZO MGUMU STREET</p>
          <p className={styles.cont}>MWEMBESONGO WARD</p>
          <p className={styles.cont}>MOROGORO MUNICIPAL</p>
          <p className={styles.cont}>P.0 BOX 1491</p>
          <p className={styles.cont}>MOROGORO, TANZANIA</p>
        </div>

        <div className={styles.rightSection}>
          <h3 className={styles.hedr}>Regional Offices</h3>
          <div className={styles.regionsContainer}>
            {regions.map((region, index) => (
              <RegionNode key={index} region={region} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
