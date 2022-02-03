import styled from 'styled-components';
import media from 'styled-media-query';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-sm);
  padding: 0;
  width: 50%;
  height: 100%;

  ${media.lessThan('small')`
  width: 90%;
  gap: var(--size);`}
`;

export default HeroContainer;
