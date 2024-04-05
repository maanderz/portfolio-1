import styles from "../page.module.css";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Impact() {
  return (
    <div className={styles.concepts_main_container} style={{ marginRight: '0', width: '50%' }}>
      <div>Societal Impact of Computers</div>
      <div className={styles.intro_links}>
        <div style={{ fontSize: '1.25rem' }}>
          <div className={styles.concept_description_left}>Benefits of computers in society include having access to information at our fingertips. Our lives can now run on a set schedule thanks to the convenience of real time updates on travel times about incidents along our route. Store hours are posted online to avoid arriving at a closed store. We can also read up on random facts as questions pop into our heads. The convenience of easy information lookup makes our lives more efficient.</div>
          <div className={styles.concept_description_left}>Everything we do comes with associated risks. Risks associated with computers include privacy and security issues. Data is collected by companies when we use their services, and when they have a security breech our privacy becomes exposed. Malware is a security issue we must be mindful of. Hackers have various tools to attack our systems for our personal information such as phishing and viruses. We must be cautious about how we use our computers to be able to protect ourselves while enjoying all the benefits of being connected.</div>
        </div>  
      </div>
    </div>
  );
}