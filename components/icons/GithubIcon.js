import styled from 'styled-components';
import media from 'styled-media-query';
import { GitHub } from 'react-feather';

const GithubIcon = styled(GitHub)`
  ${media.lessThan('medium')`
width: 26px;
height: 26px;`}
`;

export default GithubIcon;
