import styles from "../page.module.css";
import localFont from 'next/font/local'
import clsx from 'clsx';
import Image from 'next/image'
import chatMessage from '../../../public/chat-message.png'
import chatResponse from '../../../public/chat-response.png'
import Network from "./section-1";
import Computers from "./section-2";
import Software from './section-3';

const myFont = localFont({ src: '../Instrument_Serif/InstrumentSerif-Regular.ttf' })
 
export default function Concepts() {
  return (
    <main className={clsx(myFont.className, styles.introduction)}>
      <section className={styles.title}>Concepts</section>
      <div className={styles.concepts_main_container}>
        <div>What is a computer?</div>
        <div className={styles.intro_links}>
          <div className={styles.concept_container}>
            <div className={styles.concept_description_left}>A computer is an electronic device that can perform the information processing cycle. The information processing cycle or IPOS cycle includes four operations and they are input, processing, output and storage. There is now fifth operation that is considered to be within the cycle which is communication. Communications deals with sending or retrieving data.</div>
            <div className={styles.concept_description_left}>Example of an information processing cycle by a user messaging a chatbot:</div>
            <div className={styles.concept_description_left} style={{ paddingLeft: "1rem" }}>Input: A user typing a message in a messenger window.</div>
            <div className={styles.concept_description_left} style={{ paddingLeft: "1rem" }}>Processing: The computer formatting and interpreting the keyboard strokes into letters.</div>
            <div className={styles.concept_description_left} style={{ paddingLeft: "1rem" }}>Output: The monitor displaying the message in the messenger window.</div>
            <div className={styles.concept_description_left} style={{ paddingLeft: "1rem" }}>Communication: The message being sent to the recipient user of the message.</div>
            <div className={styles.concept_description_left} style={{ paddingLeft: "1rem" }}>Storage: The chat history that is shown in the messenger window.</div>
          </div>  
          <div className={styles.concept_container}> 
            <Image
              src={chatMessage}
              alt="Chat message typed in the message box"
            />
            <Image
              src={chatResponse}
              alt="Chat response from recipient user"
            />
            <div style={{ fontStyle: "italic" }}>
              <span style={{ paddingRight: "1rem" }}>Example conversation with Starbucks chatbot.</span>
              <a href="https://customerservice.starbucks.ca/sbux">(https://customerservice.starbucks.ca/sbux)</a> 
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid black' }}>
        <Network />
        <Computers />
      </div>
      <div style={{ display: 'flex', borderTop: '1px solid black' }}>
        <Software />
      </div>
    </main>
  );
}