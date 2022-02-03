import styled from 'styled-components';
import media from 'styled-media-query';

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -70px;

  ${media.lessThan('small')`
  flex-direction: column;`}
`;

export default HeroWrapper;
