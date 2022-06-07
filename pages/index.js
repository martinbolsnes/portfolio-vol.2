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
        <Main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Main>
        <Footer className='bg-color-black w-full py-14 lg:py-6'>
          <FooterContainer />
        </Footer>
      </Body>
    </>
  );
}
