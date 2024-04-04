import styles from "../page.module.css";
import localFont from 'next/font/local'
import clsx from 'clsx';

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Terms() {
  return (
    <main className={myFont.className}>
      <main className={clsx(styles.main, styles.main_container)}>
        Terms
      </main>
    </main>
  );
}