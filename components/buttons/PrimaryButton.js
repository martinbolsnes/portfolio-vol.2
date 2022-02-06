import styled from 'styled-components';
import media from 'styled-media-query';

const PrimaryButton = styled.button`
  width: 185px;
  height: 61px;
  color: var(--color-white);
  font-size: var(--font-size-md);
  font-family: var(--font-headings);
  font-weight: var(--font-weight-black);
  padding: 16px 24px 18px;
  background-color: var(--color-primary);
  border-radius: 5px;
  border: solid 2px var(--color-primary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
  width: 150px;
  height: 40px;
  font-size: var(--font-size-base);`}
`;

export default PrimaryButton;
