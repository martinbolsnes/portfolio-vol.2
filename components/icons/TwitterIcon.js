import styled from 'styled-components';
import media from 'styled-media-query';
import { Twitter } from 'react-feather';

const TwitterIcon = styled(Twitter)`
  ${media.lessThan('medium')`
width: 26px;
height: 26px;`}
`;

export default TwitterIcon;
