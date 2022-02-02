import styled from 'styled-components';

const StyledLink = styled.li`
  font-family: var(--font-headings);
  font-weight: var(--font-weight-black);
  text-decoratioin: none;
  list-style: none;
  margin: 2px 16px 2px 16px;
  color: var(--color-black);
  opacity: 0.6;

  :active {
    border-bottom: 2px solid var(--color-secondary);
    color: var(--color-black);
  }

  :hover {
    border-bottom: 2px solid var(--color-secondary);
    cursor: pointer;
    margin: 2px 16px 0px 16px;
  }
`;

export default StyledLink;
