import react from 'react';
import StyledNav from './StyledNav';
import StyledLink from './StyledLink';
import Logo from './Logo';
import LogoDot from '../header/LogoDot';
import LinksContainer from './LinksContainer';

const Navigation = () => {
  return (
    <StyledNav>
      <div>
        <Logo>
          mb<LogoDot>.</LogoDot>
        </Logo>
      </div>
      <LinksContainer>
        <StyledLink>Home</StyledLink>
        <StyledLink>About</StyledLink>
        <StyledLink>Projects</StyledLink>
        <StyledLink>Contact</StyledLink>
      </LinksContainer>
    </StyledNav>
  );
};

export default Navigation;
