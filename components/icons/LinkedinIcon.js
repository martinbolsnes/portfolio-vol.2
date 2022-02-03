import styled from 'styled-components';
import media from 'styled-media-query';
import { Linkedin } from 'react-feather';

const LinkedinIcon = styled(Linkedin)`
  ${media.lessThan('medium')`
width: 36px;
height: 36px;`}
`;

export default LinkedinIcon;
