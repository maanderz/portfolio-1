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
    </main>
  );
}