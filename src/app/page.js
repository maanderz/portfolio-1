import styles from "./page.module.css";
import localFont from 'next/font/local'
import clsx from 'clsx';

const myFont = localFont({ src: './Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Home() {
  return (
    <main className={myFont.className}>
      <main className={clsx(styles.main, styles.main_container)}>
        <section className={styles.introduction}>
          <div className={clsx(styles.introduction_1, styles.introduction_1_left)}>
            Unit 1 Portfolio Project
          </div>
          <div className={styles.introduction_1}>
            <span>Mandy Arens</span>
            <span>Student ID: 3685086</span>
            <span>COMP 210</span>
          </div>
        </section>
        <section className={styles.intro_links}>
          <div className={styles.intro_links_children}>Terms</div>
          <div className={styles.intro_links_children}>Concepts</div>
          <div className={styles.intro_links_children}>Trends</div>
        </section>
      </main>
    </main>
  );
}
