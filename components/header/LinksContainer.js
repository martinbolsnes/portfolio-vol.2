import styled from 'styled-components';

const LinksContainer = styled.ul`
  flex: 2;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default LinksContainer;
