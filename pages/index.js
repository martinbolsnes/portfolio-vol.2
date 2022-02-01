import HeroHeading from '../components/hero/heroHeading';
import HeroHeadingSpan from '../components/hero/heroHeadingSpan';
import Container from '../components/container/container';
import HeroParagraph from '../components/hero/heroParagraph';

export default function Home() {
  return (
    <div>
      <Container>
        <p>Hi there, I'm</p>
        <HeroHeading>
          Martin Bolsønes
          <br />
          <HeroHeadingSpan>Frontend developer</HeroHeadingSpan>
        </HeroHeading>
        <HeroParagraph>
          Frontend devlopment student in Oslo. Enjoy creating modern web
          applications and is eager to learn and emprove in both design and
          programming.
        </HeroParagraph>
      </Container>
    </div>
  );
}
