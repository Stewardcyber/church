import React from 'react';
import styles from '../../../styles/ministeries.module.css';

const Ministries = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>MINISTRIES</h1>

      <div className={styles.ministryContainer}>
        <h2 className={styles.ministryTitle}>Adult and Family:</h2>

        <div className={styles.ministry}>
          <h3 className={styles.ministrySubtitle}>Men Ministry</h3>
          <p className={styles.ministryDescription}>
            Raising men who will lead by example, making decisions with sober minds not based on emotions.
            To equip them so they may be able to impact their families with the word of God and use their spiritual gifts to make wealth.
            They should also be able to impart knowledge, advice, and support to young men and youth in the church.
            (1 Timothy 3:2&amp;5)
          </p>
        </div>

        <div className={styles.ministry}>
          <h3 className={styles.ministrySubtitle}>Women Ministry</h3>
          <p className={styles.ministryDescription}>
            Equipping women for the work of God and support in the ministry.
            To encourage them to support the vision by doing the work of God as a group or as individuals.
            Coordinate prayer per territory in order to support the men of God in the ministry.
            To help encourage women to organize seminars and empowerment conferences for building up family relationships.
            (Luke 8:1-3; 1 Kings 17:7-24; 2 Kings 4:8-18)
          </p>
        </div>

        <div className={styles.ministry}>
          <h3 className={styles.ministryTitle}>Children Ministry</h3>
          <p className={styles.ministryDescription}>
            To educate children about the Christian faith and teach and nurture them in the ways of the Lord.
            To train them to lead a Christian lifestyle that is pleasing to God and leads them into a personal relationship with Jesus.
            Vision/Motto is "Be Like Jesus and Do For Jesus".
            (Matthew 25:35-40, Galatians 5:22-23, Proverbs 22:6)
          </p>
        </div>

        <div className={styles.ministry}>
          <h3 className={styles.ministryTitle}>Youth Ministry</h3>
          <p className={styles.ministryDescription}>
            Empowering them with godly knowledge and understanding that will enable them to be productive and stable in their personal lifestyle.
            (1 John 3:14; 1 John 1:4; 2 Timothy 2:22, 4:12)
          </p>
        </div>

        <div className={styles.ministry}>
          <h3 className={styles.ministryTitle}>Intercessory Ministry</h3>
          <p className={styles.ministryDescription}>
            To act as a mediator between the Church and God, having the ability to discern the perfect will of God in a particular season and calling it into being.
            (Nehemiah 4:16-17, Psalms 11:3, Psalms 127:1)
          </p>
        </div>

        <div className={styles.ministry}>
          <h3 className={styles.ministryTitle}>Evangelism Ministry</h3>
          <p className={styles.ministryDescription}>
            Sharing the good news of salvation, forgiveness, and grace of God provided for all humanity.
          </p>
        </div>

        <div className={styles.ministry}>
          <h3 className={styles.ministryTitle}>Project Planning</h3>
          <p className={styles.ministryDescription}>
            Creating and embracing ideas that will generate income for the benefit of the ministry.
            (Proverbs 16:3, Proverbs 29:18)
          </p>
        </div>

        <div className={styles.ministry}>
          <h3 className={styles.ministryTitle}>Music Ministry</h3>
          <p className={styles.ministryDescription}>
            Raising true worshipers through music by perfecting their gifted talents.
            Inspiring and envisioning them in their calling.
            (John 4:23-24, Psalms 100:1-5)
          </p>
        </div>


      </div>
    </div>
  );
};

export default Ministries;
