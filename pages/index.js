/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css';
import Body from '../components/body/Body';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HeroContainer from '../components/hero/Herocontainer';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SecondaryButton from '../components/buttons/SecondaryButton';
import HeroWrapper from '../components/hero/HeroWrapper';
import HeroHeading from '../components/hero/HeroHeading';
import HeroHeadingSpan from '../components/hero/HeroHeadingSpan';
import HeroParagraph from '../components/hero/HeroParagraph';
import NavBar from '../components/header/Navbar';
import SoMeContainer from '../components/hero/SoMeContainer';
import AboutWrapper from '../components/about/AboutWrapper';
import H2 from '../components/headings/H2';
import AboutSection from '../components/about/AboutSection';
import Paragraph from '../components/paragraph/Paragraph';
import BrandIconsFirst from '../components/icons/BrandIconsFirst';
import BrandIconsSecond from '../components/icons/BrandIconsSecond';
import ArrowIcon from '../components/icons/ArrowDown';

export default function Home() {
  return (
    <>
      <Body>
        <Header>
          <NavBar />
        </Header>
        <Main>
          <HeroWrapper>
            <HeroContainer>
              <HeroParagraph>Hi there, I'm</HeroParagraph>
              <HeroHeading>
                Martin Bolsønes
                <br />
                <HeroHeadingSpan>Frontend developer</HeroHeadingSpan>
              </HeroHeading>
              <span className={styles.orangeLine}></span>
              <HeroParagraph>
                Frontend devlopment student in Oslo. Enjoy creating modern web
                applications and is eager to learn and emprove in both design
                and programming.
              </HeroParagraph>
              <div className={styles.btnContainer}>
                <PrimaryButton>About me</PrimaryButton>
                <SecondaryButton>Browse my projects</SecondaryButton>
              </div>
            </HeroContainer>
            <div className={styles.imgSomeContainer}>
              <div className={styles.heroImg} />
              <SoMeContainer></SoMeContainer>
            </div>
          </HeroWrapper>
          <ArrowIcon size={54} strokeWidth={1} color='var(--color-secondary)' />
          <AboutSection>
            <AboutWrapper>
              <div className={styles.aboutMeContainer}>
                <div className={styles.aboutHeadingContainer}>
                  <H2 style={{ color: 'var(--color-white)' }}>About me</H2>
                  <div className={styles.orangeLine}></div>
                  <Paragraph style={{ width: '100%' }}>
                    <p style={{ color: 'var(--color-white)' }}>
                      I’m currently studying frontend development at Noroff
                      School of technology and digital media in Oslo, Norway. I
                      have been working with frontend development for 2 years
                      now and I will graduate in the summer of 2022. My interest
                      in creative development comes from my passion to beeing
                      able to create something from idea to a finished product.
                      The opportunities and possibilities in web development is
                      what inspires me to do what I do.
                    </p>
                  </Paragraph>
                </div>
                <div className={styles.aboutImg}></div>
              </div>
              <H2 style={{ color: 'var(--color-white)' }}>Skills</H2>
              <span className={styles.orangeLine}></span>
              <BrandIconsFirst />
              <Paragraph>
                <p style={{ color: 'var(--color-white)' }}>
                  Through my studies at Noroff I have gathered most experience
                  in HTML, CSS and Javascript. As well as creating responsive
                  application through pure CSS, I also have worked with
                  frameworks like Bootstrap and Tailwind. I do most of my
                  designs in Figma, but I have also been working with Adobe XD.
                </p>
              </Paragraph>
              <BrandIconsSecond />
              <Paragraph>
                <p style={{ color: 'var(--color-white)' }}>
                  Some of the things I do want to learn more about is Javascript
                  libraries such as React. I have worked a bit with React and
                  Next.js and want to emprove at this. I have also worked with
                  Node.js, Tailwind, Wordpress and Strapi
                </p>
              </Paragraph>
            </AboutWrapper>
          </AboutSection>
        </Main>
        <Footer></Footer>
      </Body>
    </>
  );
}
