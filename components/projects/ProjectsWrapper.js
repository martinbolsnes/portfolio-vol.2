import styled from 'styled-components';
import media from 'styled-media-query';

const ProjectsWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: var(--size-xl);
  padding-left: var(--size-xl);
  margin-bottom: var(--size-xl);

  ${media.lessThan('medium')`
  padding-right: var(--size-md);
  padding-left: var(--size-md);`}
`;

export default ProjectsWrapper;