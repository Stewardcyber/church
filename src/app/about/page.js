import styles from "../../../styles/about.module.css";
import Image from "next/image";
import churchImage from "../../../public/images/church.jpg";
import bishopImage from "../../../public/members/bishop.jpg";
import assistantBishopImage from "../../../public/members/assistantdirector.jpg";
import executiveSecretaryImage from "../../../public/members/executiveDirector.jpg";

const Page = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>ABOUT US</h2>
      
      <div className={styles.churchImageContainer}>
        <Image className={styles.church_img} src={churchImage} alt="Church Image" />
      </div>
      
      <div className={styles.historyContainer}> 
        <h3 className={styles.sectionTitle}>THE HISTORY</h3>
        <p className={styles.missionText}>
        Bishop. Dr. Mathias Ng’andu was born in 1947 in a Christian family. His Father, Rev. Reuben Mumpanso Ng’andu, was a Pastor in the London Missionary Society (Churches founded by Dr. David Livingstone). Bishop Ng’andu received Jesus as his personal savior when he was in form one in the year 1965. 
        </p>
        <br/>
        <p className={styles.missionText}>
        He joined the Assemblies of God and was among the 5 trustees of the Assemblies of God from 1974 to 2001. He founded Bugando Assemblies of God and served as a senior Pastor from 1972 to 1978. He founded and senior Pastored Tanzania Assemblies of God church in Kijenge from 1978 to 1979. 
        </p>
        <br/>
        <p className={styles.missionText}>
        He then moved to Kenya as a senior lecturer at the East African School of Theology where he worked from 1979 to 1985. During that time, he also opened and mentored 3 churches in Kenya in areas of Ngong, Ruahi, and Buruburu under the Kenya Assemblies of God. 
        </p>
        <br/>
        <p className={styles.missionText}>
        Having attended the Billy Graham’s International Conference for Itinerant Evangelists, held in Amsterdam in 1983, Bishop Mathias Ng’andu was impacted and inspired with renewed passion, vision and strategies for Evangelism he thereafter moved back to Tanzania as a National Evangelist under the Tanzania Assemblies of God from 1985 to 2001. During that time, he opened many churches in Tanzania. 
        </p>
        <br/>
        <p className={styles.missionText}>
From the year 2001, he joined the Christian Life Church Ministry for 9 years up to the year 2009. 
        </p>
        <br/>
        <p className={styles.missionText}>
        In 2010, the Potters Temple Church was given birth by Bishop Ng’andu under the guidance and directions of God, which currently has grown to 56 churches countrywide. 
        </p>
        <br/>
        <p className={styles.missionText}>
        At present, he resides in Morogoro as the Founder and Senior Bishop of the Potters Temple Church.
        </p>
      </div>
      
      <div className={styles.visionContainer}>
        <h2 className={styles.sectionTitle}>VISION</h2>
        <p className={styles.missionTexts}>In partnership with God to win souls and changing lives worldwide.</p>
      </div>
      
      <div className={styles.historyContainer}>
        <h2 className={styles.sectionTitle}>MISSION</h2>
        <p className={styles.missionTexts}>Equipping believers to excel in serving God and be effective and productive. To raise true worshipers such as the Father seeks.</p>
        <p className={styles.missionTexts}>Motto: Each one, reach one, bring one, win one and stepping into our destiny.</p>
      </div>
      
      <div className={styles.historyContainer}>
        <h2 className={styles.sectionTitle}>WE BELIEVE</h2>
        <ul className={styles.beliefList}>
          <li className={styles.missionText} >That there is only one true God eternally existing in three persons: God the Father, God the Son, and God the Holy Spirit.</li>
          <li className={styles.missionText} >In the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death, in His bodily resurrection, in His ascension to the right hand of the Father, in His personal future return to this earth in power and glory to rule for a thousand years.</li>
          <li className={styles.missionText} >In the blessed hope—the rapture of the Church at Christ's coming.</li>
          <li className={styles.missionText} >The only means of being cleansed from sin is through repentance and faith in the precious blood of Christ.</li>
          <li className={styles.missionText} >In the redemptive work of Christ on the cross provides healing of the human body in answer to believing prayer.</li>
          <li className={styles.missionText} >In the baptism of the Holy Spirit, according to Acts 2:4, is given to believers who ask for it.</li>
          <li className={styles.missionText} >In the sanctifying power of the Holy Spirit by whose indwelling the Christian is enabled to live a holy life.</li>
          <li  className={styles.missionText}>In the resurrection of both the saved and the lost, the one to everlasting life and the other to everlasting damnation.</li>
        </ul>
      </div>
      <div className={styles.historyContainer}>
          <h3 className={styles.sectionTitle}>VALUES</h3>
          <ul>
            <li className={styles.missionText}>LOVE: Keep His commandment (giving, forgiving, and others)</li>
            <li className={styles.missionText}>HOLINESS: Holiness is God's nature, and He commands us to be holy.
              When we carry this, we won't compromise the gospel, and we will have character.
              Character is the main reason why the church will grow.</li>
            <li className={styles.missionText}>PRAYER: The greatest spiritual weapon (our main engine).
              It strengthens us to live holy. Without it, we cannot stand a chance.</li>
            <li className={styles.missionText}>FAITH: Faith is the nature of God. God is a believing God.</li>
            <li className={styles.missionText}>INTEGRITY: Lies, bribing, and not being honest. Where there is no integrity, people can steal from God and others. Corruption and bribery prevail.</li>
            <li className={styles.missionText}>EXCELLENCE: This is how we look and present ourselves and our teaching and preaching.
              How we treat the Word is how people will respond.</li>
            <li className={styles.missionText}>DILIGENCE: Working hard in what we value.</li>
            <li className={styles.missionText}>UNITY: Unity creates growth. When we are united, we can do the impossible.</li>
            <li className={styles.missionText}>CREATIVITY: Praying to God to give us new ideas to evolve with changes. People who cannot embrace change are always stagnant.</li>
          </ul>
        </div>

      <div className={styles.historyContainer}>
        <h2 className={styles.sectionTitles}>POTTERS TEMPLE CHURCH DNA</h2>
        <p className={styles.missionTexts}>Dynamic Preaching, Dynamic giving, Dynamic Praise & Worship, Dynamic Fellowship, Aggressive Prayers, Aggressive Evangelism. </p>
      </div>
      <div className={styles.leadershipContainer}>
        <h2 className={styles.sectionTitleE}>EXECUTIVE LEADERSHIP</h2>
        <div className={styles.leadershipGrid}>
          <div className={styles.leadershipMember}>
            <div className={styles.leadershipMemberImage}>
              <Image className={styles.mem_img} src={bishopImage} alt="Bishop Image" />
            </div>
            <h3 className={styles.leadershipMemberTitle}>Mathias Reuben Ng'andu</h3>
            <p className={styles.missionText}>Bishop</p>
          </div>

          <div className={styles.leadershipMember}>
            <div className={styles.leadershipMemberImage}>
              <Image className={styles.mem_img} src={executiveSecretaryImage} alt="Executive Secretary Image" />
            </div>
            <h3 className={styles.leadershipMemberTitle}>Reuben Mathias Ng'andu</h3>
            <p className={styles.missionText}>Executive Secretary</p>
          </div>
          <div className={styles.leadershipMember}>
            <div className={styles.leadershipMemberImage}>
              <Image className={styles.mem_img} src={assistantBishopImage} alt="Assistant Bishop Image" />
            </div>
            <h3 className={styles.leadershipMemberTitle}>Joseph Selemani Barongo</h3>
            <p className={styles.missionText}>Assistant Bishop</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
