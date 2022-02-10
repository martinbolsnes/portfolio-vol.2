/* eslint-disable react/no-unescaped-entities */
import HeroContainer from './Herocontainer';
import HeroWrapper from './HeroWrapper';
import HeroHeading from './HeroHeading';
import HeroHeadingSpan from './HeroHeadingSpan';
import HeroParagraph from './HeroParagraph';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import SoMeContainer from './SoMeContainer';
import ArrowIcon from '../icons/ArrowDown';
import styles from '../../styles/Home.module.css';
import Pulse from 'react-reveal/Pulse';
import ScrollIntoView from 'react-scroll-into-view';

export default function Hero() {
  return (
    <>
      <HeroWrapper id='hero'>
        <HeroContainer>
          <HeroParagraph>Hi there, I'm</HeroParagraph>
          <HeroHeading>
            Martin Bolsønes
            <br />
            <HeroHeadingSpan>Frontend developer</HeroHeadingSpan>
            <div className={styles.orangeLineHero}></div>
          </HeroHeading>
          <HeroParagraph>
            Frontend devlopment student in Oslo. Enjoy creating modern web
            applications and is eager to learn and emprove in both design and
            programming.
          </HeroParagraph>
          <div className={styles.btnContainer}>
            <ScrollIntoView selector='#about'>
              <PrimaryButton>About me</PrimaryButton>
            </ScrollIntoView>
            <ScrollIntoView selector='#projects'>
              <SecondaryButton>Browse my projects</SecondaryButton>
            </ScrollIntoView>
          </div>
        </HeroContainer>
        <div className={styles.imgSomeContainer}>
          <Pulse forever duration={4000}>
            <div className={styles.heroImg} />
          </Pulse>
          <SoMeContainer></SoMeContainer>
        </div>
      </HeroWrapper>
      <ArrowIcon size={54} strokeWidth={1} color='var(--color-secondary)' />
    </>
  );
}
