import styled from 'styled-components';
import media from 'styled-media-query';
import { Linkedin } from 'react-feather';

const LinkedinIcon = styled(Linkedin)`
  cursor: pointer;

  :hover {
    stroke: var(--color-secondary);
  }

  ${media.lessThan('medium')`
    width: 36px;
    height: 36px;`}
`;

export default LinkedinIcon;
