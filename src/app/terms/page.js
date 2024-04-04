'use client'

import styles from "../page.module.css";
import localFont from 'next/font/local'
import clsx from 'clsx';
import { useState } from 'react';

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Terms() {
  const [display, setDisplay] = useState(false);

  return (
    <main className={myFont.className}>
      <main className={clsx(styles.main, styles.main_container, styles.introduction)}>
        <ol className={clsx(styles.introduction_1, styles.terms_container)}>
            <li>
                <span className={styles.terms} onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>Computer literacy:</span>
                <span className={display ? styles.terms_emphasized : '' }>Knowing basic computer fundamentals which can help purchasing, upgrading and using one.</span>  
            </li>
        
        </ol>
        <div className={styles.introduction_1}>Right</div>
      </main>
    </main>
  );
}