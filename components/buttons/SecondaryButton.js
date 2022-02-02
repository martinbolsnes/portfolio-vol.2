import styled from 'styled-components';

const SecondaryButton = styled.button`
  width: 295px;
  height: 61px;
  color: var(--color-primary);
  font-size: var(--size-md);
  font-family: var(--font-headings);
  font-weight: var(--font-weight-black);
  padding: 16px 24px 18px;
  background-color: var(--color-white);
  border-radius: 5px;
  border: solid 2px var(--color-primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default SecondaryButton;
