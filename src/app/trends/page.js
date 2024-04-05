import styles from "../page.module.css";
import localFont from 'next/font/local'
import clsx from 'clsx';
import Link from "next/link";

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Trends() {
  return (
    <main className={clsx(myFont.className, styles.introduction)}>
      <section className={styles.title}>Trends</section>
      <section className={styles.intro_links}>
        <Link className={styles.intro_links_children} href="/">Home</Link>
        <Link className={styles.intro_links_children} href="/terms">Terms</Link>
        <Link className={styles.intro_links_children} href="/concepts">Concepts</Link>
      </section>
      <div style={{ fontSize: '1.25rem', padding: '1rem', borderBottom: '1px solid black'}}>
        <div style={{ fontSize: '2rem', paddingBottom: '1rem' }}>Tiny Computers</div>
        <div>
          Tiny PCs are personal computers that are connected to a display with an optional input device. 
          They are useful because they are portable.   
        </div>
        <div>
          There are many tiny PCs that exist, such as Chromecast, Raspberry Pi, and Amazon Firestick.     
        </div>
        <div>
          This technology is beneficial for those who do not want to carry around their laptops or desktop computers which are cumbersome in comparison if their need is just to stream content.
          In summary, tiny PCs are beneficial for saving space for storing hardware and portability. 
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className={styles.concepts_main_container} style={{ marginRight: '0', borderRight: '1px solid black', width: '50%' }}>
          <div>Restaurant iPad Ordering Systems</div>
          <div className={styles.intro_links}>
            <div style={{ fontSize: '1.25rem' }}>
              <div className={styles.concept_description_left}>Restaurant iPad ordering systems: Busy family restaurants are now adopting a new way of ordering food. There are now iPads situated on every table, and the customers have the option to use it to order instead of speaking to a waitress. The iPads even have a payment option. This provides the opportunity for patrons to customize their order and eliminate possible human errors in communication.</div>
              <div className={styles.concept_description_left}>Personally, every restaurant I’ve been to that has electronic ordering systems would be my preferred way of ordering. It gives me flexibility to order when I’m ready, and the only error that can be made is between me and the person reading the order, thus having a higher efficiency in getting the correct customizations. It is also more efficient for the restaurant for receiving orders, especially during peak hours at the restaurant and waiting for service by waitresses.</div>
              <div className={styles.concept_description_left}>Ordering systems have become the streamlined process of ordering food.</div>
            </div>  
          </div>
        </div>
        <div className={styles.concepts_main_container} style={{ marginRight: '0', width: '50%' }}>
          <div>Campus Emergency Notification System</div>
          <div className={styles.intro_links}>
            <div style={{ fontSize: '1.25rem' }}>
              <div className={styles.concept_description_left}>The Higher Education Opportunity Act signed in 2008 allows post-secondary education facilities to alert their students in case of an emergency by sending communication to their electronic devices.</div>
              <div className={styles.concept_description_left}>This mode of message delivery is more effective in reaching a large audience since most students have access to a cell phone. We must consider those students who do not have cell phones and how they get emergency information. Some campuses require their students to have cell phones, but not everyone has the financial means to have one. These students are limited in receiving information through peers and screens around the campus that may be posting the message.</div>
            </div>  
          </div>
        </div>
      </div>
    </main>
  );
}