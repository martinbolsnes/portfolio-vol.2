import styled from 'styled-components';

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  margin-right: var(--size-xl);
  margin-left: var(--size-xl);
  z-index: var(--z-sky);
`;

export default StyledNav;
