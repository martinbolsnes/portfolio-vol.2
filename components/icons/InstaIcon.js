import styled from 'styled-components';
import media from 'styled-media-query';
import { Instagram } from 'react-feather';
import rotateIcons from '../RotateIcons';

const InstagramIcon = styled(Instagram)`
  cursor: pointer;

  :hover {
    stroke: var(--color-secondary);
    display: inline-block;
    animation ${rotateIcons} 0.2s linear; 
    animation-fill-mode: forwards;
  }

  ${media.lessThan('medium')`
    width: 36px;
    height: 36px;`}
`;

export default InstagramIcon;
