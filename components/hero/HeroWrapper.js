import styled from 'styled-components';
import media from 'styled-media-query';

const HeroWrapper = styled.div`
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
  flex-direction: column;`}
`;

export default HeroWrapper;
