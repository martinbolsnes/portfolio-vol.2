import styled from 'styled-components';
import media from 'styled-media-query';

const HeroWrapper = styled.div`
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: var(--size-xl);
  padding-left: var(--size-xl);

  ${media.lessThan('medium')`
  flex-direction: column;
  padding-right: var(--size-sm);
  padding-left: var(--size-sm);`}

  ${media.lessThan('small')`
  padding-right: var(--size-xs);
  padding-left: var(--size-xs);`}
`;

export default HeroWrapper;
