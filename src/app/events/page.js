import React from 'react';
import styles from "../../../styles/events.module.css"
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Page = () => {
  return (
    <section className={styles.events}>

        <h2 className={styles.subhead}>UPCOMING EVENTS</h2>

    <div className={styles.eventsList}>

  <div className={styles.card}>
    <h3 className={`${styles.display1} ${styles.eventsListItemTitle}`}>
      <Link href="events.html" title="">Youth and Children </Link>
    </h3>
    <div className={styles.eventInfo}>
      <ul className={styles.eventsListMeta}>
        <li className={styles.eventsListMetaDate}>
          <FaCalendarAlt className={styles.icon} />
          {/* Sunday, April 28, 2023 */}
          3rd and 4th week of June 2024

        </li>
        {/* <li className={styles.eventsListMetaTime}>
          <FaClock className={styles.icon} />
          9:00AM - 02:00PM
        </li> */}
        <li className={styles.eventsListMetaLocation}>
          <FaMapMarkerAlt className={styles.icon} />
          Potters Temple Church
        </li>
      </ul>
    </div>
</div>


  <div className={styles.card}>
    <h3 className={`${styles.display1} ${styles.eventsListItemTitle}`}>
      <Link href="events.html" title="">Men</Link>
    </h3>
    <div className={styles.eventInfo}>
      <ul className={styles.eventsListMeta}>
        <li className={styles.eventsListMetaDate}>
          <FaCalendarAlt className={styles.icon} />
          4th week October 2024
        </li>
        {/* <li className={styles.eventsListMetaTime}>
          <FaClock className={styles.icon} />
          9:00AM - 02:00PM
        </li> */}
        <li className={styles.eventsListMetaLocation}>
          <FaMapMarkerAlt className={styles.icon} />
          Potters Temple Church
        </li>
      </ul>
  </div>
</div>


  <div className={styles.card}>
    <h3 className={`${styles.display1} ${styles.eventsListItemTitle}`}>
      <Link href="events.html" title="">General Assembly</Link>
    </h3>
    <div className={styles.eventInfo}>
      <ul className={styles.eventsListMeta}>
        <li className={styles.eventsListMetaDate}>
          <FaCalendarAlt className={styles.icon} />
          4th week November 2023 & 2024
        </li>
        {/* <li className={styles.eventsListMetaTime}>
          <FaClock className={styles.icon} />
          9:00AM - 02:00PM
        </li> */}
        <li className={styles.eventsListMetaLocation}>
          <FaMapMarkerAlt className={styles.icon} />
          Potters Temple Church
        </li>
      </ul>
  </div>


</div>

  <div className={styles.card}>
    <h3 className={`${styles.display1} ${styles.eventsListItemTitle}`}>
      <Link href="events.html" title="">Women</Link>
    </h3>
    <div className={styles.eventInfo}>
      <ul className={styles.eventsListMeta}>
        <li className={styles.eventsListMetaDate}>
          <FaCalendarAlt className={styles.icon} />
          1st week december 2024
        </li>
        {/* <li className={styles.eventsListMetaTime}>
          <FaClock className={styles.icon} />
          9:00AM - 02:00PM
        </li> */}
        <li className={styles.eventsListMetaLocation}>
          <FaMapMarkerAlt className={styles.icon} />
          Potters Temple Church
        </li>
      </ul>
  </div>


</div>

      </div>
    </section>
  );
};

export default Page;
