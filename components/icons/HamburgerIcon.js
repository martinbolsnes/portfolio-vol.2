import styled from 'styled-components';
import { Menu } from 'react-feather';

const HamburgerIcon = styled(Menu)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default HamburgerIcon;
