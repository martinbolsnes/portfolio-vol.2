import styled from 'styled-components';
import media from 'styled-media-query';

const Footer = styled.footer`
  width: 100%;
  height: fit-content;
  flex: 0 0 80px;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: var(--size-xl);
  padding-left: var(--size-xl);

  ${media.lessThan('medium')`
  flex-direction: column;
  padding-right: var(--size-sm);
  padding-left: var(--size-sm);`}

  ${media.lessThan('small')`
  padding-right: var(--size-xs);
  padding-left: var(--size-xs);`}
`;

export default Footer;
