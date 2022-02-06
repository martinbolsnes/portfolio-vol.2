import styled from 'styled-components';
import media from 'styled-media-query';

const HeroParagraph = styled.p`
  width: 80%;
  font-size: var(--font-size-md);

  ${media.lessThan('large')`
  width: 80%`}

  ${media.lessThan('medium')`
  font-size: var(--font-size-base);`}
`;

export default HeroParagraph;
