import styled from 'styled-components';
import media from 'styled-media-query';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-sm);
  padding: 0;
  width: 50%;
  margin-top: -150px;

  ${media.lessThan('small')`
  width: 90%;
  margin-top: 50px;`}
`;

export default HeroContainer;
