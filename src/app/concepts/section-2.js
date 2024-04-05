import styles from "../page.module.css";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Computers() {
  return (
    <div className={styles.concepts_main_container} style={{ marginRight: '0', width: '50%' }}>
      <div>Importance of the knowledge of computers</div>
      <div className={styles.intro_links}>
        <div style={{ fontSize: '1.25rem' }}>
          <div className={styles.concept_description_left}>It is essential to learn about computers today because technology plays a huge role in our daily lives. Paying bills, registering for classes, and chatting with friends can all be done on our mobile devices through apps.</div>
          <div className={styles.concept_description_left}>Traditional ways of needing to be somewhere physically is becoming phased out, such as dropping in for a workout class without registering first to ensure a spot. To keep up with our connected world, many businesses have also switched gears and have an online presence for quick turnaround for sales, customer service, or general information about the business.</div>
          <div className={styles.concept_description_left}>It is important for us to be computer literate so that we can keep up with how society operates.</div>
        </div>  
      </div>
    </div>
  );
}