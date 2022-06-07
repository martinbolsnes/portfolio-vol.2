import styled from 'styled-components';
import media from 'styled-media-query';

const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--size-xl);

  ${media.lessThan('medium')`
  padding-right: var(--size-md);
  padding-left: var(--size-md);`}
`;

export default AboutWrapper;
