import styled from 'styled-components';
import media from 'styled-media-query';
import { Instagram } from 'react-feather';

const InstagramIcon = styled(Instagram)`
  ${media.lessThan('medium')`
width: 36px;
height: 36px;`}
`;

export default InstagramIcon;
