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
              <HeroParagraph>Hi there, Im</HeroParagraph>
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
              <div
                style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
              >
                <PrimaryButton>About me</PrimaryButton>
                <SecondaryButton>Browse my projects</SecondaryButton>
              </div>
            </HeroContainer>
            <div className={styles.heroImg}></div>
            <SoMeContainer />
          </HeroWrapper>
        </Main>
        <Footer></Footer>
      </Body>
    </>
  );
}
