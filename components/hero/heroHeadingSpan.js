import styled from 'styled-components';
import media from 'styled-media-query';

const HeroHeadingSpan = styled.span`
  color: var(--color-tertiary);

  ${media.lessThan('medium')`
font-size: var(--size-lg);`}
`;

export default HeroHeadingSpan;
