import styled from 'styled-components';
import media from 'styled-media-query';
import { GitHub } from 'react-feather';
import rotateIcons from '../RotateIcons';

const GithubIcon = styled(GitHub)`
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

export default GithubIcon;
