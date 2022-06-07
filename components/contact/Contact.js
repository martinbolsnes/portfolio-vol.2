/* eslint-disable react/no-unescaped-entities */
import styles from '../../styles/Home.module.css';
import H2 from '../headings/H2';
import EnvelopeIcon from '../icons/EnvelopeIcon';
import Paragraph from '../paragraph/Paragraph';
import ContactButton from '../buttons/ContactButton';
import Fade from 'react-reveal/Fade';

export default function Contact() {
  return (
    <div className={styles.contactSection} id='contact'>
      <div className={styles.contactWrapper}>
        <div>
          <H2 style={{ color: 'var(--color-black)' }}>Contact me</H2>
          <div className={styles.orangeLine}></div>
        </div>
        <EnvelopeIcon size={54} />
        <Paragraph
          style={{
            color: 'var(--color-black)',
            textAlign: 'center',
            margin: '0',
          }}
        >
          I'm open for work at the moment so if you like what I do you are
          welcome to reach out to me!
        </Paragraph>
        <Fade bottom>
          <a href='mailto:martinbolsnes@icloud.com'>
            <ContactButton
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--color-black)',
                color: 'var(--color-black)',
              }}
            >
              Email me
            </ContactButton>
          </a>
        </Fade>
      </div>
    </div>
  );
}
