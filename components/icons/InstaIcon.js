import styled from 'styled-components';
import media from 'styled-media-query';
import { Instagram } from 'react-feather';

const InstagramIcon = styled(Instagram)`
  ${media.lessThan('medium')`
width: 26px;
height: 26px;`}
`;

export default InstagramIcon;
