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

export default function Hero() {
  return (
    <>
      <HeroWrapper>
        <HeroContainer>
          <HeroParagraph>Hi there, I'm</HeroParagraph>
          <Pulse duration={2000}>
            <HeroHeading>
              Martin Bolsønes
              <br />
              <HeroHeadingSpan>Frontend developer</HeroHeadingSpan>
            </HeroHeading>
          </Pulse>
          <span className={styles.orangeLine}></span>
          <HeroParagraph>
            Frontend devlopment student in Oslo. Enjoy creating modern web
            applications and is eager to learn and emprove in both design and
            programming.
          </HeroParagraph>
          <div className={styles.btnContainer}>
            <PrimaryButton>About me</PrimaryButton>
            <SecondaryButton>Browse my projects</SecondaryButton>
          </div>
        </HeroContainer>
        <div className={styles.imgSomeContainer}>
          <Pulse duration={2000}>
            <div className={styles.heroImg} />
          </Pulse>
          <SoMeContainer></SoMeContainer>
        </div>
      </HeroWrapper>
      <ArrowIcon size={54} strokeWidth={1} color='var(--color-secondary)' />
    </>
  );
}
