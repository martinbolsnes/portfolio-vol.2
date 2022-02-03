import styled from 'styled-components';
import media from 'styled-media-query';
import { GitHub } from 'react-feather';

const GithubIcon = styled(GitHub)`
  ${media.lessThan('medium')`
width: 36px;
height: 36px;`}
`;

export default GithubIcon;
