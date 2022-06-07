import styled from 'styled-components';
import media from 'styled-media-query';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-sm);
  padding: 0;
  width: 60%;
  height: 100%;

  ${media.lessThan('medium')`
  width: 90%;`}

  ${media.lessThan('small')`
  gap: var(--size-sm);`}

  ${media.greaterThan('large')`
  margin-top: -100px;`}
`;

export default HeroContainer;
