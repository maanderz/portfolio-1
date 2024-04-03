import styles from "./page.module.css";
import localFont from 'next/font/local'

const myFont = localFont({ src: './Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Home() {
  return (
    <main className={myFont.className}>
      <main className={styles.main}>
        <section className={styles.introduction}>
          <div>
            Unit 1 Portfolio Project
          </div>
          <div>
            Mandy Arens
            Student ID: 3685086
            COMP 210
          </div>
        </section>
      </main>
    </main>
  );
}
