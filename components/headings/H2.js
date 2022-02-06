import styled from 'styled-components';
import media from 'styled-media-query';

const H2 = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-black);
  margin-bottom: -6px;
  margin-top: var(--size-xl);

  ${media.lessThan('large')`
  font-size: var(--font-size-md);
  margin-top: var(--size-md);
  margin-bottom: -3px;`}/* ${media.lessThan('medium')`
  font-size: var(--font-size);
  margin-top: var(--size);
  margin-bottom: -3px;`} */
`;

export default H2;
