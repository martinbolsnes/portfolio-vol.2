/* eslint-disable react/no-unescaped-entities */
import Body from '../components/body/Body';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NavBar from '../components/header/Navbar';
import Contact from '../components/contact/Contact';
import FooterContainer from '../components/footer/FooterContainer';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';

export default function Home() {
  return (
    <>
      <Body>
        <Header>
          <NavBar />
        </Header>
        <Main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Main>
        <Footer>
          <FooterContainer />
        </Footer>
      </Body>
    </>
  );
}
