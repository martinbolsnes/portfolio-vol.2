import styled from 'styled-components';
import media from 'styled-media-query';

const HeroParagraph = styled.p`
  width: 80%;
  font-size: var(--font-size-md);
  line-height: 150%;
  margin-bottom: 0;

  ${media.lessThan('large')`
  width: 90%`}

  ${media.lessThan('medium')`
  font-size: var(--font-size-base);`}
`;

export default HeroParagraph;
