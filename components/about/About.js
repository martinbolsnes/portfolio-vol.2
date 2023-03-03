import AboutSection from './AboutSection';
import AboutWrapper from './AboutWrapper';
import styles from '../../styles/Home.module.css';
import H2 from '../headings/H2';
import Paragraph from '../paragraph/Paragraph';
import BrandIconsFirst from '../icons/BrandIconsFirst';
import BrandIconsSecond from '../icons/BrandIconsSecond';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export default function About() {
  return (
    <>
      <AboutSection id='about'>
        <AboutWrapper>
          <div className={styles.aboutMeContainer}>
            <div className={styles.aboutHeadingContainer}>
              <Fade bottom>
                <H2 style={{ color: 'var(--color-black)' }}>About me</H2>
                <div className={styles.orangeLine}></div>
              </Fade>
              <Fade bottom>
                <Paragraph style={{ width: '100%' }}>
                  <p style={{ color: 'var(--color-black)' }}>
                    I’m a frontend developer that finished my studies at Noroff
                    School of technology and digital media in Oslo, Norway in
                    2022. I have been working with frontend development for 2
                    years now and my interest in creative development comes from
                    my passion to beeing able to create something from idea to a
                    finished product. The opportunities and possibilities in web
                    development is what inspires me to do what I do.
                  </p>
                </Paragraph>
              </Fade>
            </div>
            <Flip right delay={500} duration={1800}>
              <div className={styles.aboutImg}></div>
            </Flip>
          </div>
          <Fade bottom>
            <H2 style={{ color: 'var(--color-black)' }}>Skills</H2>
            <span className={styles.orangeLine}></span>
          </Fade>
          <Fade bottom>
            <BrandIconsFirst />
          </Fade>
          <Fade bottom>
            <Paragraph>
              <p style={{ color: 'var(--color-black)' }}>
                Through my studies at Noroff I have gathered most experience in
                HTML, CSS and Javascript. As well as creating responsive
                application through pure CSS, I also have worked with frameworks
                like Bootstrap and Tailwind. I do most of my designs in Figma,
                but I have also been working with Adobe XD.
              </p>
            </Paragraph>
          </Fade>
          <Fade bottom>
            <BrandIconsSecond />
          </Fade>
          <Fade bottom>
            <Paragraph>
              <p style={{ color: 'var(--color-black)' }}>
                Some of the things I do want to learn more about is Javascript
                libraries such as React. I have worked with React and Next.js in
                my latest projects and want to emprove at this. I have also
                worked with Node.js, Tailwind, Wordpress, Strapi and Sanity.
              </p>
            </Paragraph>
          </Fade>
        </AboutWrapper>
      </AboutSection>
    </>
  );
}
