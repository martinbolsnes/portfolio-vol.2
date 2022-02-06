import styled from 'styled-components';
import media from 'styled-media-query';

const StyledNav = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  padding-right: var(--size-xl);
  padding-left: var(--size-xl);

  ${media.lessThan('medium')`
  padding-right: var(--size-md);
  padding-left: var(--size-md);`}
`;

export default StyledNav;
