import styled from 'styled-components';
import media from 'styled-media-query';

const Main = styled.div`
  width: 100%;
  flex: 1 1 auto;
  margin-right: var(--size-xxl);
  margin-left: var(--size-xxl);
  margin-top: 70px;

  ${media.lessThan('medium')`
  margin-right: var(--size-sm);
  margin-left: var(--size-sm);`}

  ${media.lessThan('small')`
  margin-right: var(--size-xs);
  margin-left: var(--size-xs);`}
`;

export default Main;
