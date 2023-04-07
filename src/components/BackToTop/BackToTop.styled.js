import styled from 'styled-components';

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 15px;
  padding: 0;
  opacity: 1;
  transition: 1000ms;
  border-radius: ${p => p.theme.radii.round};
  border-color: ${p => p.theme.colors.primary};
  background-color: transparent;
  cursor: pointer;
`;
