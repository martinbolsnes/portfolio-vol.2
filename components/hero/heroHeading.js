import styled from 'styled-components';
import media from 'styled-media-query';

const HeroHeading = styled.h1`
  color: var(--color-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-black);
  margin: 0;

  ${media.lessThan('medium')`
font-size: var(--size-lg);`}
`;

export default HeroHeading;
