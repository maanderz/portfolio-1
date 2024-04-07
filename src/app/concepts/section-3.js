import styles from "../page.module.css";
import localFont from 'next/font/local'

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Network() {
  return (
    <div className={styles.concepts_main_container} style={{ marginRight: '0', borderRight: '1px solid black', width: '50%' }}>
      <div>Software</div>
        <div className={styles.intro_links}>
          <div style={{ fontSize: '1.25rem' }}>
          <div style={{ fontSize: '1.25rem' }}>
            <div className={styles.concept_description_left}>Software is a set of instructions in the form of a program for a computer’s hardware. These programs are written by software developers in a programming language such as Java, C# and Python. System software and application software are two different types of software.</div>
            <div className={styles.concept_description_left}>System software is a set of instructions for a computer to run. Operating systems are system software. An operating system allows the user to operate, manage, and run applications on a computer with its graphical or command line interfaces. Windows, Linux, iOS and Android are examples of operating systems.</div>
            <div className={styles.concept_description_left}>Application software are programs that allow users to perform specific tasks. Some examples of application software are Excel for spreadsheet functions, Powerpoint for presentations, Photoshop for editing images. </div>
          </div>  
        </div>  
      </div>
    </div>
  );
}