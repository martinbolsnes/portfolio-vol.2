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
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: var(--size);
  cursor: pointer;
  transition-duration: 0.4s;

  :hover {
    border-radius: 8px;
    box-shadow: 2px 12px 12px 2px rgba(0, 0, 0, 0.2),
      4px 17px 50px 4px rgba(0, 0, 0, 0.15);
  }

  ${media.lessThan('medium')`
  width: 120px;
  height: 35px;
  font-size: var(--font-size-base);
  padding: 10px 16px 12px;
  margin: 0;`}

  ${media.lessThan('small')`
  display: none;`}
`;

export default PrimaryButton;
