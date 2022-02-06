import styled from 'styled-components';
import media from 'styled-media-query';

const Header = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  flex: 0 0 auto;
  background-color: var(--color-white);
  z-index: var(--z-sky);
  /* padding-right: var(--size-sm);
  padding-left: var(--size-sm); */

  /* ${media.lessThan('medium')`
  padding-right: var(--size-md);
  padding-left: var(--size-md);
  `} */
`;

export default Header;
