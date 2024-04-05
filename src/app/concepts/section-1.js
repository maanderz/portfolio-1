import styles from "../page.module.css";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Network() {
  return (
    <div className={styles.concepts_main_container} style={{ marginRight: '0', borderRight: '1px solid black', width: '50%' }}>
      <div>Network, Internet and the World Wide Web</div>
      <div className={styles.intro_links}>
        <div style={{ fontSize: '1.25rem' }}>
          <div className={styles.concept_description_left}>The main role of a network is communication. A computer network is a collection of connected computers and hardware devices with the ability to share data, hardware (ie printer), and software (applications).</div>
          <div className={styles.concept_description_left}>The internet is a network of resources that can be assessed by users. To access the internet, the user needs to have a Web browser installed. The World Wide Web is a resource within the internet, and it contains collections of Web pages. A Web site is a collection of Web pages that belongs to an individual or a company. These Web pages are saved and accessed through Web servers. A Web server contains Web pages that are always connected to the Internet.</div>
          <div className={styles.concept_description_left}>A modem or network adaptor gives the user access to a computer network. The modem has access to the Internet provided by the Internet service provider which then gives the user access to the Internet.</div>
          <div className={styles.concept_description_left}>Computers are identified on the Internet by their IP addresses. An IP address is a unique string belonging to the computer.</div>
          <div className={styles.concept_description_left}>People are identified on the Internet by their e-mail addresses which is a combination of a unique username to the specific domain (such as gmail or hotmail). </div>
          <div className={styles.concept_description_left}>Web pages are identified on the Internet by their URLs (Uniform Resource Locators).</div>
        </div>  
      </div>
    </div>
  );
}