import { useState } from 'react';
import StyledNav from './StyledNav';
import StyledLink from './StyledLink';
import Logo from './Logo';
import LogoDot from '../header/LogoDot';
import LogoDiv from './LogoDiv';
import LinksContainer from './LinksContainer';
import HamburgerIcon from './HamburgerIcon';

export default function NavBar() {
  return (
    <StyledNav>
      <LogoDiv>
        <Logo>
          mb<LogoDot>.</LogoDot>
        </Logo>
      </LogoDiv>
      <LinksContainer className='linksContainer'>
        <StyledLink>Home</StyledLink>
        <StyledLink>About</StyledLink>
        <StyledLink>Projects</StyledLink>
        <StyledLink>Contact</StyledLink>
      </LinksContainer>
      <HamburgerIcon />
    </StyledNav>
  );
}
