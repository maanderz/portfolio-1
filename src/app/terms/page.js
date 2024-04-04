'use client'

import styles from "../page.module.css";
import localFont from 'next/font/local'
import clsx from 'clsx';
import { useState } from 'react';

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Terms() {
  const [display, setDisplay] = useState(0);

  const emphasize = (id) => {
    if (display === 0) {
      setDisplay(id)
    } if (display === id) {
      setDisplay(0)
    } else {
      setDisplay(id)
    }
  }
 
  return (
    <main className={clsx(myFont.className, styles.introduction)}>
      <section className={clsx(styles.main, styles.main_container_start, styles.terms_outer_container, styles.terms_left)}>
        <ol className={clsx(styles.introduction_1, styles.terms_container)}>
            <li className={styles.terms_container}>
                <span id={1} className={styles.terms} onClick={() => emphasize(1)}>Computer literacy:</span>
                <span id={1} className={display === 1 ? styles.terms_emphasized : '' }>Knowing basic computer fundamentals which can help purchasing, upgrading and using one.</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={2} className={styles.terms} onClick={() => emphasize(2)}>Input:</span>
                <span id={2} className={display === 2 ? styles.terms_emphasized : '' }>Can refer to data or data being entered in a computer.</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={3} className={styles.terms} onClick={() => emphasize(3)}>Processing:</span>
                <span id={3} className={display === 3 ? styles.terms_emphasized : '' }>Operations being done on data for interpreting and conversing to output.</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={4} className={styles.terms} onClick={() => emphasize(4)}>Output:</span>
                <span id={4} className={display === 4 ? styles.terms_emphasized : '' }>Interpreted data from the result of processing or can refer to the results itself.</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={5} className={styles.terms} onClick={() => emphasize(5)}>Storage:</span>
                <span id={5} className={display === 5 ? styles.terms_emphasized : '' }>Saving data, programs or output for later use.</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={6} className={styles.terms} onClick={() => emphasize(6)}>Data:</span>
                <span id={6} className={display === 6 ? styles.terms_emphasized : '' }>Any fact or set of facts that are unorganized (ie. Images, numbers, letters).</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={7} className={styles.terms} onClick={() => emphasize(7)}>Information:</span>
                <span id={7} className={display === 7 ? styles.terms_emphasized : '' }>Meaningful representation of data that can then be interpreted and queried.</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={8} className={styles.terms} onClick={() => emphasize(8)}>Hardware:</span>
                <span id={8} className={display === 8 ? styles.terms_emphasized : '' }>Physical components that are used for inputing, processing, outputting and communication of data such as mouse, printer, and monitor.</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={9} className={styles.terms} onClick={() => emphasize(9)}>Software:</span>
                <span id={9} className={display === 9 ? styles.terms_emphasized : '' }>Set of instructions for computer's hardware.</span>  
            </li>
            <li className={styles.terms_container}>
                <span id={10} className={styles.terms} onClick={() => emphasize(10)}>System software:</span>
                <span id={10} className={display === 10 ? styles.terms_emphasized : '' }>Instructions for a computer to run which includes the operating system.</span>  
            </li>
        </ol>
      </section>
      <section className={clsx(styles.main, styles.main_container_start, styles.terms_outer_container)}>
        <ol start="11" className={clsx(styles.introduction_1, styles.terms_container)}>
          <li className={styles.terms_container}>
              <span id={11} className={styles.terms} onClick={() => emphasize(11)}>Operating system:</span>
              <span id={11} className={display === 11 ? styles.terms_emphasized : '' }>A system software that allows the user to operate, manage, and run applications on a computer with its interface. A few operating systems are iOS, Windows and Linux.</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={12} className={styles.terms} onClick={() => emphasize(12)}>Application software:</span>
              <span id={12} className={display === 12 ? styles.terms_emphasized : '' }>Programs that allows users to perform specific tasks such as Excel for spreadsheet functions, Powerpoint for presentations, Photoshop for editing images. Application software is also known as apps.</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={13} className={styles.terms} onClick={() => emphasize(13)}>Embedded computers:</span>
              <span id={13} className={display === 13 ? styles.terms_emphasized : '' }>Tiny computer integrated into a product so the product can perform specific tasks but these embedded computers cannot be used as general purpose computers because they have specific tasks assigned to them.</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={14} className={styles.terms} onClick={() => emphasize(14)}>Mobile device:</span>
              <span id={14} className={display === 14 ? styles.terms_emphasized : '' }>Small handheld device with built-in computing capabilities and is able to access the internet.</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={15} className={styles.terms} onClick={() => emphasize(15)}>Smartphone:</span>
              <span id={15} className={display === 15 ? styles.terms_emphasized : '' }>A type of mobile device, a smartphone can run mobile applications and access the internet (all smart phones are mobile devices, but not all mobile devices are smartphones).</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={16} className={styles.terms} onClick={() => emphasize(16)}>Media tablet:</span>
              <span id={16} className={display === 16 ? styles.terms_emphasized : '' }>Another type of mobile device but it is primarily used to watch multimedia content via the internet.</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={17} className={styles.terms} onClick={() => emphasize(17)}>Thin client:</span>
              <span id={17} className={display === 17 ? styles.terms_emphasized : '' }>A personal computer that needs access to a network for processing and storage.</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={18} className={styles.terms} onClick={() => emphasize(18)}>Server:</span>
              <span id={18} className={display === 18 ? styles.terms_emphasized : '' }>A computer that hosts data and programs for a small network of users.</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={19} className={styles.terms} onClick={() => emphasize(19)}>Mainframe:</span>
              <span id={19} className={display === 19 ? styles.terms_emphasized : '' }>A computer used by large organizations to serve many users with lots of centralized data. This computer can run simultaneous programs.</span>  
          </li>
          <li className={styles.terms_container}>
              <span id={20} className={styles.terms} onClick={() => emphasize(20)}>IP address:</span>
              <span id={20} className={display === 20 ? styles.terms_emphasized : '' }>Unique numeric Internet address that identifies a computer on the internet.</span>  
          </li>
        </ol>
      </section>
    </main>
  );
}