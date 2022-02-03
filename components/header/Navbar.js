import StyledNav from './StyledNav';
import StyledLink from './StyledLink';
import Logo from './Logo';
import LogoDot from '../header/LogoDot';
import LogoDiv from './LogoDiv';
import LinksContainer from './LinksContainer';
import HamburgerIcon from '../icons/HamburgerIcon';

export default function NavBar() {
  return (
    <StyledNav>
      <LogoDiv>
        <Logo>
          mb
          <LogoDot>.</LogoDot>
        </Logo>
      </LogoDiv>
      <LinksContainer className='linksContainer'>
        <StyledLink>
          <a>Home</a>
        </StyledLink>
        <StyledLink>
          <a>About</a>
        </StyledLink>
        <StyledLink>
          <a>Projects</a>
        </StyledLink>
        <StyledLink>
          <a>Contact</a>
        </StyledLink>
      </LinksContainer>
      <HamburgerIcon />
    </StyledNav>
  );
}
