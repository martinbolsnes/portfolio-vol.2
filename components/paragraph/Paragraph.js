import styled from 'styled-components';
import media from 'styled-media-query';

const Paragraph = styled.div`
  width: 55%;
  margin-top: var(--size-lg);
  font-size: var(--font-size-md);

  ${media.lessThan('medium')`
width: 100%;
margin-top: var(--size-md);
font-size: var(--font-size)
`}
`;

export default Paragraph;
